import React from "react";
import { collectionGroup, limit, startAt } from "firebase/firestore";

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

export async function getCategories(skip) {
  let categories = [];

  const categoriesQuery = query(
    collection(db, "categories"),
    orderBy("collectionID"),
    startAt(skip),
    limit(5)
  );

  await getDocs(categoriesQuery)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return categories;
}

export async function isSubcategory(name) {
  const categoriesQuery = query(
    collection(db, "subcategories"),
    where("category", "==", name),
    limit(1)
  );

  await getDocs(categoriesQuery)
    .then((snapshot) => {
      return snapshot.docs.length > 0 ? true : false;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export async function getSubCategories(name) {
  let categories = [];

  const categoriesQuery = query(
    collection(db, "subcategories"),
    where("category", "==", name)
  );

  await getDocs(categoriesQuery)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return categories;
}

export async function getProducts(category) {
  let products = [];

  const productsQuery = query(
    collection(db, "products"),
    where("category", "==", category)
  );

  await getDocs(productsQuery)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return products;
}

export async function getProduct(id) {
  const docRef = doc(db, "products", id);

  getDoc(docRef).then((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}
