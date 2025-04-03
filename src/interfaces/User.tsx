import { Timestamp } from "firebase/firestore"

export type User = {
  id: string
  photoURL: string
  displayName: string
  joinDate: Timestamp
  score: number
}
