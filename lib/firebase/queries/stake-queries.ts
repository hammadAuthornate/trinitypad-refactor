import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { StakeDetails } from "@/interface/stakes-types";
import MerkleTree from "merkletreejs";
import { ContractStatesContext } from "@/lib/providers/Contracts";
import { usePrivy } from "@privy-io/react-auth";
import { ethers } from "ethers";
import { useNotify } from "@/components/ui/toast/notify";

export function useGetStakesForAddress({ address }: { address?: string }) {
  return useQuery({
    queryKey: ["stakes-for-address-", address],
    queryFn: async () => {
      if (!address) {
        throw new Error("User address is undefined");
      }

      const querySnapshot = await getDocs(
        query(collection(db, "stakes"), where("walletAddress", "==", address)),
      );
      if (querySnapshot?.empty) {
        throw new Error("This Address has no Stakes");
      }
      const data = querySnapshot?.docs?.map(
        (i) => ({ ...i.data(), id: i.id }) as StakeDetails,
      );
      const sortedData = data?.toSorted(
        (a, b) => Number(a.unixTimestamp) - Number(b.unixTimestamp),
      );

      return sortedData;
    },
  });
}

export function useSubmitStake() {
  return useMutation({
    mutationKey: ["submit-stake"],
    mutationFn: async ({ data }: { data: Partial<StakeDetails> }) => {
      await addDoc(collection(db, "stakes"), {
        ...data,
      });
    },
  });
}

export function useDeleteStake() {
  return useMutation({
    mutationKey: ["delete-stake"],
    mutationFn: async ({ id }: { id: string }) => {
      await deleteDoc(doc(db, "stakes", id));
    },
  });
}

export function useSubmitUnstakeByIndex() {
  const { user } = usePrivy();
  const { sepoliaStakingContract } = ContractStatesContext();
  const deleteStakeMutation = useDeleteStake();
  const userStakesData = useGetStakesForAddress({
    address: user?.wallet?.address,
  });
  const { data } = useGetStakesForAddressFromContract();
  const toast = useNotify();
  return useMutation({
    mutationKey: ["submit-unstake"],
    mutationFn: async ({ index }: { index: number }) => {
      toast({ title: "loading unstake request", type: "warning" });
      const totalStakes = userStakesData?.data;
      const address = user?.wallet?.address;
      if (!address) {
        throw new Error("user address is undefined.");
      }

      if (!totalStakes) {
        throw new Error("stakes not provided");
      }

      const leafNodes = totalStakes.map((obj) =>
        ethers.solidityPackedKeccak256(
          ["address", "uint256", "uint256"],
          [obj.walletAddress, obj.reward, obj.blockNumber],
        ),
      );

      const merkleTree = new MerkleTree(leafNodes, ethers.keccak256, {
        sortPairs: true,
      });

      const rootHash = merkleTree.getRoot();

      const unstakeIndex = totalStakes?.at(index);

      const leafNode = [
        ethers.solidityPackedKeccak256(
          ["address", "uint256", "uint256"],
          [
            unstakeIndex?.walletAddress,
            unstakeIndex?.reward,
            unstakeIndex?.blockNumber,
          ],
        ),
      ];

      const leaf = leafNode[0];
      const proof = merkleTree.getHexProof(leaf);

      const result = await sepoliaStakingContract?.unstake(
        index,
        unstakeIndex?.reward,
        proof,
      );

      deleteStakeMutation?.mutate({ id: unstakeIndex?.id! });

      return result;
    },
    onError: () => {
      toast({ title: "Error submitting unstake request", type: "error" });
    },
    onSuccess: () => {
      toast({ title: "Successfully unstaked amount", type: "success" });
    },
  });
}

export function useGetStakesForAddressFromContract() {
  const { user } = usePrivy();
  const { sepoliaStakingContract } = ContractStatesContext();

  return useQuery({
    queryKey: ["unlock-stakes-from-contract-for", user?.wallet?.address],
    queryFn: async () => {
      const address = user?.wallet?.address;
      if (!address) {
        throw new Error("user address is undefined.");
      }

      const userStakesLength =
        await sepoliaStakingContract?.userStakesLength(address);

      let totalStakes = [];
      for (let index = 0; index < Number(userStakesLength); index++) {
        const result = await sepoliaStakingContract?.walletStakes(
          address,
          index,
        );

        const amountStake: string = result?.at(0);
        const blockNumber: string = result?.at(1);
        const timestamp: string = result?.at(2);
        totalStakes?.push({
          amount: amountStake,
          blockNumber: blockNumber,
          timestamp: timestamp,
        });
      }

      return totalStakes;
    },
  });
}

export function useSubmitStakeRequest() {
  const notify = useNotify();
  const {
    mySigner,
    chainId,
    usdtContract,
    sepoliaStakingContract,
    sepoliaStakeContractAddress,
  } = ContractStatesContext();
  const { user } = usePrivy();
  return useMutation({
    mutationKey: ["submit-stake-request"],
    mutationFn: async ({ amount }: { amount: number }) => {
      const address = user?.wallet?.address;
      if (!address) {
        notify({
          title: "user address is undefined. Please connect your wallet.",
          type: "error",
        });
        throw new Error("user address is undefined");
      }
      if (amount <= 0) {
        notify({
          title: "Amount should be greater than 0",
          type: "error",
        });
        throw new Error("Amount should be greater than 0");
      }

      const totalAmountAdjusted = ethers
        .parseUnits(amount?.toString(), 18)
        ?.toString();
      const initialStakeSubmit = await addDoc(collection(db, "stakes"), {
        walletAddress: address,
        stakeAmount: totalAmountAdjusted,
        status: "pending",
      });

      const parsedAmount = ethers.parseUnits(amount?.toString(), 18);
      const approveTxn = await usdtContract?.approve(
        sepoliaStakeContractAddress,
        parsedAmount,
      );

      await approveTxn?.wait();

      const stakeResponse =
        await sepoliaStakingContract?.stakeTrinity(parsedAmount);

      await stakeResponse.wait();

      const userStakesLength =
        await sepoliaStakingContract?.userStakesLength(address);

      // TODO: ask fraz to add index numbering for each stake with each wallet address
      const result = await sepoliaStakingContract?.walletStakes(
        address,
        Number(userStakesLength) - 1,
      );

      const amountStake: string = result?.at(0);
      const blockNumber: string = result?.at(1);
      const timestamp: string = result?.at(2);

      await updateDoc(doc(db, "stakes", initialStakeSubmit?.id), {
        // walletAddress: address,
        stakeAmount: amountStake?.toString(),
        blockNumber: blockNumber?.toString(),
        unixTimestamp: timestamp?.toString(),
        reward: "1000000000000000",
        status: "staked",
      });
    },
  });
}

export function useGetTotalStakeDetailsFromApi() {
  return useQuery({
    queryKey: ["total-stakes-details"],
    queryFn: async () => {
      const res = await fetch("/api/staking/total");
      const data = await res?.json();
      if (!data?.total || !data.participants) {
        throw Error("no response from api");
      }
      return {
        total: data?.total as number,
        participants: data?.participants as number,
        rewards: data?.rewards as number,
      };
    },
  });
}
