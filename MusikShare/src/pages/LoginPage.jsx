import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import OAuth from '../hooks/OAuth';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './LoginPage.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad user credentials');
    }
  }

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <h2>Sign In</h2>
        <form onSubmit={onSubmit}>
          <div className="inputGroup">
            <input
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={onChange}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="inputGroup">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
              required
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="togglePassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="togglePassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Sign in</button>
          <div className="register-link">
            <p>Don't have an account? <a href="signup">Sign Up</a></p>
            <div className="divider">------OR------</div>
          </div>
          <OAuth />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
