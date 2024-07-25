import React from 'react';
import heroImage from '../assets/primeconnectlogo.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import lock from '../assets/lock.png'
import connect from '../assets/connect.png'
import user from '../assets/user.png'
const Home = () => {
  return (
    <div className="home">
        <Navbar/>
          <section className="hero">
        <div className="hero-text">
          <h1>Connect with all<br/> your Coop Bank<br/> products</h1>
          <button className="btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
        <img src={lock} alt="lock" />
          <h3>Secure</h3>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="feature-card">
        <img src={connect} alt="connect" />
          <h3>Connect</h3>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="feature-card">
        <img src={user} alt="user" />
          <h3>Verified</h3>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </section>
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div>Debo</div>
          <div>CooPayRoll</div>
          <div>Michu</div>
          <div>Diaspora Banking</div>
          <div>Souqpass</div>
        </div>
      </section>
      <section className="explore">
      <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
        <h2>Find everything you <br/> need with our extensive<br/> range of services and<br/> products</h2>
        <button className="btn">Explore More</button>
      </section>
      <section className="contact">
        <h2>Connect with Us</h2>
        <p>We'd love to hear from you! Have a question about our products or services? Need help with an order?</p>
        <p>Our friendly customer support team is here to assist you.</p>
        <p>Phone: +251-90-000-0000</p>
        <p>Email: info@coopbank.com</p>
        <p>Visit us: Get House Building, Africa Ave, Addis Ababa</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="btn">Submit</button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
