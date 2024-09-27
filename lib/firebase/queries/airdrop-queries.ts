import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db, storage } from "../../config";
import { AirdropCarouselType } from "@/interface/types/airdrop-types";
import generateRandomString from "@/lib/generateRandomString";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function useGetAirdropCarouselItems() {
  return useQuery({
    queryKey: ["airdrop-carousel-items"],
    queryFn: async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "carouselItems"))
      );
      if (querySnapshot?.empty) throw new Error("No Airdrop carousel items.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), id: i.id } as AirdropCarouselType;
      });
      for (let index = 0; index < data?.length; index++) {
        if (data[index]?.image) {
          const res = await getDownloadURL(ref(storage, data[index]?.image));
          data[index].image = res;
        }
      }
      return data;
    },
  });
}

export function useSubmitAirdropCarouselItems() {
  return useMutation({
    mutationFn: async ({
      data,
      file,
    }: {
      data: Partial<AirdropCarouselType>;
      file: File | null;
    }) => {
      const details: Partial<AirdropCarouselType> = { ...data };
      if (file) {
        const randomFileName = generateRandomString();
        await uploadBytes(ref(storage, randomFileName), file);
        details.image = randomFileName;
      }

      await addDoc(collection(db, "carouselItems"), details);
    },
  });
}

export function useDeleteAirdropCarouselItem() {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await deleteDoc(doc(db, "carouselItems", id));
    },
  });
}
