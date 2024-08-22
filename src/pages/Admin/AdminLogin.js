import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import api from '../../Api';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/admin/login', { username, password });

      // Store token
      localStorage.setItem('adminToken', response.data.token);

      // Show success popup
      setLoading(false);
      setShowPopup(true);

      // Navigate to admin dashboard
      setTimeout(() => {
        setShowPopup(false);
        navigate('/admin');
      }, 2000); // Show popup for 2 seconds
    } catch (error) {
      setLoading(false);
      // Handle sign-in failure (e.g., show error message)
    }
  };

  return (
    <div className="admin-login-page container">
      <div className="admin-content">
        <h2 className="admin-title">Admin Login</h2>
        <p className="admin-description">Please enter your admin credentials</p>

        <form onSubmit={handleSignIn}>
          <div className="admin-input-group">
            <input
              type="text"
              placeholder="Admin Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="admin-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Admin Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="admin-password-input"
            />
            <button type="button" onClick={toggleShowPassword} className="admin-show-password-button">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="admin-sign-in-button">
            {loading ? <div className="admin-spinner"></div> : 'Sign in'}
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="admin-popup">
          <div className="admin-popup-content">
            <h3>Signed in successfully!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
