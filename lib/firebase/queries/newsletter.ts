import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { db } from "../config";
export const addAMail4NewsLetter = async (email: string) => {
  try {
    const newsletterRef = collection(db, "newsletterEmails");
    const emailQuery = query(newsletterRef, where("email", "==", email));
    const querySnapshot = await getDocs(emailQuery);
    if (!querySnapshot.empty) {
      return false;
    }
    // const id = uuidv4();
    const createdAtTime = dayjs().unix();
    await addDoc(newsletterRef, {
      email,
      createdAt: createdAtTime,
      // id,
    });
    return true;
  } catch (e) {
    console.error(e);
    throw new Error("Invalid error occurred");
  }
};
