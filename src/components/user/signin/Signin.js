import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import '../user.css';
import Title from '../title/Title';
import api from '../../../Api';
import google from '../../../assets/google.png';
import github from '../../../assets/github.svg';
import facebook from '../../../assets/facebook.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

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
    setLoading(true); // Start loading spinner

    try {
      const response = await api.post('/login', { email, password });

      // Optional: Store token or user data
      localStorage.setItem('token', response.data.token);

      // Show success popup
      setLoading(false); // Stop loading spinner
      setShowPopup(true);

      // After a delay, navigate to the dashboard
      setTimeout(() => {
        setShowPopup(false);
        navigate('/Dashboard');
      }, 2000); // Display the popup for 2 seconds
    } catch (error) {
      setLoading(false); // Stop loading spinner
      // Optionally handle sign-in failure here
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
          <button type="submit" className="sign-in-button">
            {loading ? <div className="spinner"></div> : 'Sign in'}
          </button>
        </form>

        <div className="third-party-sign-in">
          <button>Sign in with Google<img src={google} className="socialicons" alt="google" /></button>
          <button>Sign in with GitHub<img src={github} className="socialicons" alt="github" /></button>
          <button>Sign in with Facebook<img src={facebook} className="socialicons" alt="facebook" /></button>
        </div>
        <p className="sign-up-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Signed in successfully!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
