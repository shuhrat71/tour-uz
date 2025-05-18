import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzdnjWXwh9s01humFvhH-1anvN54mzxQs",
  authDomain: "travel-2bd22.firebaseapp.com",
  projectId: "travel-2bd22",
  storageBucket: "travel-2bd22.appspot.com",
  messagingSenderId: "252705449470",
  appId: "1:252705449470:web:444f7b2d3f92ee0e010caf",
  measurementId: "G-J78J4GMFNL",
};

let app;
let db: any;
let analytics;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analytics = getAnalytics(app);
}

export { app, db, analytics };
