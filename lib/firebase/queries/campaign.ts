import { ethers } from "ethers";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config";
import { CampaignDetails } from "@/interface/ido-types";

export async function addCampaignData(
  data: CampaignDetails,
  walletAddress: string,
) {
  try {
    // Convert BigNumberish values to strings for Firebase storage
    const myData = {
      ...data,
      initialSupply: data.initialSupply.map((supply) => supply.toString()),
      circulatingSupply: data.circulatingSupply.toString(),
      vestedSupply: data.vestedSupply.toString(),
      walletAddress,
    };

    await addDoc(collection(db, "campaigns"), myData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getCampaignData(
  walletAddress: string,
): Promise<CampaignDetails[]> {
  try {
    const q = query(
      collection(db, "campaigns"),
      where("walletAddress", "==", walletAddress),
    );
    const querySnapshot = await getDocs(q);

    const campaigns: CampaignDetails[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        campaignId: data.campaignId,
        allowPullingInvestments: data.allowPullingInvestments,
        status: data.status,
        presaleRate: data.presaleRate,
        cliffDays: data.cliffDays,
        linearUnlockDays: data.linearUnlockDays,
        evmID: data.evmID,
        lzID: data.lzID,
        initialSupply: data.initialSupply.map((supply: string) =>
          ethers.parseEther(supply),
        ),
        lzEndpoint: data.lzEndpoint,
        circulatingSupply: ethers.parseEther(data.circulatingSupply),
        vestedSupply: ethers.parseEther(data.vestedSupply),
        durationSeconds: data.durationSeconds,
        raiseGoal: data.raiseGoal,
        projectName: data.projectName,
        tokenName: data.tokenName,
        tokenSymbol: data.tokenSymbol,
        owner: data.owner,
        launchpad: data.launchpad,
        raisingCurrency: data.raisingCurrency,
      };
    });

    return campaigns as CampaignDetails[];
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw new Error("Error getting campaign data");
  }
}

export async function fetchCampaignsWithStatusZero() {
  const campaignsRef = collection(db, "campaigns");
  const q = query(campaignsRef, where("status", "==", 0));

  try {
    const querySnapshot = await getDocs(q);
    const campaigns = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return campaigns;
  } catch (e) {
    console.error("Error fetching campaigns with status 0: ", e);
    return [];
  }
}

export async function fetchCampaignsWithStatusOne() {
  const campaignsRef = collection(db, "campaigns");
  const q = query(campaignsRef, where("status", "==", 1));

  try {
    const querySnapshot = await getDocs(q);
    const campaigns = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return campaigns;
  } catch (e) {
    console.error("Error fetching campaigns with status 1: ", e);
    return [];
  }
}
export async function fetchAllCampaigns() {
  const campaignsRef = collection(db, "campaigns");

  try {
    const querySnapshot = await getDocs(campaignsRef);
    const campaigns: CampaignDetails[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        campaignId: data.campaignId,
        allowPullingInvestments: data.allowPullingInvestments,
        status: data.status,
        presaleRate: data.presaleRate,
        cliffDays: data.cliffDays,
        linearUnlockDays: data.linearUnlockDays,
        evmID: data.evmID,
        lzID: data.lzID,
        initialSupply: data.initialSupply.map((supply: string) =>
          ethers.parseEther(supply),
        ),
        lzEndpoint: data.lzEndpoint,
        circulatingSupply: ethers.parseEther(data.circulatingSupply),
        vestedSupply: ethers.parseEther(data.vestedSupply),
        durationSeconds: data.durationSeconds,
        raiseGoal: data.raiseGoal,
        projectName: data.projectName,
        tokenName: data.tokenName,
        tokenSymbol: data.tokenSymbol,
        owner: data.owner,
        launchpad: data.launchpad,
        raisingCurrency: data.raisingCurrency,
      };
    });
    return campaigns as CampaignDetails[];
  } catch (e) {
    console.error("Error fetching all campaigns: ", e);
    return [];
  }
}
