// ============================================================
// CONFIGURATION FIREBASE
// Remplacez ces valeurs par celles de VOTRE projet Firebase
// (voir README.md pour les instructions)
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA7W3FzIS5BJG2Xqm2Jr9uuT0XirzwOfcs",
  authDomain: "te-plan-de-table.firebaseapp.com",
  projectId: "te-plan-de-table",
  storageBucket: "te-plan-de-table.firebasestorage.app",
  messagingSenderId: "249997773613",
  appId: "1:249997773613:web:9a5ca004e0327a0f9ea1a4"
};

// Import Firebase (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp };
