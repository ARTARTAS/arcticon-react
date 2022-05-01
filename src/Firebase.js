import React from "react";
import { collectionGroup } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaoyH2iXkJGfGDC4kOQt7YQTULTBhKHO4",
  authDomain: "arctic-e5b30.firebaseapp.com",
  projectId: "arctic-e5b30",
  storageBucket: "arctic-e5b30.appspot.com",
  messagingSenderId: "503767848175",
  appId: "1:503767848175:web:da30e8fa16cdb1b9d5371a",
  measurementId: "G-J9M6N8VVCR",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export function getAllCategories() {
  let categories = [];
  const colRef = collection(db, "cotegories");
  await getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        categories.push({ id: doc.id, name: doc.data().name });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
  return categories;
}