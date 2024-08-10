import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signin.css';
import '../user.css';
import Title from '../title/Title';
import api from '../../../Api'; // Import your configured axios instance


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/login', { email, password });
      setMessage('Sign in successful!');
      console.log(response.data);

      // Optional: Store token or user data
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard
      navigate('/Dashboard');
    } catch (error) {
      setMessage('Sign in failed: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  return (
    <div className="sign-in-page container">
      <div className="Content">
        <Title title="Sign In" description="Welcome back! Please enter your details"/>

        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
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
          <button type="submit" className="sign-in-button">Sign in</button>
        </form>
        {message && <p>{message}</p>}
        <div className="third-party-sign-in">
          <button>Sign in with Google</button>
          <button>Sign in with GitHub</button>
          <button>Sign in with Facebook</button>
        </div>
        <p className="sign-up-link">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>
      </div>
    </div>
  );
};

export default SignIn;
