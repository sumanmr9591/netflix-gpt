// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAirMzfy1savn63XhloClatAUJhc4xemVA",
  authDomain: "netflexgpt-98406.firebaseapp.com",
  projectId: "netflexgpt-98406",
  storageBucket: "netflexgpt-98406.appspot.com",
  messagingSenderId: "219845573978",
  appId: "1:219845573978:web:50d92ed56057f64f928763",
  measurementId: "G-XNTFC3RJKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
