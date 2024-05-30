// src/components/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleProvider, twitterProvider } from '../firebaseConfig';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter,  } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <h2>Sign In</h2>
        <form onSubmit={handleEmailLogin}>
          <div className="inputGroup">
            <label>Email or Username</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="loginBtn">Sign In</button>
        </form>
        <div className="divider">OR</div>
        <div className="socialLogin">
          <button onClick={() => handleLogin(googleProvider)} className="socialBtn google">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </button>
          <button onClick={() => handleLogin(twitterProvider)} className="socialBtn twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </button>
        </div>
        <div className="extraLinks">
          <a href="/forgot-password">Forgot Password</a>
          <a href="/register">Don't have an account? Register an Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
