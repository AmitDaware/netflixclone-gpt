// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf4QNjQsJozJk1ncTm3Of-S0-3twoOs7c",
  authDomain: "nsetflixclone-gpt-3ff3f.firebaseapp.com",
  projectId: "netflixclone-gpt-3ff3f",
  storageBucket: "netflixclone-gpt-3ff3f.appspot.com",
  messagingSenderId: "883177871919",
  appId: "1:883177871919:web:0e1df8c6d288d64af304da",
  measurementId: "G-55DT7DY6BG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
