// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCnmkD3Gm0ReD6IRspXsec9VlgMqQ5WwdQ",

    authDomain: "clone-f0655.firebaseapp.com",

    projectId: "clone-f0655",

    storageBucket: "clone-f0655.appspot.com",

    messagingSenderId: "554753859969",

    appId: "1:554753859969:web:c3953d4ee758a724d60880",

    measurementId: "G-HH8R2S5Q05",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
