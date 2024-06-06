// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGB4ZpkAGLR2mCGpG35sBorY6K5bluHB4",
  authDomain: "musikshare-6f33f.firebaseapp.com",
  projectId: "musikshare-6f33f",
  storageBucket: "musikshare-6f33f.appspot.com",
  messagingSenderId: "1081477315392",
  appId: "1:1081477315392:web:1260417db128d5993658a5",
  measurementId: "G-PN2M61NYPD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()