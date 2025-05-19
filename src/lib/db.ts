import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyCutT4fqmFDFZFhYe7sk4TLehREDj00rts",
  authDomain: "tour-guide-4e299.firebaseapp.com",
  databaseURL: "https://tour-guide-4e299-default-rtdb.firebaseio.com",
  projectId: "tour-guide-4e299",
  storageBucket: "tour-guide-4e299.firebasestorage.app",
  messagingSenderId: "307189665267",
  appId: "1:307189665267:web:845106fabd76bc44731686",
  measurementId: "G-X1JN2J652B",
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
export { app, db };
