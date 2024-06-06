import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { db } from '../firebaseConfig';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import './SignupPage.css';
import OAuth from '../hooks/OAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();
      console.log('Creating user...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created', userCredential);


      await updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      console.log('Saving user to Firestore');
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      
      toast.success("Sign up was successful");
      console.log('Navigating to home page');
      navigate("/");
    } catch (error) {
      console.error('Error during signup', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already in use. Please use a different email.');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak. Please use a stronger password.');
      } else {
      toast.error("Something went wrong with the registration");
      }
    }
  }

  return (
    <div className="signupWrapper">
      <div className="signupContainer">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              id="name"
              placeholder="Full name"
              value={name}
              onChange={onChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="inputGroup">
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="inputGroup">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              autoComplete="new-password"
              value={password}
              onChange={onChange}
              required
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
          <div className="inputGroup">
            <input
              type="password"
              id="confirmPassword"
              autoComplete="off"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>Already have an account? <a href="/login">Sign In</a></p>
            <div className="divider">------OR------</div>
          </div>
          <OAuth />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
