// src/pages/LoanApplication.js
import React, { useState } from 'react';
import api from '../../Api'; // Import your configured axios instance
import './LoanApplication.css'

const LoanApplication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [kebeleId, setKebeleId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/apply-loan', {
        name,
        email,
        address,
        phone_number: phoneNumber,
        kebele_id: kebeleId
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
          placeholder="Kebele ID Number"
          value={kebeleId}
          onChange={(e) => setKebeleId(e.target.value)}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanApplication;
