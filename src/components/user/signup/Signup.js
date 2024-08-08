import React, { useState } from 'react';
import './Signup.css';
import Title from '../title/Title';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const [passwordStrength, setPasswordStrength] = useState({
    capitalLetter: false,
    numberOrSymbol: false,
    minLength: false,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setPasswordStrength({
      capitalLetter: /[A-Z]/.test(value),
      numberOrSymbol: /[0-9!@#$%^&*]/.test(value),
      minLength: value.length >= 8,
    });
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
        email_or_phone: emailOrPhone,
        name,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          setMessage(`Registration failed: ${data.errors.email_or_phone ? data.errors.email_or_phone[0] : ''}`);
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
        <Title title='Sign Up' description="Let's connect you to your favorite bank "/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email_or_phone"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={handleEmailOrPhoneChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
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
          {password && (
            <div className="password-strength">
              <p className={passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ? "valid" : "invalid"}>
                Password strength: {passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ? 'strong' : 'weak'}
              </p>
              <ul>
                <li className={passwordStrength.capitalLetter ? 'valid' : 'invalid'}>At least one capital letter</li>
                <li className={passwordStrength.numberOrSymbol ? 'valid' : 'invalid'}>Contains a number or symbol (e.g., #, &, !, ?)</li>
                <li className={passwordStrength.minLength ? 'valid' : 'invalid'}>At least 8 characters</li>
              </ul>
            </div>
          )}
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
        <hr />
        <button className="social-signup">Sign up with Google</button>
        <button className="social-signup">Sign up with GitHub</button>
        <button className="social-signup">Sign up with Facebook</button>
        <p className='backlink'>Already have an account? <a href="/signin">Sign in</a></p>
      </div>
    </div>
  );
}

export default Signup;
