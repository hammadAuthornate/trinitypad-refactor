import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { AirdropQuestType } from "@/interface/types/airdrop-types";
import {
  User,
  Wallet,
  Twitter,
  Discord,
  Telegram,
  Google,
} from "@privy-io/react-auth";
import { UserDetails } from "@/interface/types/profile-types";
import { totalPoints } from "@/helpers/global-logic";

function removeUndefinedProperties<T>(obj: T): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

export async function createNewUser(userDetails: User) {
  try {
    const userObject = {
      id: userDetails.id,
      email: userDetails?.email,
      discord: userDetails.discord || null,
      twitter: userDetails.twitter || null,
      wallet: userDetails.wallet || null,
      telegram: userDetails.telegram || null,
      google: userDetails.google || null,
      points: {
        discord: {
          refers: [],
          points: 0,
        },
        twitter: {
          refers: [],
          points: 0,
        },
        telegram: {
          refers: [],
          points: 0,
        },
        referal: {
          refers: [],
          points: 0,
        },
      },
    };

    const newUserObject = removeUndefinedProperties(userObject);

    await setDoc(doc(db, "users", userDetails?.id), newUserObject);
  } catch (e) {
    console.error("Error Creating new User ", e);
  }
}

export async function updateUser(userDetails: User) {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", userDetails.id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      const userRef = doc.ref;

      const userObject = {
        discord: userDetails.discord,
        email: userDetails?.email,
        twitter: userDetails.twitter,
        wallet: userDetails.wallet,
        telegram: userDetails.telegram,
        points: {
          discord: {
            refers: [],
            points: 0,
          },
          twitter: {
            refers: [],
            points: 0,
          },
          telegram: {
            refers: [],
            points: 0,
          },
          referal: {
            refers: [],
            points: 0,
          },
        },
      };
      await updateDoc(userRef, userObject);
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Re-throwing error for further handling if needed
  }
}

export async function createOrUpdateUser(userDetails: User) {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("id", "==", userDetails.id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const userObject = {
        id: userDetails.id,
        email: userDetails?.email || null,

        discord: userDetails.discord || null,
        twitter: userDetails.twitter || null,
        wallet: userDetails.wallet || null,
        telegram: userDetails.telegram || null,
        google: userDetails.google || null,
        points: {
          discord: {
            refers: [],
            points: 0,
          },
          twitter: {
            refers: [],
            points: 0,
          },
          telegram: {
            refers: [],
            points: 0,
          },
          referal: {
            refers: [],
            points: 0,
          },
        },
      };
      const newUserObject = removeUndefinedProperties(userObject);
      await addDoc(collection(db, "users"), newUserObject);
    } else {
      const doc = querySnapshot.docs[0];
      const userRef = doc.ref;
      const userObject = {
        email: userDetails?.email || null,

        discord: userDetails.discord || null,
        twitter: userDetails.twitter || null,
        wallet: userDetails.wallet || null,
        telegram: userDetails.telegram || null,
        google: userDetails.google || null,
        points: {
          discord: {
            refers: [],
            points: 0,
          },
          twitter: {
            refers: [],
            points: 0,
          },
          telegram: {
            refers: [],
            points: 0,
          },
          referal: {
            refers: [],
            points: 0,
          },
        },
      };

      await updateDoc(userRef, userObject);
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    alert("an error occurred");
    throw error;
  }
}
export function useGetUserProfiles() {
  return useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), orderBy("points")),
      );
      if (querySnapshot?.empty) throw new Error("No Profiles.");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data(), firebaseId: i.id } as UserDetails;
      });
      return data;
    },
  });
}

export async function getUserProfileByPrivyId(privyId: string) {
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where("id", "==", privyId)),
  );
  if (querySnapshot?.empty) throw new Error("No Profile With this ID.");
  const res = querySnapshot?.docs?.at(0);
  const data = { ...res?.data(), firebaseId: res?.id } as UserDetails;
  return data;
}

export function useGetUserProfileByPrivyId({ privyId }: { privyId: string }) {
  return useQuery({
    queryKey: ["profile-id-", privyId],
    queryFn: async () => {
      const data = await getUserProfileByPrivyId(privyId);
      return data;
    },
  });
}
export function useGetUserProfile(walletAddress: string) {
  return useQuery({
    queryKey: ["profile", walletAddress],
    queryFn: async () => {
      const userRef = collection(db, "users");
      const userQuery = query(
        userRef,
        where("wallet.address", "==", walletAddress),
      );
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        throw new Error("User not found.");
      }

      const userData = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })[0];

      return userData as UserDetails;
    },
  });
}
export function useSubmitUserProfile() {
  return useMutation({
    mutationFn: async ({ data }: { data: Partial<UserDetails> }) => {
      await addDoc(collection(db, "profiles"), {
        ...data,
      });
    },
  });
}

export function useDeleteUserProfile() {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await deleteDoc(doc(db, "profiles", id));
    },
  });
}

export function useGetAdmins() {
  return useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const querySnapshot = await getDocs(query(collection(db, "admins")));
      if (querySnapshot?.empty) throw new Error("No Admin Found");
      const data = querySnapshot?.docs?.map((i) => {
        return { ...i.data() } as { address: string };
      });
      return data;
    },
  });
}
