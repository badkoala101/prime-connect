import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Assuming you have React Router for navigation
import api from '../../Api';
import Sidebar from '../../components/admin/AdminSidebar';
import show from '../../assets/show.png';
import './ViewUsers.css';

const UserManagement = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get('/admin/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        setUsers(response.data);
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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Remove the user from local state
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Error deleting user: ' + (error.response?.data?.message || error.message));
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="notifications-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={isSidebarVisible ? 'main-content' : 'main-content full-width'}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' alt="Show Sidebar" />
          </button>
        )}
        <div className='notifications-content'>
          <div className="content-box_notification">
            <h3>User Management</h3>
            <div className="filter_notification">
              <input type="text" placeholder="Search users" />
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr className='view-table-rows'>
                    <th className='view-table-no'>#</th>
                    <th className='view-table-id'>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className='view-action-buttons'>
                          {/* Pass the user ID to the ViewUserDetail route */}
                          <Link to={`/view-user-detail/${user.id}`}>
                            <button className='view-detail-btn'>View Details</button>
                          </Link>
                          <button onClick={() => handleDelete(user.id)} style={{ color: 'red' }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
