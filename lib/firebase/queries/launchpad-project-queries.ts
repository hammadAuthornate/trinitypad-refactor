import { db } from "@/lib/firebase/config";
// import { FAQDetails } from "@/interface/faq-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useGetCampaignsFromContract } from "./campaign-queries";
import { ContractStatesContext } from "@/lib/providers/Contracts";
import { ethers } from "ethers";
import { trinityPad } from "@/abis/pad/trinity-pad";
import { TrinityERC20 } from "@/abis/token/trinity-erc20";
import { useNotify } from "@/components/ui/toast/notify";
import dayjs from "dayjs";
import { LaunchpadInvestmentFirebaseDetails } from "@/interface/investment-types";
import { erc20Mock } from "@/abis/mocks/erc20-mock";

export function useGetAmountRaisedInLaunchpad({
  projectName,
}: {
  projectName?: string;
}) {
  const { data } = useGetCampaignsFromContract();
  const { mySigner } = ContractStatesContext();
  const selectedLaunchpad = data
    ?.filter((i) => i.projectName === projectName)
    ?.at(0);
  return useQuery({
    queryKey: ["total-amount-raised-in-campaign-", projectName],
    queryFn: async () => {
      if (selectedLaunchpad?.projectName !== projectName)
        throw new Error("campaign ID does not match project name");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error(
          "selected project has not selected its raising currency.",
        );

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.raisingCurrency,
        TrinityERC20.abi,
        mySigner,
      );

      const totalAmountRaised = await dynamicLaunchpad?.balanceOf(
        selectedLaunchpad?.launchpad,
      );

      if (totalAmountRaised === null) {
        throw new Error("No value Returned from Contract.");
      }

      return totalAmountRaised?.toString();
    },
  });
}

export function useGetInvestmentsInLaunchpad({
  projectName,
}: {
  projectName?: string;
}) {
  const { data } = useGetCampaignsFromContract();
  const { mySigner, activeAccount } = ContractStatesContext();
  const selectedLaunchpad = data
    ?.filter((i) => i.projectName === projectName)
    ?.at(0);
  return useQuery({
    queryKey: ["my-investments-in-launchpad-", projectName],
    queryFn: async () => {
      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );

      const totalInvestments = await dynamicLaunchpad?.investments(
        activeAccount?.address,
      );
      if (totalInvestments === null) {
        throw new Error("No value Returned from Contract.");
      }
      return totalInvestments?.toString();
    },
  });
}

export function useSubmitInvestmentInLaunchpad() {
  const notify = useNotify();
  const { data } = useGetCampaignsFromContract();
  const { mySigner, activeAccount } = ContractStatesContext();
  return useMutation({
    mutationFn: async ({
      projectName,
      amount,
    }: {
      projectName?: string;
      amount: string;
    }) => {
      const selectedLaunchpad = data
        ?.filter((i) => i.projectName === projectName)
        ?.at(0);

      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      //////////// ****** THIS FUNCTION IS FOR MINTING MTK TOKENS IN TESTNET BEFORE INVEST (NOT TO BE USED IN MAINNET)
      // const raisingCurrencyToken = new ethers.Contract(
      //   selectedLaunchpad?.raisingCurrency,
      //   erc20Mock.abi,
      //   mySigner,
      // );
      // const mintResponse = await raisingCurrencyToken?.mint(
      //   activeAccount?.address,
      //   amount,
      // );
      // await mintResponse?.wait();
      //////////// ****** END

      const raisingCurrencyContract = new ethers.Contract(
        selectedLaunchpad?.raisingCurrency,
        TrinityERC20.abi,
        mySigner,
      );

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );
      const approvalReq = await raisingCurrencyContract?.approve(
        selectedLaunchpad?.launchpad,
        amount,
      );
      await approvalReq?.wait();
      const investResponse = await dynamicLaunchpad?.invest(amount);
      await investResponse?.wait();
      await addDoc(collection(db, "launchpadInvestments"), {
        projectName: selectedLaunchpad?.projectName,
        projectOwner: selectedLaunchpad?.owner,
        tokenName: selectedLaunchpad?.tokenName,
        amount: amount,
        investedBy: activeAccount?.address,
        createdAt: dayjs()?.unix(),
      } as LaunchpadInvestmentFirebaseDetails);
      return investResponse;
    },
    onSuccess: () => {
      notify({ type: "success", title: "Successfully submitted investment" });
    },
    onError: () => {
      notify({ type: "error", title: "Error submitting investment" });
    },
  });
}

