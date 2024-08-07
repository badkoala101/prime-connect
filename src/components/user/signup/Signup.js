import React, { useState} from 'react'
import './Signup.css'
import Title from '../title/Title';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [agreeUserPolicy, setagreeUserPolicy] = useState('false');
  const [agreeTerms, setagreeTerms] = useState('false');
  const [notRobot, setnotRobot] = useState('false');
 
  const [passwordStrength, setPasswordStrength] = useState({
    capitalLetter: false,
    numberOrSymbol: false,
    minLength: false,
  });
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
     
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmail(e.target.value); 
    }
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setName(e.target.value); 
    }
      
  const handleconfirmPasswordChange = (e) => {
    const { name, value } = e.target;
    setconfirmPassword(e.target.value);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
      
    if (name === 'password') {
      setPasswordStrength({
        capitalLetter: /[A-Z]/.test(value),
        numberOrSymbol: /[0-9!@#$%^&*]/.test(value),
        minLength: value.length >= 8,
      });
    }
    setPassword(e.target.value);
    setagreeUserPolicy(e.target.value);
    setagreeTerms(e.target.value);
    setnotRobot(e.target.value);
    if (!passwordTouched) {
      setPasswordTouched(true);
    }
    if (name === 'password') {
      setPasswordStrength({
        capitalLetter: /[A-Z]/.test(value),
        numberOrSymbol: /[0-9!@#$%^&*]/.test(value),
        minLength: value.length >= 8,
      });
    }
  };
      
  
  const [passwordTouched, setPasswordTouched] = useState(false);

      
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };
  return (

    <div className='container'>
      <div className='sign-up-form Content'>
        <Title title='Sign Up' description="Let's connect you to your favorite bank "/>
        <form method='get' action='register'>
        <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={handleEmailChange}
              required
          />
          <input
          type="text"
          name="name"
          placeholder="name"
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
              onChange={handleChange}
              onBlur={() => setPasswordTouched(true)}
              // value={password}
              // onChange={handleChange}
              required
          />
             <button type="button" onClick={toggleShowPassword} className="show-password-button">{showPassword ? 'Hide' : 'Show'}             </button>

         </div>
        {passwordTouched && (
          <div className=" password-strength ">
            <p className={passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ?"valid": "invalid"}>Password strength: {passwordStrength.minLength && passwordStrength.capitalLetter && passwordStrength.numberOrSymbol ? 'strong' : 'weak'}</p>
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
              onChange={handleconfirmPasswordChange}
              required
          />
          <div className="checkboxes">
              <label>
              <input
                  type="checkbox"
                  name="agreeUserPolicy"
                  checked={agreeUserPolicy}
                  onChange={handleChange}
                  required
              />
              I agree with Prime Connect's User Agreement and Privacy Policy.
              </label>
              <label>
              <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleChange}
                  required
              />
              I agree with Terms and Conditions
              </label>
              <label>
              <input
                  type="checkbox"
                  name="notRobot"
                  checked={notRobot}
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
          <p className='backlink'>Already have an account? <a href="/signin">Sign in</a></p>
      </div>
    </div>
);

}

export default Signup;
