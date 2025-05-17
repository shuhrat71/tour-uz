// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzdnjWXwh9s01humFvhH-1anvN54mzxQs",
  authDomain: "travel-2bd22.firebaseapp.com",
  projectId: "travel-2bd22",
  storageBucket: "travel-2bd22.firebasestorage.app",
  messagingSenderId: "252705449470",
  appId: "1:252705449470:web:444f7b2d3f92ee0e010caf",
  measurementId: "G-J78J4GMFNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
