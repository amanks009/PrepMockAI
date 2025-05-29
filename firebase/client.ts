import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBas0gj8juIboOWO3TC01BY6OTz7tDDEts",
    authDomain: "mockai-2e0f0.firebaseapp.com",
    projectId: "mockai-2e0f0",
    storageBucket: "mockai-2e0f0.firebasestorage.app",
    messagingSenderId: "225967302241",
    appId: "1:225967302241:web:6b53777e26f91bc8b46c20",
    measurementId: "G-CK35Q0VGBW"
  };
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
