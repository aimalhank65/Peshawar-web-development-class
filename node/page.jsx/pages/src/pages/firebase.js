
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_AUTH,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_SOTRAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGE_SENDER,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
