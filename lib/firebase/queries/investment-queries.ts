import { useMutation, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, setDoc, query, where } from "firebase/firestore"
import { db } from "@/firebase/config"
import { ContractStatesContext } from "@/context/contracts"
import {
  InvestmentDetails,
  PreInvestmentDetails,
} from "@/interface/types/investment-types";

export function useGetWalletInvestments({ address }: { address?: string }) {
  return useQuery({
    queryKey: ["investments-for-wallet-", address],
    queryFn: async () => {
      if (!address) {
        return { investments: [], preInvestments: [] };
      }

      const investmentsRef = collection(db, "investments");
      const querySnapshot = await getDocs(
        query(investmentsRef, where("wallet", "==", address.toLowerCase())),
      );

      const preInvestmentsRef = collection(db, "preInvestments");
      const querySnapshot2 = await getDocs(
        query(preInvestmentsRef, where("wallet", "==", address.toLowerCase())),
      );

      if (querySnapshot?.empty && querySnapshot2?.empty)
        return { investments: [], preInvestments: [] };

      const investments = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as InvestmentDetails;
      });

      const preInvestments = querySnapshot2?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as PreInvestmentDetails;
      });

      return { investments, preInvestments };
    },
  });
}

export function useGetTotalInvestmentsFromApi() {
  return useQuery({
    queryKey: ["total-investments"],
    queryFn: async () => {
      const res = await fetch("/api/investments/total");
      const data = await res?.json();
      if (!data?.total || !data.participants) {
        throw Error("no response from api");
      }
      return {
        total: data?.total as number,
        participants: data?.participants as number,
      };
    },
  });
}

export function useSetWalletInvestment() {
  return useMutation({
    mutationKey: ["set-investment-for-wallet"],
    mutationFn: async (props: PreInvestmentDetails) => {
      if (!props) return;

      const querySnapshot = await getDoc(
        doc(db, "preInvestments", props.txhash),
      );
      if (querySnapshot.exists()) throw Error("Transaction already recorded!");

      await setDoc(doc(db, "preInvestments", props.txhash), {
        ...props,
        wallet: props.wallet.toLowerCase(),
      });
    },
  });
}

export function useGetTotalLockedTNT() {
  const { sepoliaStakeContractAddress, usdcContract } = ContractStatesContext()
  return useQuery({
    queryKey: ["total-locked-TNT"],
    queryFn: async () => {
      const res = await usdcContract?.balanceOf(
        "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3",
      )
      return res
    },
  })
}