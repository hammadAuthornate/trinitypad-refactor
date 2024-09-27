import { db } from "@/firebase/config";
import { CampaignDetails } from "@/interface/types/ido-types";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query } from "firebase/firestore";

export function useGetShadowCampaignsFromFirebase() {
  return useQuery({
    queryKey: ["shadow-campaign-from-firebase"],
    queryFn: async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "shadowCampaigns")),
      );
      if (querySnapshot?.empty) throw new Error("No Shadow Quest items.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as CampaignDetails;
      });
      return data;
    },
  });
}
