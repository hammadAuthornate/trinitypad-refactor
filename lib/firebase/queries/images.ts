"use client";

import { useQuery } from "@tanstack/react-query";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config";

export function useGetFirebaseFileById({ imageId }: { imageId?: string }) {
  return useQuery({
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000, //10 minutes
    enabled: !!imageId,
    queryKey: ["firebase-image-id", imageId],
    queryFn: async () => {
      if (!imageId || imageId === "") {
        throw new Error("Image ID not provided");
      }
      const res = await getDownloadURL(ref(storage, imageId));
      return res;
    },
  });
}
