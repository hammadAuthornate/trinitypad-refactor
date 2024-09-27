import { useMutation } from "@tanstack/react-query";
import { useNotify } from "@/components/ui/toast/notify";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import { db } from "@/lib/firebase/config";

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

      const newsletterRef = collection(db, "newsletterEmails");
      const emailQuery = query(newsletterRef, where("email", "==", email));
      const querySnapshot = await getDocs(emailQuery);
      if (!querySnapshot.empty) {
        throw new Error("Email already exists.");
      }
      // const id = uuidv4();
      const createdAtTime = dayjs().unix();
      await addDoc(newsletterRef, {
        email,
        createdAt: createdAtTime,
        // id,
      });
    },
    onSuccess: () => {
      notify({
        title: "Email added successfully",
        type: "success",
      });
    },
    onError: () => {
      notify({
        title: "Email already exists!",
        type: "warning",
      });
      throw new Error("Email already exists");
    },
  });
}
