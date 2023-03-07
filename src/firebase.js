import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcBqnloftIE-ELFOMnVjEJSYC9xKDyqrE",
  authDomain: "netflix-clone-ff255.firebaseapp.com",
  projectId: "netflix-clone-ff255",
  storageBucket: "netflix-clone-ff255.appspot.com",
  messagingSenderId: "622210570368",
  appId: "1:622210570368:web:3d39cad7dafb1ac3a6ae65",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const auth = getAuth();

export default db;
