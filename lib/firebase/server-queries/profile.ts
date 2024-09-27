"use server";

import { db } from "@/lib/firebase/config";
import { LeaderBoardUserDetails, UserDetails } from "@/interface/profile-types";
import { collection, getDocs, query } from "firebase/firestore";
import { unstable_cache as cache } from "next/cache";
// import { PrivyClient } from "@privy-io/server-auth";

//#region PROFILE_FUNCTIONS
export async function GetAllUserProfiles() {
  // const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;
  // const privyAppSecretId = process.env.PRIVY_SECRET_ID!;
  // const privyServerClient = new PrivyClient(privyAppId, privyAppSecretId);
  // const users = await privyServerClient?.getUsers();
  return [];

  // return users;
  // const querySnapshot = await getDocs(query(collection(db, "users")));
  // if (querySnapshot?.empty) throw new Error("No users in db.");
  // const data = querySnapshot?.docs?.map((i) => {
  //   return { ...i.data(), id: i.id } as UserDetails;
  // });
  // return data;
}

export const GetCachedAllUserProfile = cache(
  () => GetAllUserProfiles(),
  ["all-profiles"],
  { revalidate: 1000 }
);
//#endregion PROFILE_FUNCTIONS

//#region LEADER_BOARD_FUNCTIONS
export async function GetLeaderBoards() {
  const allUserProfiles: any[] = await GetAllUserProfiles();

  const leaderBoardData: LeaderBoardUserDetails[] = [];

  for (let index = 0; index < allUserProfiles.length; index++) {
    const profile = allUserProfiles?.at(index);

    let totalPoints = 0;
    if (
      profile?.points?.discord?.refers &&
      profile?.points?.discord?.refers?.length > 0
    )
      totalPoints += profile?.points?.discord?.refers?.length * 100;

    if (
      profile?.points?.referal?.refers &&
      profile?.points?.referal?.refers?.length > 0
    )
      totalPoints += profile?.points?.referal?.refers?.length * 20;

    if (
      profile?.points?.telegram?.refers &&
      profile?.points?.telegram?.refers?.length > 0
    )
      totalPoints += profile?.points?.telegram?.refers?.length * 20;

    if (
      profile?.points?.twitter?.refers &&
      profile?.points?.twitter?.refers?.length > 0
    )
      totalPoints += profile?.points?.twitter?.refers?.length * 20;

    leaderBoardData?.push({
      wallet: `${profile?.wallet?.address?.slice(
        0,
        4
      )}...${profile?.wallet?.address?.slice(-4)}`,
      totalPoints: totalPoints,
    });
  }

  const sortedData = leaderBoardData
    ?.sort((a, b) => a.totalPoints - b.totalPoints)
    ?.reverse();

  return sortedData;
}

export const GetCachedLeaderBoards = cache(() => GetLeaderBoards(), ["leaderboards"], {
  revalidate: 60 * 12, // 12 hours cache for leaderboards
});
//#endregion LEADER_BOARD_FUNCTIONS
