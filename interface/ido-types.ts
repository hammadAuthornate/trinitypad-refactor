// export interface CampaignDetails {
//   allowPullingInvestments: boolean;
//   status: string;
//   presaleRate: Number;
//   cliffDays: Number;
//   linearUnlockDays: Number;
//   evmID: Number;
//   lzID: Number;
//   initialSupply: Number;
//   lzEndpoint: string;
//   circulatingSupply: Number;
//   vestedSupply: Number;
//   durationSeconds: Number;
//   raiseGoal: Number;
//   projectName: string;
//   tokenName: string;
//   tokenSymbol: string;
// }

import { BigNumberish } from "ethers";

export interface CampaignDetails {
  id?: string;
  campaignId?: number;
  description?: string;
  allowPullingInvestments: boolean;
  status: number; // 0 = pending, 1 = approved, 2 = rejected, 3 = cancelled
  presaleRate: string | number;
  cliffDays: number;
  linearUnlockDays: number;
  evmID: number[];
  lzID: number[];
  initialSupply: BigNumberish[];
  lzEndpoint: string[];
  circulatingSupply: BigNumberish;
  vestedSupply: BigNumberish;
  durationSeconds: number;
  raiseGoal: number;
  projectName: string;
  tokenName: string;
  tokenSymbol: string;
  owner: string;
  launchpad: string;
  raisingCurrency: string;
  approved?: boolean;
  approver?: string;
  createdAt?: number;
  bg?: string;
  logo?: string;

  // project details links
  websiteUrl?: string;
  teamUrl?: string;
  roadmapUrl?: string;
  tokenomicsUrl?: string;
}

export interface FirebaseCampaignDetails {
  id?: string;
  allowPullingInvestments: boolean;
  campaignId?: number;
  description?: string;
  initialSupply: String[];
  presaleRate: string | number;
  circulatingSupply: string;
  durationSeconds: number;
  raiseGoal: number;
  cliffDays: number;
  projectName: string;
  tokenName: string;
  tokenSymbol: string;
  owner: string;
  raisingCurrency: string;
  approved?: boolean;
  approver?: string;
  status?: number;
  bg?: string;
  logo?: string;
}