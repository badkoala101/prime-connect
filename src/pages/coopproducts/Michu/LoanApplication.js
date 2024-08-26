import React, { useState, useEffect } from 'react';
import api from '../../../Api'; 
import './LoanApplication.css';
import MichuNav from './MichuNav';

const LoanApplication = () => {
  const [userInfo, setUserInfo] = useState('');
  
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user-info', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error.response?.data || error.message);
      } 
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/apply-loan', {
        name: `${userInfo.personal_info?.first_name} ${userInfo.personal_info?.middle_name || ''} ${userInfo.personal_info?.last_name}`,
        email: userInfo.personal_info?.email,
        address: userInfo.address_info?.city,
        phone_number: userInfo.personal_info?.phone_number,
        kebele_id: userInfo.personal_info?.id_number,
        bank_account: userInfo.personal_info?.account_number,
        loan_amount: amount,  
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Application submitted successfully!');
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        console.error('Validation errors:', errors);
        setMessage('Failed to submit application: ' + Object.values(errors).flat().join(', '));
      } else {
        setMessage('Failed to submit application: ' + (error.response?.data?.error || 'Unknown error'));
      }
    }
  };

  return (
    <div className="loan-application-form">
      <MichuNav />
      <h2>Loan Application</h2>
      
        
       
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={`${userInfo.personal_info?.first_name} ${userInfo.personal_info?.middle_name || ''} ${userInfo.personal_info?.last_name}`}
            readOnly
          />
          <input
            type="email"
            placeholder="Email"
            value={userInfo.personal_info?.email}
            readOnly
          />
          <input
            type="text"
            placeholder="Address"
            value={userInfo.address_info?.city}
            readOnly
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={userInfo.personal_info?.phone_number}
            readOnly
          />
          <input
            type="text"
            placeholder="National/Kebele ID Number"
            value={userInfo.personal_info?.id_number}
            readOnly
          />
          <input
            type="number"
            placeholder="Your Coop Bank Account"
            value={userInfo.personal_info?.account_number}
            readOnly
          />
          <input
            type="number"
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Submit Application</button>
        </form>
    
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanApplication;
