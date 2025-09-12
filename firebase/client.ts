import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuNciRfYaHCRMC0TrhgP2tLkE6cphqM8s",
  authDomain: "prepwise-9c2f5.firebaseapp.com",
  projectId: "prepwise-9c2f5",
  storageBucket: "prepwise-9c2f5.firebasestorage.app",
  messagingSenderId: "977857026161",
  appId: "1:977857026161:web:4b3e4225a62c0068d9a3d0",
  measurementId: "G-P5MG27Q89J"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);