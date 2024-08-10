import React, { useState } from 'react';
import api from '../../Api'; // Import your configured axios instance
import './LoanApplication.css'

const LoanApplication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [kebeleId, setKebeleId] = useState('');
  const [bankAccount, setBankAccount] = useState(''); // New state for bank account
  const [amount, setAmount] = useState(''); // New state for amount
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/apply-loan', {
        name,
        email,
        address,
        phone_number: phoneNumber,
        kebele_id: kebeleId,
        bank_account: bankAccount, // Include bank account in the request
        amount, // Include amount in the request
      });
      setMessage('Application submitted successfully!');
    } catch (error) {
      setMessage('Failed to submit application: ' + (error.response?.data?.error || 'Unknown error'));
    }
  };

  return (
    <div className="loan-application-form">
      <h2>Loan Application</h2>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanApplication;
