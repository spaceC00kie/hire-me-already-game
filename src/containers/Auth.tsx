import { useAuthState } from "react-firebase-hooks/auth"
import { createContainer } from "unstated-next"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth"
import { firebaseApp } from "../../firestore.config"
import {
  getFirestore,
  doc,
  serverTimestamp,
  runTransaction,
  DocumentReference,
} from "firebase/firestore"
import { User } from "../interfaces/User"
import { useEffect, useState } from "react"

const db = getFirestore(firebaseApp)

const useAuth = () => {
  const auth = getAuth(firebaseApp)

  const [user, loading] = useAuthState(auth)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      setIsLoading(false)
    }
  }, [loading])

  const signInWithGoogle = async (): Promise<void> => {
    const addToUsers = async (userCred: UserCredential | null) => {
      if (!userCred?.user?.uid || !auth.currentUser) return
      const userDoc = doc(
        db,
        "users",
        auth.currentUser!.uid,
      ) as DocumentReference<User>
      runTransaction(db, async (transaction) => {
        const doc = await transaction.get(userDoc)
        if (!doc.exists()) {
          transaction.set(userDoc, {
            id: auth.currentUser!.uid,
            photoURL: auth.currentUser!.photoURL!,
            displayName: auth.currentUser!.displayName!,
            joinDate: serverTimestamp(),
            score: 0,
            jobQueue: [],
            emailQueue: [],
          })
        }
      })
    }

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then(addToUsers).catch(console.error)
  }

  const signOutWithGoogle = async () => {
    auth.signOut()
  }

  return {
    user,
    auth,
    isLoading,
    signInWithGoogle,
    signOutWithGoogle,
  }
}

export const Auth = createContainer(useAuth)
