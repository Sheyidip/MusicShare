import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo-no-background.svg';
const Header = () => (
  <header className='header'>
    <div className="logoContainer">
      <img src={logo} alt="MusikShare Logo" className="logo" />
    </div>
    <nav>
      <ul className='navList'>
        <li><Link className='navLink' to="/">Home</Link></li>
        <li><Link className='navLink'to="/login">Login</Link></li>
        <li><Link className='navLink'to="/import">Import</Link></li>
        <li><Link className='navLink'to="/convert">Convert</Link></li>
        <li><Link className='navLink'to="/export">Export</Link></li>
        <li><Link className="navLink" to="/faq">FAQ</Link></li>
        <li><Link className="navLink" to="/about">About Us</Link></li>
        <li><Link className="navLink" to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
