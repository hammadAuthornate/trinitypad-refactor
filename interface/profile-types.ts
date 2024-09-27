import {
  Discord,
  Google,
  Telegram,
  Twitter,
  Wallet,
} from "@privy-io/react-auth";

export interface SocialPoints {
  twitter: {
    refers: string[];
    points: number;
  };
  discord: {
    refers: string[];
    points: number;
  };
  referal: {
    refers: string[];
    points: number;
  };
  telegram: {
    refers: string[];
    points: number;
  };
}

export interface UserDetails {
  id: string;
  discord: Discord | undefined;
  twitter: Twitter | undefined;
  wallet: Wallet | undefined;
  telegram: Telegram | undefined;
  google: Google | undefined;
  firebaseId?: string;
  points: SocialPoints;
}

export interface LeaderBoardUserDetails {
  // id: string;
  wallet: string;
  totalPoints: number;
}
