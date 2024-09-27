import { db } from "@/firebase/config";
import { FAQDetails } from "@/interface/types/faq-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";

export function useGetProjectFAQ({ projectId }: { projectId?: string }) {
  return useQuery({
    queryKey: ["faq-for-project-", projectId],
    queryFn: async () => {
      if (!projectId) throw new Error("project id not provided");

      const querySnapshot = await getDocs(
        query(collection(db, "campaigns", projectId, "FAQ")),
      );
      if (querySnapshot?.empty)
        throw new Error("No FAQ found for this project.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as FAQDetails;
      });
      return data;
    },
  });
}

export function useSubmitProjectFAQ({ projectId }: { projectId?: string }) {
  return useMutation({
    mutationFn: async ({
      data,
      updateId,
    }: {
      data: Partial<FAQDetails>;
      updateId?: string;
    }) => {
      if (!projectId) throw new Error("project id not provided");

      if (updateId) {
        await updateDoc(doc(db, "campaigns", projectId, "FAQ", updateId), data);
      } else {
        await addDoc(collection(db, "campaigns", projectId, "FAQ"), data);
      }
    },
  });
}

export function useDeleteProjectFAQ() {
  return useMutation({
    mutationFn: async ({
      projectId,
      faqId,
    }: {
      projectId?: string;
      faqId?: string;
    }) => {
      if (!projectId || !faqId) throw Error("missing ids");

      await deleteDoc(doc(db, "campaigns", projectId, "FAQ", faqId));
    },
  });
}
