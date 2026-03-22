// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getFirestore, 
  setDoc, 
  doc, 
  getDoc 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_CLhvhAQZiSlkLIOvAT_rG_sPjXpboPc",
    authDomain: "avi-unmasked0.firebaseapp.com",
    projectId: "avi-unmasked0",
    storageBucket: "avi-unmasked0.firebasestorage.app",
    messagingSenderId: "230381853120",
    appId: "1:230381853120:web:fb46c0c261aef2ad4e5025",
    measurementId: "G-3M2VGMCQ8F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { 
  auth, db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc, doc, getDoc,
  onAuthStateChanged
};

 