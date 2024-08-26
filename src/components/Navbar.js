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
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/Documentation">Documentation</Link></li>
        <li><Link to="/sandbox">Sandbox</Link></li>
        <li><Link to="/Faq">FAQ</Link></li>
      </ul>
      <div>
      <Link to="/signup"><button className="getstartedbtn">Get Started</button></Link>
        <Link to="/Signin"><button className="signinbtn">Sign In</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
