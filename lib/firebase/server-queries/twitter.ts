"use server";
import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});
export { twitterClient };
//   const tweetId = "";
//   const userId = "";
//   //   const resV2 = await client.v2.retweet()
//   const retweetResult = await client.v2.retweet(userId, tweetId);

//   const res = await client.v1.tweet("test tweet from api");

//   const retweets = await client.v1.get(`statuses/retweets/${tweetId}`);
//   return retweets.some((retweet: any) => retweet.user.ud_str === userId);
