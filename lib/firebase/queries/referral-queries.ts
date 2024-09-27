import { useQuery } from "@tanstack/react-query"
import {
	collection,
	getDocs,
	where,
	query,
} from "firebase/firestore"
import { db } from "@/firebase/config"
import { Referral } from "@/interface/types/investment-types"

export function useGetWalletReferrals(wallet?: string) {
	return useQuery({
		queryKey: ["referrals-by-wallet"],
		queryFn: async () => {
			if (!wallet) return { L1Refs: [], L2Refs: [] }

			const investmentsRef = collection(db, "investments")
			const q = query(investmentsRef, where("referrer", "==", wallet.toLowerCase()))
			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) return { L1Refs: [], L2Refs: [] }


			const L1Refs = querySnapshot?.docs?.map((i) => {
				const investment = i.data()
				return { address: investment.wallet, value: investment.currency_usd * investment.amount } as Referral
			})

			let L2Refs: Array<Referral> = []
			for (const ref of L1Refs) {
				const q2 = query(investmentsRef, where("referrer", "==", ref.address.toLowerCase()))
				const querySnapshot2 = await getDocs(q2)
				if (querySnapshot2.empty) continue

				const thisL2Refs = querySnapshot?.docs?.map((i) => {
					const investment = i.data()
					return { address: investment.wallet, value: investment.currency_usd * investment.amount } as Referral
				})
				L2Refs = L2Refs.concat(thisL2Refs)
			}

			return { L1Refs, L2Refs }
		},
	})
}