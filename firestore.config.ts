import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBxIPko1qdSwSO0T4dzeYzNYWWEHkg8AwU",
  authDomain: "hire-me-already-game.firebaseapp.com",
  projectId: "hire-me-already-game",
  storageBucket: "hire-me-already-game.firebasestorage.app",
  messagingSenderId: "22543170029",
  appId: "1:22543170029:web:014d51f44b90a67e24cfe4",
  measurementId: "G-TTG7FGY6M5",
}

export const firebaseApp = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(firebaseApp)
