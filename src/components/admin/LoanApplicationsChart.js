import React, { useEffect, useState } from 'react';
import api from '../../Api'; 
import './LoanApplicationsChart.css'; 

function LoanApplicationsChart() {
  const [loanData, setLoanData] = useState({ approved: 0, pending: 0, rejected: 0 });
  const [error, setError] = useState(null);

  const fetchLoanData = async () => {
    try {
      const response = await api.get('/admin/loans', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        const loans = response.data;
        const categorizedData = loans.reduce((acc, loan) => {
          if (loan.status === 'approved') acc.approved += 1;
          if (loan.status === 'pending') acc.pending += 1;
          if (loan.status === 'rejected') acc.rejected += 1;
          return acc;
        }, { approved: 0, pending: 0, rejected: 0 });

        setLoanData(categorizedData);
      } else {
        throw new Error('Failed to fetch loan data');
      }
    } catch (error) {
      setError('Error fetching loan data: ' + (error.response?.data?.message || error.message));
      console.error('Error fetching loan data:', error);
    }
  };

  useEffect(() => {
    fetchLoanData();
  }, []);

  const total = loanData.approved + loanData.pending + loanData.rejected;
  const approvedPercentage = (loanData.approved / total) * 100 || 0;
  const pendingPercentage = (loanData.pending / total) * 100 || 0;
  const rejectedPercentage = (loanData.rejected / total) * 100 || 0;

  return (
    <div className="card">
      <h3 className="card-title">Loan Applications</h3>
      <div className="chart-container">
        <svg width="120" height="120" viewBox="0 0 36 36" className="pie-chart">
          <circle
            className="background-circle"
            r="16"
            cx="18"
            cy="18"
          />
          <circle
            className="progress-circle approved"
            r="16"
            cx="18"
            cy="18"
            style={{ strokeDasharray: `${approvedPercentage} ${100 - approvedPercentage}` }}
          />
          <circle
            className="progress-circle pending"
            r="16"
            cx="18"
            cy="18"
            style={{ strokeDasharray: `${pendingPercentage} ${100 - pendingPercentage}`, strokeDashoffset: `${100 - approvedPercentage}` }}
          />
          <circle
            className="progress-circle rejected"
            r="16"
            cx="18"
            cy="18"
            style={{ strokeDasharray: `${rejectedPercentage} ${100 - rejectedPercentage}`, strokeDashoffset: `${100 - approvedPercentage - pendingPercentage}` }}
          />
        </svg>
        <div className="chart-label">
          <span className="count">{total}</span>
          <span className="label">Applications</span>
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="color-box approved"></div>
          <span>Approved</span>
        </div>
        <div className="legend-item">
          <div className="color-box pending"></div>
          <span>Pending</span>
        </div>
        <div className="legend-item">
          <div className="color-box rejected"></div>
          <span>Rejected</span>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LoanApplicationsChart;
