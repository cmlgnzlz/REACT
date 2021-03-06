import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFT3AacKNr7zrZToQcQuxFbBobN8YOyaI",
  authDomain: "kuzin-9f2af.firebaseapp.com",
  projectId: "kuzin-9f2af",
  storageBucket: "kuzin-9f2af.appspot.com",
  messagingSenderId: "419536581428",
  appId: "1:419536581428:web:5c57fc8c7d080d0d9bab61",
  measurementId: "G-G04MV8TETP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
