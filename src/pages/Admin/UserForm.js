import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ user }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await axios.put(`/api/users/${user.id}`, { name, email });
      } else {
        await axios.post('/api/users', { name, email });
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;
