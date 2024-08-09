// src/pages/LoanDashboard.js
import React, { useState, useEffect } from 'react';
import api from '../../Api'; // Import your configured axios instance

const LoanDashboard = () => {
  const [loanStatus, setLoanStatus] = useState([]);
  
  useEffect(() => {
    // Fetch loan status from API
    const fetchLoanStatus = async () => {
      try {
        const response = await api.get('/loan-status');
        setLoanStatus(response.data);
      } catch (error) {
        console.error('Error fetching loan status:', error);
      }
    };

    fetchLoanStatus();
  }, []);

  return (
    <div className="loan-dashboard">
      <h2>Loan Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Kebele ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanStatus.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.name}</td>
              <td>{loan.email}</td>
              <td>{loan.address}</td>
              <td>{loan.phone_number}</td>
              <td>{loan.kebele_id}</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanDashboard;
