// src/components/Login.js
import React from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleProvider, facebookProvider, twitterProvider } from '../firebaseConfig';

const Login = () => {
  const handleLogin = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = result.credential;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = error.credential;
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin(googleProvider)}>Login with Google</button>
      <button onClick={() => handleLogin(facebookProvider)}>Login with Facebook</button>
      <button onClick={() => handleLogin(twitterProvider)}>Login with Twitter</button>
    </div>
  );
};

export default Login;
