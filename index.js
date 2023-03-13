import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import loginPage from './loginPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC9z9c8kIVaQitj371_WbkKYitbqNSL4CQ",
  authDomain: "calc-authentication.firebaseapp.com",
  projectId: "calc-authentication",
  storageBucket: "calc-authentication.appspot.com",
  messagingSenderId: "355604657388",
  appId: "1:355604657388:web:d0913f6b2ba3e62ad5a1c9",
  measurementId: "G-6KC3LBT4D9"
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
