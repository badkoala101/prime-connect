import React, { useRef, useState } from 'react'
import './Authentication.css'
import Title from '../title/Title';
const Authentication = () => {

  return (
    <div className="container">
      <div className='Content'>
        <Title title="Authentication" description="          Please enter the verification code sent to +251*******21"/>
        <form className="auth-form">
            <div className="code-input-wrapper">
              <input type="text" pattern="[0-9]*" maxLength={1} className="code-input" />
              <input type="text" maxLength={1} className="code-input" />
              <input type="text" maxLength={1} className="code-input" />
              <input type="text" maxLength={1} className="code-input" />
              <input type="text" maxLength={1} className="code-input" />
              <input type="text" maxLength={1} className="code-input" />
            </div>
          <button type="submit" >Verify Now</button>
          <div className="auth-actions">
          <a href="/authentication" className="back-link">Resend code</a>
          </div>
          <p className="auth-actions backlink">Already have an account? <a href="/login" className="back-link">Sign in</a> </p>        
        </form>
      </div>
    </div>
  );
};


export default Authentication;

