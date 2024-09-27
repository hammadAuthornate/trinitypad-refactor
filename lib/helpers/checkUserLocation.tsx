"use client";

import { useQuery } from "@tanstack/react-query";

export default function useCheckUserLocation() {
  return useQuery({
    queryKey: ["user-location"],
    queryFn: async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
          const { latitude, longitude } = coords;
        });
      }
    },
  });
}
