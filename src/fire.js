// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJWKv4olaO6opFmnPreDI9T55Eaka3-M",
  authDomain: "technicalclub-15171.firebaseapp.com",
  projectId: "technicalclub-15171",
  storageBucket: "technicalclub-15171.firebasestorage.app",
  messagingSenderId: "693975745320",
  appId: "1:693975745320:web:759704f7f368a95e5f461d",
  measurementId: "G-ZP1ZB6VWY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();