"use client";

import { collection, getDocs } from "firebase/firestore";

import { db } from "@/lib/db";

export interface DataType {
  id: string;
  [key: string]: any;
}

export const getDocuments = async (
  collectionName: string,
  state: React.Dispatch<React.SetStateAction<DataType[] | null>>
) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  state(result);
};
