import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import api from '../../../Api'; 
import './LoanApplication.css';
import MichuNav from './MichuNav';

const LoanApplication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [kebeleId, setKebeleId] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [userInfoComplete, setUserInfoComplete] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get('/user-info', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const { name, email, address, phone_number, kebele_id, bank_account } = response.data;

        // Check if any of the fields are missing
        if (!name || !email || !address || !phone_number || !kebele_id || !bank_account) {
          setUserInfoComplete(false);
        } 
      } catch (error) {
        console.error('Error fetching user info:', error.response?.data || error.message);
        setUserInfoComplete(false); // Assume incomplete info if error occurs
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/apply-loan', {
        name,
        email,
        address,
        phone_number: phoneNumber,
        kebele_id: kebeleId,
        bank_account: bankAccount,
        amount,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Application submitted successfully!');
    } catch (error) {
      setMessage('Failed to submit application: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  const handleOkClick = () => {
    navigate('/verifyid'); // Navigate to verifyid page
  };

  return (
    <div className="loan-application-form">
      <MichuNav />
      <h2>Loan Application</h2>
      
      {!userInfoComplete ? (
        <div className="message-box">
          <p>Please complete your profile information before applying for a loan.</p>
          <button onClick={handleOkClick}>OK</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="National/Kebele ID Number"
            value={kebeleId}
            onChange={(e) => setKebeleId(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Your Coop Bank Account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            required
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
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanApplication;
