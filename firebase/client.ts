// firebase/client.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsHf5n99IV5H6liGLNM_FX7CemO402oJ8",
  authDomain: "prepwise-41e7f.firebaseapp.com",
  projectId: "prepwise-41e7f",
  storageBucket: "prepwise-41e7f.appspot.com", // fix typo: should be 'appspot.com' not 'storage.app'
  messagingSenderId: "613505818310",
  appId: "1:613505818310:web:7fc7e1dbc340aeff1f01c7",
  measurementId: "G-QTL8NMGCF0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
