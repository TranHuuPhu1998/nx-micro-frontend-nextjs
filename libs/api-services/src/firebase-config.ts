// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

// get key from .env
const firebaseConfig = {
  apiKey: `${process.env['NX_REACT_APP_FIREBASE_API_KEY']}`,
  authDomain: `${process.env['NX_REACT_APP_FIREBASE_AUTH_DOMAIN']}`,
  projectId: `${process.env['NX_REACT_APP_FIREBASE_PROJECT_ID']}`,
  storageBucket: `${process.env['NX_REACT_APP_FIREBASE_STORAGE_BUCKET']}`,
  messagingSenderId: `${process.env['NX_REACT_APP_FIREBASE_MESSAGING_SENDER_ID']}`,
  appId: `${process.env['NX_REACT_APP_FIREBASE_APP_ID']}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const dbRealTime = getDatabase();
