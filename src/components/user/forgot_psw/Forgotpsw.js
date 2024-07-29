import React, { useState } from 'react'
import './Forgotpsw.css'
import Title from '../title/Title';
import '../user.css'
const Forgotpsw = () => {

    const [emailOrPhone, setEmailOrPhone] = useState('');
      
    const handleSubmit = (e) => {
        e.preventDefault();
          // Logic for handling password reset request goes here
          console.log('Password reset request for:', emailOrPhone);
    };

    return (
        <div className='container'>
            <div className='Content'>
            <Title title="Forgot your password?" description="No worries we will send you reset instructions"/>
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        className="input"
                    />
                    <button type="submit" >Next</button>
                </form>
                <a href="/login" className="back-link">Go back to log in</a>
            </div>
        </div>
  );
};

export default Forgotpsw;
