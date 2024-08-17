import React, { useState } from 'react';
import './Signup.css';
import Title from '../title/Title';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    agreeUserPolicy: false,
    agreeTerms: false,
    notRobot: false,
  });
  const [message, setMessage] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    capitalLetter: false,
    numberOrSymbol: false,
    minLength: false,
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
    const { value } = e.target;
    setPassword(value);
    setPasswordStrength({
      capitalLetter: /[A-Z]/.test(value),
      numberOrSymbol: /[0-9!@#$%^&*]/.test(value),
      minLength: value.length >= 8,
    });
    setPasswordTouched(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false); // Stop loading spinner
      return;
    }

    if (!checkboxes.agreeUserPolicy || !checkboxes.agreeTerms || !checkboxes.notRobot) {
      setMessage('Please agree to all the terms and conditions');
      setLoading(false); // Stop loading spinner
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
        setLoading(false); // Stop loading spinner

        if (data.errors) {
          setMessage(`Registration failed: ${Object.values(data.errors).join(', ')}`);
        } else {
          setMessage('Registered successfully');
          localStorage.setItem('token', data.token);
          setShowPopup(true); // Show success popup

          // After a delay, navigate to the dashboard
          setTimeout(() => {
            setShowPopup(false);
            window.location.href = '/dashboard';
          }, 2000); // Display the popup for 2 seconds
        }
      })
      .catch(error => {
        setLoading(false); // Stop loading spinner
        setMessage('An error has occurred during registration.');
        console.error('Error:', error);
      });
  };

  return (
    <div className='container'>
      <div className='sign-up-form Content'>
        <Title title='Sign Up' description="Let's connect you to your favorite bank" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
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
          {passwordTouched && (
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
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="agreeUserPolicy"
                checked={checkboxes.agreeUserPolicy}
                onChange={handleCheckboxChange}
                required
              />
              I agree with Prime Connect's User Agreement and Privacy Policy.
            </label>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={checkboxes.agreeTerms}
                onChange={handleCheckboxChange}
                required
              />
              I agree with Terms and Conditions.
            </label>
            <label>
              <input
                type="checkbox"
                name="notRobot"
                checked={checkboxes.notRobot}
                onChange={handleCheckboxChange}
                required
              />
              I am not a robot.
            </label>
          </div>
          <button type="submit">
            {loading ? <div className="spinner"></div> : 'Sign Up'}
          </button>
          <hr />
          <button type="button" className="social-signup">Sign up with Google</button>
          <button type="button" className="social-signup">Sign up with GitHub</button>
          <button type="button" className="social-signup">Sign up with Facebook</button>
          <p className='backlink'>Already have an account? <a href="/signin">Sign in</a></p>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Signed up successfully!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
