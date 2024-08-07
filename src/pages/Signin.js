import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import '../components/user/user.css'
import Title from '../components/user/title/Title';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeepSignedInChange = (e) => {
    setKeepSignedIn(e.target.checked);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic
    console.log('Sign in with:', email, password, keepSignedIn);
  };

  return (
    <div className="sign-in-page container">
      <div className="Content">
        <Title title="Sign In" description="Welcome back! Please enter your details"/>

        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
<div className="input-group">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={password}
    onChange={handlePasswordChange}
    required
    className="password-input"
  />
  <button type="button" onClick={toggleShowPassword} className="show-password-button">
    {showPassword ? 'Hide' : 'Show'}
  </button>
</div>
          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={handleKeepSignedInChange}
              />
              Keep me signed in
            </label>
            <a className="link" href="/forgot-password">Forgot password</a>
          </div>
          <Link to="/Dashboard"><button type="submit" className="sign-in-button">Sign in</button></Link>
        </form>
        <div className="third-party-sign-in">
          <button>Sign in with Google</button>
          <button>Sign in with GitHub</button>
          <button>Sign in with Facebook</button>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