export function useSubmitPullInvestmentFromLaunchpad() {
  const notify = useNotify();
  const { data } = useGetCampaignsFromContract();
  const { mySigner, activeAccount } = ContractStatesContext();
  return useMutation({
    mutationFn: async ({
      projectName,
      amount,
    }: {
      projectName?: string;
      amount: string;
    }) => {
      const selectedLaunchpad = data
        ?.filter((i) => i.projectName === projectName)
        ?.at(0);

      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );

      const pullResponse = await dynamicLaunchpad?.pullInvestment(amount);
      await pullResponse?.wait();
      await addDoc(collection(db, "launchpadPullInvestments"), {
        projectName: selectedLaunchpad?.projectName,
        projectOwner: selectedLaunchpad?.owner,
        tokenName: selectedLaunchpad?.tokenName,
        amount: amount,
        pulledBy: activeAccount?.address,
        createdAt: dayjs()?.unix(),
      } as LaunchpadInvestmentFirebaseDetails);
      return pullResponse;
    },
    onSuccess: () => {
      notify({ type: "success", title: "Successfully pulled investment" });
    },
    onError: () => {
      notify({ type: "error", title: "Error pulling investment" });
    },
  });
}

export function useGetAllInvestmentsForLaunchpadFromFirebase({
  projectName,
}: {
  projectName?: string;
}) {
  return useQuery({
    queryKey: ["all-investments-in-project-", projectName],
    queryFn: async () => {
      if (!projectName) {
        throw new Error("project name not provided");
      }
      const querySnapshot = await getDocs(
        query(
          collection(db, "launchpadInvestments"),
          where("projectName", "==", projectName),
        ),
      );

      if (querySnapshot?.empty) return [];

      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id };
      });

      return data as LaunchpadInvestmentFirebaseDetails[];
    },
  });
}

export function useGetCampaignStatusFromContract({
  projectName,
}: {
  projectName?: string;
}) {
  const { data } = useGetCampaignsFromContract();
  const { mySigner } = ContractStatesContext();
  return useQuery({
    queryKey: ["campaign-status-from-contract-for-", projectName],
    queryFn: async () => {
      if (!projectName) {
        throw new Error("project name not provided");
      }
      const selectedLaunchpad = data
        ?.filter((i) => i.projectName === projectName)
        ?.at(0);

      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );

      const launchpadStatus = await dynamicLaunchpad?.status();
      /**
       * launchpad status:
       * 0 = ACTIVE
       * 1 = CANCELLED
       * 2 = CLOSED
       */
      return launchpadStatus?.toString();
    },
  });
}

export function useSubmitCancelLaunchpad() {
  const notify = useNotify();
  const { data } = useGetCampaignsFromContract();
  const { mySigner, activeAccount } = ContractStatesContext();
  return useMutation({
    mutationFn: async ({ projectName }: { projectName?: string }) => {
      const selectedLaunchpad = data
        ?.filter((i) => i.projectName === projectName)
        ?.at(0);

      if (selectedLaunchpad?.owner !== activeAccount?.address) {
        throw new Error("You are not the owner of this Launchpad.");
      }

      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );

      const pullResponse = await dynamicLaunchpad?.cancelLaunchpad();
      await pullResponse?.wait();
      return pullResponse;
    },
    onSuccess: () => {
      notify({ type: "success", title: "Successfully Closed launchpad" });
    },
    onError: () => {
      notify({ type: "error", title: "Error closing launchpad" });
    },
  });
}

export function useSubmitClaimRefundFromLaunchpad() {
  const notify = useNotify();
  const { data } = useGetCampaignsFromContract();
  const { mySigner } = ContractStatesContext();
  return useMutation({
    mutationFn: async ({ projectName }: { projectName?: string }) => {
      const selectedLaunchpad = data
        ?.filter((i) => i.projectName === projectName)
        ?.at(0);

      // if (selectedLaunchpad?.status !== 2) {
      //   throw new Error(
      //     "This Project is not cancelled. Project must be cancelled for the refund to occur.",
      //   );
      // }

      if (!projectName) throw new Error("project name not provided");
      if (!selectedLaunchpad?.launchpad)
        throw new Error("selected project has not been approved for launch.");
      if (!selectedLaunchpad?.raisingCurrency)
        throw new Error("selected project has not been approved for launch.");

      const dynamicLaunchpad = new ethers.Contract(
        selectedLaunchpad?.launchpad,
        trinityPad.abi,
        mySigner,
      );

      const pullResponse = await dynamicLaunchpad?.claimRefund();
      await pullResponse?.wait();
      return pullResponse;
    },
    onSuccess: () => {
      notify({
        type: "success",
        title: "Successfully refunded from launchpad",
      });
    },
    onError: () => {
      notify({ type: "error", title: "Error refunding from launchpad" });
    },
  });
}
