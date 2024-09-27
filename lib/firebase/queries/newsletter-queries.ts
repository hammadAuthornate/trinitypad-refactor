import { useMutation } from "@tanstack/react-query";
import { addAMail4NewsLetter } from "../newsletter";
import { useNotify } from "@/components/ui/toast/notify";

export function useSubmitNewsletterEmail() {
  const notify = useNotify();
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      if (!email || email?.length < 7) {
        notify({
          title: "Email not found",
          type: "warning",
        });
        throw new Error("Email not provided");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        notify({
          title: "Email is not valid",
          type: "warning",
        });
        throw new Error("Email is not valid");
      }

      const isMailAdded = await addAMail4NewsLetter(email);
      if (isMailAdded) {
        notify({
          title: "Email added successfully",
          type: "success",
        });
      } else {
        notify({
          title: "Email already exists!",
          type: "warning",
        });
        throw new Error("Email already exists");
      }
    },
  });
}
