import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore"
import { db } from "@/lib/firebase/config";

export async function checkKnownUser(uid: string) {
  const querySnapshot = await getDoc(doc(db, "knownUsers", uid))

  return querySnapshot.data()
}

export async function addKnownUser(uid: string, kycSession: string) {
  const docRef = doc(db, "knownUsers", uid)
  const querySnapshot = await getDoc(docRef)
  if (querySnapshot.exists()) {
    return false
  }
  await setDoc(docRef, {
    approved: false,
    submissionTime: Date.now(),
    kycSession
  })

  return true
}

export async function updateKnownUser(uid: string) {
  const docRef = doc(db, "knownUsers", uid)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) {
    return false
  }
  await updateDoc(docRef, {
    approved: true,
  })
  return true
}

export async function deleteKnownUser(uid: string) {
  const docRef = doc(db, "knownUsers", uid)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) {
    return false
  }
  await deleteDoc(docRef)
  return true
}