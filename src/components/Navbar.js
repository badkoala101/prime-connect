import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/primeconnectlogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo" className="navbar-logo" />
        <Link to="/">Prime Connect</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/documentation">Documentation</Link></li>
        <li><Link to="/sandbox">Sandbox</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
      <div>
        <button className="getstartedbtn">Get Started</button>
        <button className="signinbtn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
