// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9z9c8kIVaQitj371_WbkKYitbqNSL4CQ",
  authDomain: "calc-authentication.firebaseapp.com",
  projectId: "calc-authentication",
  storageBucket: "calc-authentication.appspot.com",
  messagingSenderId: "355604657388",
  appId: "1:355604657388:web:d0913f6b2ba3e62ad5a1c9",
  measurementId: "G-6KC3LBT4D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);