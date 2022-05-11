// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmnIPsLq6iOWN1E0WObf6jvhjiaadjB_E",
  authDomain: "market-29cm.firebaseapp.com",
  projectId: "market-29cm",
  storageBucket: "market-29cm.appspot.com",
  messagingSenderId: "400905453277",
  appId: "1:400905453277:web:c141d72d59f4d5cc66a534",
  measurementId: "G-KH26LE0TW8"
};
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

export const firebaseInstance = getAuth();

export const dbService = getFirestore();
export const storageService = getStorage();