import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { AirdropQuestType } from "@/interface/airdrop-types";
import { GetCachedLeaderBoards } from "@/lib/firebase/server-queries/profile";

export function useGetAirdropQuestItems() {
  return useQuery({
    queryKey: ["quest-items"],
    queryFn: async () => {
      const querySnapshot = await getDocs(query(collection(db, "quests")));
      if (querySnapshot?.empty) throw new Error("No Quest items.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as AirdropQuestType;
      });
      return data;
    },
  });
}

export function useSubmitAirdropQuestItems() {
  return useMutation({
    mutationFn: async ({ data }: { data: Partial<AirdropQuestType> }) => {
      await addDoc(collection(db, "quests"), {
        ...data,
      });
    },
  });
}

export function useDeleteAirdropQuestItem() {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await deleteDoc(doc(db, "quests", id));
    },
  });
}

export function useGetLeaderBoard() {
  return useQuery({
    queryKey: ["leaderboard"],
    staleTime: 1000 * 60 * 2, //2 minutes
    queryFn: async () => {
      const data = await GetCachedLeaderBoards();
      return data;
    },
  });
}
