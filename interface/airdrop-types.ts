export interface AirdropCarouselType {
  id: string;
  title?: string;
  buttonText?: string;
  image?: string;
  cta?: string;
}

export interface AirdropQuestType {
  id: string;
  disabled: boolean;
  task?: {
    desc: string;
    actionLabel: string;
    invite: string; //if action is discord then use this
  };
  createdAt?: string;
  status?: 0 | 1 | 2;
  endTime?: string;
  points?: number;
  participants?: string[];
  action?: ActionTypes;
}

export type ActionTypes =
  | "discord"
  | "telegram"
  | "twitter_like"
  | "twitter_retweet"
  | "twitter_follow"
  | "referral"
  | "logo";
