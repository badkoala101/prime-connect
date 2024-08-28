import React, { useEffect, useState } from 'react';
import api from '../../Api'; 
import './UserChart.css'; 

function UserCountChart() {
  const [userCount, setUserCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/admin/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        setUserCount(response.data.length);
      } else {
        throw new Error('Failed to fetch users');
      }
    } catch (error) {
      setError('Error fetching users: ' + (error.response?.data?.message || error.message));
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const maxUsers = 10; // Maximum number of users for the chart to represent full circle
  const percentage = (userCount / maxUsers) * 100; // Calculate percentage based on maxUsers

  return (
    <div className="card">
      <h3 className="card-title">User Count</h3>
      <div className="chart-container">
        <svg width="120" height="120" viewBox="0 0 36 36" className="pie-chart">
          <circle
            className="background-circle"
            r="16"
            cx="18"
            cy="18"
          />
          <circle
            className="progress-circle"
            r="16"
            cx="18"
            cy="18"
            style={{ strokeDasharray: `${percentage}, 100` }}
          />
        </svg>
        <div className="chart-label">
          <span className="count">{userCount}</span>
          <span className="label">Users</span>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UserCountChart;
