import React, { useState } from 'react';
import './Signup.css';
import Title from '../title/Title';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          setMessage(`Registration failed: ${Object.values(data.errors).join(', ')}`);
        } else {
          setMessage('Registration successful!');
        }
      })
      .catch(error => {
        setMessage('An error occurred during registration.');
        console.error('Error:', error);
      });
  };

  return (
    <div className='container'>
      <div className='sign-up-form Content'>
        <Title title='Sign Up' description="Join us today!" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button type="button" onClick={toggleShowPassword} className="show-password-button">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
