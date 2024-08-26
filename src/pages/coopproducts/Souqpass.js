import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Souqpass.css';

const Souqpass = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="souqpass">
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Dashboard
      </button>
      <h1>Souqpass</h1>

      <section className="souqpass-intro">
        <h2>Smarter Payments. Smarter Business</h2>
        <p>
          We're a payment gateway platform for online ecommerce sites, and we've
          got the speed, security, and reliability you need to make sure your
          customers get what they want.
        </p>
      </section>

      <section className="souqpass-features">
        <div className="feature-item">
          <h3>Easy</h3>
          <p>
            Souqpass is one of the most convenient ways to accept online payments as it allows customers to complete their payment with a single click.
          </p>
        </div>
        <div className="feature-item">
          <h3>Secure and Reliable</h3>
          <p>
            Providing Secure Payment Processing is only a fraction of our offerings: We provide a whole array of services that covers all needs to facilitate and streamline online payments.
          </p>
        </div>
        <div className="feature-item">
          <h3>Fast</h3>
          <p>
            Souqpass is a fast transaction system that allows you to trade in real time. Your customers can buy anything from your ecommerce.
          </p>
        </div>
        <div className="feature-item">
          <h3>Integration</h3>
          <p>
            It's easy to integrate into your online storefront and gives you access to several banking institutions, so you can increase sales and reduce customer service costs at the same time.
          </p>
        </div>
        <div className="feature-item">
          <h3>Legal</h3>
          <p>
            We have strict policies and procedures in place to ensure that our business practices are legally compliant.
          </p>
        </div>
        <div className="feature-item">
          <h3>Operations</h3>
          <p>
            Souqpass offers fast and secure transactions, with extremely low fees. We also offer a variety of features that make it easy to receive payment.
          </p>
        </div>
      </section>

      <section className="souqpass-steps">
        <h2>How to Get Started</h2>
        <div className="step">
          <h3>Step 1</h3>
          <p>Prepare digital copies of your renewed Identification card and Trade License by scanning them.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Proceed to souqpass.com/auth/registration and complete all the mandatory fields to register. Once done, an email will be sent to you for verification.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Click on the verification link in the email and set up a new password when you access the site for the first time.</p>
        </div>
        <div className="step">
          <h3>Step 4</h3>
          <p>Log in with your new credentials and navigate to the “Settings“ section to provide all the necessary business information. Submit the form once done.</p>
        </div>
        <div className="step">
          <h3>Step 5</h3>
          <p>Our team will verify the information you provided and notify you via email once the validation process is completed.</p>
        </div>
        <div className="step success">
          <h3>Success</h3>
          <p>Congratulations! You have successfully created an account with us. You may now log in using your credentials and utilize our API and other services.</p>
        </div>
      </section>

      <section className="souqpass-call-to-action">
        <h2>Try It Out!</h2>
        <p>
          Ethiopian Pay is easy to use and has a user-friendly interface that makes it simple for anyone to use. We are dedicated to providing a safe and secure platform for all users around the world, so you can feel confident about using our service.
        </p>
        <button className="cta-button">Get Started with Souqpass</button>
      </section>
    </div>
  );
};

export default Souqpass;
