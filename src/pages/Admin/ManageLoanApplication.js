import React, { useState, useEffect } from 'react';
import api from '../../Api';
import Sidebar from '../../components/admin/AdminSidebar';
import show from '../../assets/show.png';
import './ManageLoanApplication.css';

const ManageLoanApplication = () => {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await api.get('/admin/loans', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.status === 200) {
          setLoans(response.data);
        } else {
          throw new Error('Failed to fetch loan applications');
        }
      } catch (error) {
        setError('Error fetching loan applications: ' + (error.response?.data?.message || error.message));
        console.error('Error fetching loan applications:', error);
      }
    };

    fetchLoans();
  }, []);

  const handleStatusChange = async (loanId, newStatus) => {
    try {
      const response = await api.put(`/admin/loans/${loanId}`, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        setLoans(loans.map(loan => loan.id === loanId ? { ...loan, status: newStatus } : loan));
        setStatusUpdate(`Loan status updated to "${newStatus}" successfully!`);
      } else {
        throw new Error('Failed to update loan status');
      }
    } catch (error) {
      setError('Error updating loan status: ' + (error.response?.data?.message || error.message));
      console.error('Error updating loan status:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="manage-loan-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={isSidebarVisible ? 'main-content' : 'main-content full-width'}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' alt="Show Sidebar" />
          </button>
        )}
        <div className="manage-loan-content">
          <h2>Manage Loan Applications</h2>
          {error && <p className="error-message">{error}</p>}
          {statusUpdate && <p className="status-update-message">{statusUpdate}</p>}
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.length > 0 ? (
                loans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.name}</td>
                    <td>{loan.email}</td>
                    <td>{loan.address}</td>
                    <td>{loan.phone_number}</td>
                    <td>{loan.kebele_id}</td>
                    <td>{loan.bank_account}</td>
                    <td>{loan.loan_amount}</td>
                    <td>{loan.status}</td>
                    <td>
                      <button onClick={() => handleStatusChange(loan.id, 'approved')}>Approve</button>
                      <button onClick={() => handleStatusChange(loan.id, 'rejected')}>Reject</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No loan applications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ManageLoanApplication;
