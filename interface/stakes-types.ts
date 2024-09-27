export interface StakeDetails {
  id: string;
  walletAddress: string;
  stakeAmount: string;
  blockNumber: string;
  unixTimestamp: string;
  reward: string;
  status?: "pending" | "staked" | "unstaked" | "failed";
}
