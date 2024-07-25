import React, { useState} from 'react'
import './Signup.css'
import Title from '../title/Title';

const Signup = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeUserPolicy: false,
    agreeTerms: false,
    notRobot: false,
  });

  const [passwordStrength, setPasswordStrength] = useState({
    capitalLetter: false,
    numberOrSymbol: false,
    minLength: false,
  });
     
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
      
    if (name === 'password') {
      setPasswordStrength({
        capitalLetter: /[A-Z]/.test(value),
        numberOrSymbol: /[0-9!@#$%^&*]/.test(value),
        minLength: value.length >= 8,
      });
    }
  };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };
  return (

    <div className='sign-up-form container'>
      <Title title='Sign Up' description="Let's connect you to your favorite bank "/>
      <form onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            value={formData.email}
            onChange={handleChange}
            required
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
        />
        <div className="password-strength">
            <p className={passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ?"valid": "invalid"}>Password strength: {passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ? 'strong' : 'weak'}</p>
            <ul>
            <li className={passwordStrength.capitalLetter ? 'valid' : 'invalid'}>At least one capital letter</li>
            <li className={passwordStrength.numberOrSymbol ? 'valid' : 'invalid'}>Contains a number or symbol (e.g., #, &, !, ?)</li>
            <li className={passwordStrength.minLength ? 'valid' : 'invalid'}>At least 8 characters</li>
            </ul>
        </div>
        <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
        />
        <div className="checkboxes">
            <label>
            <input
                type="checkbox"
                name="agreeUserPolicy"
                checked={formData.agreeUserPolicy}
                onChange={handleChange}
                required
            />
            I agree with Prime Connect's User Agreement and Privacy Policy.
            </label>
            <label>
            <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
            />
            I agree with Terms and Conditions
            </label>
            <label>
            <input
                type="checkbox"
                name="notRobot"
                checked={formData.notRobot}
                onChange={handleChange}
                required
            />
            I am not a robot
            </label>
        </div>
        <button type="submit">sign up</button>
        </form>
        <hr />
        <button className="social-signup">Sign up with Google</button>
        <button className="social-signup">Sign up with GitHub</button>
        <button className="social-signup">Sign up with Facebook</button>
        <p className='signin-link'>Already have an account? <a href="/signin">Sign in</a></p>
    </div>
);

}

export default Signup;
