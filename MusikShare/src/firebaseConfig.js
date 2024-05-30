// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, twitterProvider };