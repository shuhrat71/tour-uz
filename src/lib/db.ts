import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  projectId: "travel-2bd22",
  measurementId: "G-J78J4GMFNL",
  messagingSenderId: "252705449470",
  storageBucket: "travel-2bd22.appspot.com",
  authDomain: "travel-2bd22.firebaseapp.com",
  appId: "1:252705449470:web:444f7b2d3f92ee0e010caf",
  apiKey: "AIzaSyCzdnjWXwh9s01humFvhH-1anvN54mzxQs",
};

let app: any;
let db: any;
let analytics;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analytics = getAnalytics(app);
}

export { app, db, analytics };
