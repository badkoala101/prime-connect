import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../Api';
import './ViewUserDetail.css';

function ViewUserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/admin/user-info/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserInfo(response.data.personal_info);
        setAddressInfo(response.data.address_info);
      } catch (error) {
        console.error('Error fetching user info:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <div className="user-detail-container">
      <div className="user-detail-content">
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          userInfo || addressInfo ? (
            <div className="user-details">
              <div className="user-detail-section">
                <h3 className="user-detail-section-heading">Basic Information</h3>
                <p className="user-detail-info"><strong>ID:</strong> {userInfo?.user_id || 'N/A'}</p>
                <p className="user-detail-info"><strong>First Name:</strong> {userInfo?.first_name || 'N/A'}</p>
                <p className="user-detail-info"><strong>Middle Name:</strong> {userInfo?.middle_name || 'N/A'}</p>
                <p className="user-detail-info"><strong>Last Name:</strong> {userInfo?.last_name || 'N/A'}</p>
                <p className="user-detail-info"><strong>Email:</strong> {userInfo?.email || 'N/A'}</p>
                <p className="user-detail-info"><strong>Phone Number:</strong> {userInfo?.phone_number || 'N/A'}</p>
                <p className="user-detail-info"><strong>National/Kebele ID Number:</strong> {userInfo?.id_number || 'N/A'}</p>
                <p className="user-detail-info"><strong>Your Coop Account:</strong> {userInfo?.account_number || 'N/A'}</p>
                <p className="user-detail-info"><strong>Gender:</strong> {userInfo?.gender || 'N/A'}</p>
                <p className="user-detail-info"><strong>Birth Date:</strong> {userInfo?.birth_date || 'N/A'}</p>
                <p className="user-detail-info"><strong>Marital Status:</strong> {userInfo?.marital_status || 'N/A'}</p>
              </div>
              <div className="user-detail-section">
                <h3 className="user-detail-section-heading">Address Information</h3>
                <p className="user-detail-info"><strong>Country:</strong> {addressInfo?.country || 'N/A'}</p>
                <p className="user-detail-info"><strong>Region:</strong> {addressInfo?.region || 'N/A'}</p>
                <p className="user-detail-info"><strong>City:</strong> {addressInfo?.city || 'N/A'}</p>
                <p className="user-detail-info"><strong>Zone:</strong> {addressInfo?.zone || 'N/A'}</p>
                <p className="user-detail-info"><strong>Woreda:</strong> {addressInfo?.woreda || 'N/A'}</p>
                <p className="user-detail-info"><strong>Kebele:</strong> {addressInfo?.kebele || 'N/A'}</p>
                <p className="user-detail-info"><strong>House Number:</strong> {addressInfo?.house_number || 'N/A'}</p>
                <p className="user-detail-info"><strong>Street Address:</strong> {addressInfo?.street_address || 'N/A'}</p>
                <p className="user-detail-info"><strong>Address Type:</strong> {addressInfo?.address_type || 'N/A'}</p>
                <p className="user-detail-info"><strong>Address Duration:</strong> {addressInfo?.address_duration || 'N/A'}</p>
              </div>
            </div>
          ) : (
            <p className="error-message">The user has not completed the form.</p>
          )
        )}
        <button className="back-button" onClick={() => navigate('/viewusers')}>Back to View User</button>
      </div>
    </div>
  );
}

export default ViewUserDetail;
