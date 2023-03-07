import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcBqnloftIE-ELFOMnVjEJSYC9xKDyqrE",
  authDomain: "netflix-clone-ff255.firebaseapp.com",
  projectId: "netflix-clone-ff255",
  storageBucket: "netflix-clone-ff255.appspot.com",
  messagingSenderId: "622210570368",
  appId: "1:622210570368:web:3d39cad7dafb1ac3a6ae65",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
