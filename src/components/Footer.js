import React from 'react';
import '../App.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Prime Connect</h3>
        <p>Get News letter on our updates</p>
        <input type="email" placeholder="Enter Your email" />
        <button>Subscribe</button>
      </div>
      <div>
        <h3>Support and Help</h3>
        <p>Account information</p>
        <p>Help center</p>
        <p>About us</p>
      </div>
      <div>
        <h3>Products</h3>
        <p>Michu</p>
        <p>Debo</p>
        <p>Souqpass</p>
        <p>CooPayRoll</p>
        <p>Diaspora Banking</p>
      </div>
      <div>
        <h3>Info</h3>
        <a href="/Faq" style={{ textDecoration: 'none', color: 'inherit' }}><p className="link">FAQ</p></a>
        <a href="/Documentation" style={{ textDecoration: 'none', color: 'inherit' }}><p className="link">Documentation</p></a>
        <a href="/Sandbox" style={{ textDecoration: 'none', color: 'inherit' }}><p className="link">Sandbox</p></a>
      </div>
    </footer>
  );
};

export default Footer;
