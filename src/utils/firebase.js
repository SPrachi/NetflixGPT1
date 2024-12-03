// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAAaM2M4mUNIzYzxPU6SghImmNk9ZJP_1Y",

  authDomain: "netflixgpt-3d993.firebaseapp.com",

  projectId: "netflixgpt-3d993",

  storageBucket: "netflixgpt-3d993.firebasestorage.app",

  messagingSenderId: "1032545406670",

  appId: "1:1032545406670:web:2a9dc519ca0e665de2ca9f",

  measurementId: "G-HTW7G1EJ47"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);