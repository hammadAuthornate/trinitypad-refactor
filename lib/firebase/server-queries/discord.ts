"use server";

export async function CheckIfUserIsInDiscordServer(
  userId: string,
  guildId: string
) {
  // const guildId = "1251072321494712383";
  const botToken = process.env.DISCORD_BOT_TOKEN;

  // const userId = "1193765007222124654";

  const res = await fetch(
    `https://discord.com/api/guilds/1/members/${userId}`,
    {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    }
  );
  const data = await res.json();

  if (res.ok) {
    return true;
  } else {
    return false;
  }
}
