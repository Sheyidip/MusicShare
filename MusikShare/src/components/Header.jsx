import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Header.css';
import logo from '../assets/images/logo-no-background.svg';

const Header = () => {
  const [pageState, setPageState] = useState("sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <header className='header'>
      <div className="logoContainer">
        <Link to='/'>
          <img src={logo} alt="MusikShare Logo" className="logo" />
        </Link>
      </div>
      
      <nav>
        <ul className='navList'>
          <li>
            <Link
              className={pathMatchRoute("/") ? "navLink active" : "navLink"}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/import") ? "navLink active" : "navLink"}
              to="/import"
            >
              Import
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/convert") ? "navLink active" : "navLink"}
              to="/convert"
            >
              Convert
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/export") ? "navLink active" : "navLink"}
              to="/export"
            >
              Export
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/faq") ? "navLink active" : "navLink"}
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/about-us") ? "navLink active" : "navLink"}
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/blog") ? "navLink active" : "navLink"}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={pathMatchRoute("/login") || pathMatchRoute("/profile") ? "navLink active" : "navLink"}
              to="/login"
            >
              {pageState}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
