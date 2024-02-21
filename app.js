import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import {
//   getFirestore,
//   onSnapshot,
//   collection,
//   addDoc,
//   doc,
//   setDoc,
//   updateDoc,
//   query,
//   where,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Copy From Firebase project that you have created
const firebaseConfig = {
  apiKey: "AIzaSyACHrcOaBy98Nqt8E-y4leznEYGJOpP_H4",
  authDomain: "blogs-app-saylani.firebaseapp.com",
  databaseURL: "https://blogs-app-saylani-default-rtdb.firebaseio.com",
  projectId: "blogs-app-saylani",
  storageBucket: "blogs-app-saylani.appspot.com",
  messagingSenderId: "252149663241",
  appId: "1:252149663241:web:f64fcbbc1a01a2a92b5ad8",
};

// Initialize Firebase here
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
