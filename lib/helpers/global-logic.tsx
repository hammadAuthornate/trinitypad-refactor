import { NotifyProps } from "@/components/ui/toast/notify";
import { SocialPoints } from "@/interface/types/profile-types";

export const totalPoints = (p: SocialPoints) => {
  return (
    p.discord.points + p.referal.points + p.telegram.points + p.twitter.points
  );
};
export const copyToClipboard = (
  text: string,
  notify: ({ title, type }: NotifyProps) => void
) => {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        notify({
          title: "Referral link copied to clipboard",
          type: "success",
        });
      })
      .catch((err) => {
        notify({
          title: "Could not copy text",
          type: "error",
        });
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        notify({
          title: "Referral link copied to clipboard",
          type: "success",
        });
      } else {
        notify({
          title: "Could not copy text",
          type: "error",
        });
      }
    } catch (err) {
      console.error("Could not copy text: ", err);
      notify({
        title: "Could not copy text",
        type: "error",
      });
    }

    document.body.removeChild(textArea);
  }
};
