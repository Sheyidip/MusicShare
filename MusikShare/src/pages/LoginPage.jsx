// src/components/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { googleProvider, twitterProvider } from '../firebaseConfig';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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
            <input
              type="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
            <FontAwesomeIcon  icon={faEnvelope} className='icon' />
          </div>
          <div className="inputGroup">
            <input
              type="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} className='icon'/>
          </div>
          <div className='remember-forgot'>
              <label><input type="checkbox" />
              Remember me
              </label>
              <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Sign In</button>

          <div className="divider">------OR------</div>
        <div className="socialLogin">
          <button onClick={() => handleLogin(googleProvider)} className="socialBtn google">
            <FontAwesomeIcon icon={faGoogle} size="x" />
          </button>
          <button onClick={() => handleLogin(twitterProvider)} className="socialBtn twitter">
            <FontAwesomeIcon icon={faTwitter} size="x" />
          </button>

        </div>

          <div className='register-link'>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
          
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
