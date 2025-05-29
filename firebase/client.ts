import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1BmF8MzKL2OKvi6blNIFL1w0jGOXwaQA",
    authDomain: "prepmockai.firebaseapp.com",
    projectId: "prepmockai",
    storageBucket: "prepmockai.firebasestorage.app",
    messagingSenderId: "522391186384",
    appId: "1:522391186384:web:66ebc570eaebd7ae20e7d5",
    measurementId: "G-572RNR5K1K"
  };
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
