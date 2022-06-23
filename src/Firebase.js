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
  apiKey: "AIzaSyAUFKAA2MEBwQmdhSMZAdEoIbMMVOQOvoQ",
  authDomain: "arcticconreact.firebaseapp.com",
  projectId: "arcticconreact",
  storageBucket: "arcticconreact.appspot.com",
  messagingSenderId: "536305878922",
  appId: "1:536305878922:web:5b5d92578ca0b6e693ea73"
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

export async function getAllCategories() {
  let categories = [];

  const categoriesQuery = query(collection(db, "categories"));

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

export async function getProduct(category, name) {
  const product = [];

  const productsQuery = query(
    collection(db, "products"),
    where("category", "==", category),
    where("link", "==", name)
  );

  await getDocs(productsQuery)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        product.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return product[0];
}
