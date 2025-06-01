// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgSHaquWDGJhIq1PxWxy3kVzp4Dhbk0yc",
  authDomain: "codeyuva-academy.firebaseapp.com",
  projectId: "codeyuva-academy",
  storageBucket: "codeyuva-academy.firebasestorage.app",
  messagingSenderId: "351318570521",
  appId: "1:351318570521:web:7c95a74a368d3807109c88",
  measurementId: "G-WYJ76SHSDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };