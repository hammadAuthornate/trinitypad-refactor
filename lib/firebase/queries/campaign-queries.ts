import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAllCampaigns,
  getCampaignData,
} from "@/lib/firebase/queries/campaign";
import { ContractStatesContext } from "@/lib/providers/Contracts";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  updateDoc,
  DocumentData,
  QuerySnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { CampaignDetails } from "@/interface/ido-types";
import { usePrivy, useWallets } from "@privy-io/react-auth";

export function useGetAddressCampaign(address: string) {
  return useQuery({
    enabled: !!address,
    queryKey: ["campaigns", address],
    queryFn: async () => {
      const data = await getCampaignData(address);
      return data as CampaignDetails[];
    },
  });
}

export function useGetAllCampaign() {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const data = await fetchAllCampaigns();
      return data as CampaignDetails[];
    },
  });
}

export function useGetCampaignsFromContract() {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { trinityFactoryContract } = ContractStatesContext();
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      if (!authenticated) throw new Error("User not Authenticated.");
      if (!wallets?.at(0)?.address)
        throw new Error("user wallet not provided.");

      const lengthOfCampaign = await trinityFactoryContract?.campaignsLength();

      const campaigns: Partial<CampaignDetails>[] = [];
      for (let index = 1; index < lengthOfCampaign; index++) {
        const res = await trinityFactoryContract?.campaigns(index);

        const revisedData: Partial<CampaignDetails> = {
          allowPullingInvestments: res?.at(0),
          status: res?.at(1)?.toString(),
          presaleRate: res?.at(2)?.toString(),
          cliffDays: res?.at(3)?.toString(),
          linearUnlockDays: res?.at(4)?.toString(),
          circulatingSupply: res?.at(5)?.toString(),
          vestedSupply: res?.at(6)?.toString(),
          durationSeconds: res?.at(7)?.toString(),
          raiseGoal: res?.at(8)?.toString(),
          projectName: res?.at(9)?.toString(),
          tokenName: res?.at(10)?.toString(),
          tokenSymbol: res?.at(11)?.toString(),
          owner: res?.at(12)?.toString(),
          launchpad: res?.at(13)?.toString(),
          raisingCurrency: res?.at(14)?.toString(),
        };

        // const revisedData = JSON.parse(JSON.stringify(res));
        // const revisedData: Record<string, any> = {};

        // for (const key in res) {
        //   if (res.hasOwnProperty(key)) {
        //     revisedData[key] = res[key];
        //   }
        // }

        campaigns.push(revisedData);
      }

      if (campaigns?.length === 0 || campaigns === null) {
        throw new Error("Unable to Retrieve Campaigns from Contract.");
      }

      const revisedCampaigns: CampaignDetails[] = JSON.parse(
        JSON.stringify(campaigns),
      );

      /***
       * Campaign Status:
       * 0 = PENDING
       * 1 = APPROVED
       * 2 = REJECTING
       */

      return revisedCampaigns;
    },
  });
}

export function useSubmitCampaignToFirebase() {
  return useMutation({
    mutationKey: ["submit-campaign-firebase"],
    mutationFn: async ({ data }: { data: Partial<CampaignDetails> }) => {
      const details: Partial<CampaignDetails> = data;

      await addDoc(collection(db, "campaigns"), details);
    },
  });
}

export function useFetchAllCampaignFromContract() {
  const { trinityFactoryContract } = ContractStatesContext();
  const { ready, authenticated } = usePrivy();
  return useQuery({
    queryKey: ["campaigns-from-contract"],
    queryFn: async () => {
      if (!trinityFactoryContract) {
        throw new Error("trinity factory not initialized");
      }
      if (!ready || !authenticated) {
        throw new Error("user is not authenticated");
      }

      const txn = await trinityFactoryContract?.campaignsLength();

      const allCampaigns = [];
      if (Number(txn?.toString())) {
        for (let i = 0; i < Number(txn?.toString()); i++) {
          const campaign = await trinityFactoryContract?.campaigns(i);
          const campaignObject: Partial<CampaignDetails> = {
            campaignId: i,
            allowPullingInvestments: campaign[0],
            status: Number(campaign[1]?.toString()),
            presaleRate: Number(campaign[2]?.toString()),
            cliffDays: Number(campaign[3]?.toString()),
            linearUnlockDays: Number(campaign[4]?.toString()),
            circulatingSupply: Number(campaign[5]?.toString()),
            vestedSupply: Number(campaign[6]?.toString()),
            durationSeconds: Number(campaign[7]?.toString()),
            raiseGoal: Number(campaign[8]?.toString()),
            projectName: campaign[9],
            tokenName: campaign[10],
            tokenSymbol: campaign[11],
            owner: campaign[12],
            launchpad: campaign[13],
            raisingCurrency: campaign[14],
          };
          allCampaigns?.push(campaignObject);
        }
        return allCampaigns;
      }
      return null;
    },
  });
}

export function useSubmitCampaignAdminApproval() {
  return useMutation({
    mutationKey: ["submit-campaign-approval"],
    mutationFn: async ({ id, approver }: { id: string; approver: string }) => {
      if (!id) {
        throw new Error("ID not provided");
      }
      await updateDoc(doc(db, "campaigns", id), {
        approved: true,
        approver: approver,
      });
    },
  });
}

export type CampaignFilterOptionType =
  | "newest"
  | "oldest"
  | "pending"
  | "cancelled"
  | "shadow";
export function useGetCampaignsFromFirebase(
  filterOption: CampaignFilterOptionType = "newest",
) {
  return useQuery({
    queryKey: ["campaign-from-firebase", filterOption],
    queryFn: async () => {
      let querySnapshot: QuerySnapshot<DocumentData, DocumentData> | null =
        null;
      const campaignRef = collection(db, "campaigns");
      const shadowCampaignRef = collection(db, "shadowCampaigns");

      let queryRef = query(campaignRef);

      switch (filterOption) {
        case "newest":
          queryRef = query(campaignRef, orderBy("createdAt", "desc"));
          break;
        case "oldest":
          queryRef = query(campaignRef, orderBy("createdAt"));
          break;
        case "cancelled":
          queryRef = query(campaignRef, where("status", "==", 2));
          break;
        case "pending":
          queryRef = query(campaignRef, where("status", "==", 0));
          break;
        case "shadow":
          queryRef = query(shadowCampaignRef);
          break;
        default:
          queryRef = query(campaignRef);
          break;
      }

      querySnapshot = await getDocs(queryRef);

      if (querySnapshot?.empty) throw new Error("No Quest items.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as CampaignDetails;
      });
      return data;
    },
  });
}

export function useGetCampaignFromFirebase(col: string, id: string) {
  return useQuery({
    queryKey: ["campaign-by-id-from-firebase"],
    queryFn: async () => {
      const querySnapshot = await getDoc(doc(db, col, id));
      if (!querySnapshot.exists()) throw new Error("Campaign not found");
      return querySnapshot.data() as CampaignDetails;
    },
  });
}
