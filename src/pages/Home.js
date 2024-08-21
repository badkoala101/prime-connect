import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.jpg';
import heroImage2 from '../assets/heroImage2.jpeg';
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
          <Link to="/signup"><button className="btn">Get Started</button></Link>
        </div>
        <div className="hero-image">
          <img className="float" src={heroImage} alt="Hero" />
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
      <div className="hero-image2">
          <img className="float" src={heroImage2} alt="Hero" />
        </div>
        <div className="exploreword">
        <h2>Find everything you <br/> need with our extensive<br/> range of services and<br/> products</h2>
       <Link to="/product"><button className="explorebtn">Explore More</button></Link>
        </div>
      </section>
      <section className="contact">
        <div className="contactword">
        <h2>Connect with Us</h2>
        <p>We'd love to hear from you!
           Have a <br/>question about our products or services?<br/>
            Need help with an order?<br/>
             Our friendly customer support team is<br/> here to assist you.<br/>
              <strong>Phone</strong>: +251-90-000-0000<br/> 
              <strong>Email</strong>: Email: info@coopbank.com <br/>
              <strong>Visit us</strong>: Get House Building, Africa Ave, Addis Ababa</p>
              </div>
        <div className="contactform">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submitbtn">Submit</button>
        </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
