import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import AddressForm from './AddressForm';
import './AdminDashboard.css'; // Include your CSS file

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-main-content">
        <div className="profile-content">
          <h1 className="profile-heading">Admin Dashboard</h1>
          <div className="profile-section">
            <h2 className="profile-section-heading">Users</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => handleEdit(user)}>Edit</button>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isFormVisible && (
            <>
              <UserForm user={selectedUser} />
              <AddressForm userId={selectedUser?.id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
