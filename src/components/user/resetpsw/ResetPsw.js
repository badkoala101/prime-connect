import React, { useState } from 'react'
import Title from '../title/Title';
import '../user.css'
import '../signup/Signup.css'

const ResetPsw = () => {

  const [passwordStrength, setPasswordStrength] = useState({
    capitalLetter: false,
    numberOrSymbol: false,
    minLength: false,
  });
     
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
      
  
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);



  
  return (
    <div className='container '>
    <div className=" Content">
      < Title title="Reset password" description="Create a strong password"/>
        <div className="input-group">
          <input
            type="password"
            name='password'
            placeholder="Password"
            value={password}
            onChange={handleChange}
            onBlur={() => setPasswordTouched(true)}
          />
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
        <input type="password" placeholder="Confirm password" />
        <button type='submit' >Next</button>
      </div>
    </div>
  );
};
export default ResetPsw;

