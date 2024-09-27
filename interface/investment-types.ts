export interface InvestmentDetails {
  id: string; // This is transaction hash
  amount: string;
  campaignId: string;
  campaignType: string;
  chain: number;
  currency: string;
  currency_usd: number;
  rate: number;
  referrer: string;
  txhash: string;
  wallet: string;
}

export interface Referral {
  address: string;
  value: number;
}

export interface LaunchpadInvestmentFirebaseDetails {
  id?: string;
  projectName: string;
  projectOwner: string;
  tokenName: string;
  amount: string;
  pulledBy?: string;
  investedBy?: string;
  createdAt: number;
}

export interface PreInvestmentDetails {
  id?: string;
  amount: number;
  autoInvest: boolean;
  chain: number;
  currency: string;
  currency_usd: number;
  txhash: string;
  wallet: string;
}