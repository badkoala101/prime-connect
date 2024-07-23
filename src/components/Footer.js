import React from 'react';

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
        <p>Debo</p>
        <p>Souqpass</p>
        <p>CooPayRoll</p>
      </div>
      <div>
        <h3>Info</h3>
        <p>FAQ</p>
        <p>Documentation</p>
        <p>Sandbox</p>
      </div>
    </footer>
  );
};

export default Footer;
