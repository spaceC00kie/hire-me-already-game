import { Timestamp } from "firebase/firestore"
import { Job } from "./Job"

export type User = {
  id: string
  photoURL: string
  displayName: string
  joinDate: Timestamp
  score: number
  jobQueue: Job[]
  emailQueue: Job[]
}
