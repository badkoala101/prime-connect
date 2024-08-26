import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddressForm({ userId }) {
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (userId) {
      const fetchAddress = async () => {
        try {
          const response = await axios.get(`/api/users/${userId}/address`);
          setAddress(response.data.address);
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      };
      fetchAddress();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${userId}/address`, { address });
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Address</h2>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddressForm;
