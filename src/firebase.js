// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxymz24x6bdbTPpQaGM0GJr8fa6ySiy9g",
    authDomain: "stryve-ecom.firebaseapp.com",
    projectId: "stryve-ecom",
    storageBucket: "stryve-ecom.firebasestorage.app",
    messagingSenderId: "904825340546",
    appId: "1:904825340546:web:0647bc176d7e0a4ee76a9b",
    measurementId: "G-121XJ0ZZ6W"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the necessary components
export { auth, provider, signInWithPopup };