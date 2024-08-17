import React, { useState, useEffect } from 'react';
import api from '../../Api';

const LoanDashboard = () => {
  const [loanStatus, setLoanStatus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        const response = await api.get('/loan-status', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.status === 200) {
          setLoanStatus(response.data);
        } else {
          throw new Error('Failed to fetch loan status');
        }
      } catch (error) {
        setError('Error fetching loan status: ' + (error.response?.data?.message || error.message));
        console.error('Error fetching loan status:', error);
      }
    };

    fetchLoanStatus();
  }, []);

  return (
    <div className="loan-dashboard">
      <h2>Loan Dashboard</h2>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Kebele ID</th>
            <th>Bank Account</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanStatus.length > 0 ? (
            loanStatus.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.name}</td>
                <td>{loan.email}</td>
                <td>{loan.address}</td>
                <td>{loan.phone_number}</td>
                <td>{loan.kebele_id}</td>
                <td>{loan.bank_account}</td>
                <td>{loan.amount}</td>
                <td>{loan.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No loan applications found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LoanDashboard;
