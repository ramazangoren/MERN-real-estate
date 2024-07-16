// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1890b.firebaseapp.com",
  projectId: "mern-estate-1890b",
  storageBucket: "mern-estate-1890b.appspot.com",
  messagingSenderId: "707444721783",
  appId: "1:707444721783:web:1c4218bfbe385264711e72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);