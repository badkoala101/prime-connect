import React, { useEffect, useState } from 'react';
import api from '../Api';
import Sidebar from '../components/Sidebar';
import './Profile.css';
import show from '../assets/show.png';

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user-info', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="profile-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`profile-main-content ${isSidebarVisible ? '' : 'profile-main-content-full-width'}`}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} alt="Show Sidebar" className="show" />
          </button>
        )}
        <div className="profile-content">
          {loading ? (
            <div className="loading-indicator">Loading...</div>
          ) : (
            userInfo ? (
              <div>
                <h2 className="profile-heading">Profile</h2>
                <div className="profile-section">
                  <h3 className="profile-section-heading">Personal Information</h3>
                  <p className="profile-info"><strong>First Name:</strong> {userInfo.personal_info?.first_name || 'N/A'}</p>
                  <p className="profile-info"><strong>Middle Name:</strong> {userInfo.personal_info?.middle_name || 'N/A'}</p>
                  <p className="profile-info"><strong>Last Name:</strong> {userInfo.personal_info?.last_name || 'N/A'}</p>
                  <p className="profile-info"><strong>Email:</strong> {userInfo.personal_info?.email || 'N/A'}</p>
                  <p className="profile-info"><strong>Gender:</strong> {userInfo.personal_info?.gender || 'N/A'}</p>
                  <p className="profile-info"><strong>Birth Date:</strong> {userInfo.personal_info?.birth_date || 'N/A'}</p>
                  <p className="profile-info"><strong>Marital Status:</strong> {userInfo.personal_info?.marital_status || 'N/A'}</p>
                  <p className="profile-info"><strong>Phone Number:</strong> {userInfo.personal_info?.phone_number || 'N/A'}</p>
                  <p className="profile-info"><strong>National/Kebele ID Number:</strong> {userInfo.personal_info?.id_number || 'N/A'}</p>
                  <p className="profile-info"><strong>Your Coop Account:</strong> {userInfo.personal_info?.account_number || 'N/A'}</p>
                </div>
                <div className="profile-section">
                  <h3 className="profile-section-heading">Address Information</h3>
                  <p className="profile-info"><strong>Country:</strong> {userInfo.address_info?.country || 'N/A'}</p>
                  <p className="profile-info"><strong>Region:</strong> {userInfo.address_info?.region || 'N/A'}</p>
                  <p className="profile-info"><strong>Zone:</strong> {userInfo.address_info?.zone || 'N/A'}</p>
                  <p className="profile-info"><strong>City:</strong> {userInfo.address_info?.city || 'N/A'}</p>
                  <p className="profile-info"><strong>Woreda:</strong> {userInfo.address_info?.woreda || 'N/A'}</p>
                  <p className="profile-info"><strong>Kebele:</strong> {userInfo.address_info?.kebele || 'N/A'}</p>
                  <p className="profile-info"><strong>House Number:</strong> {userInfo.address_info?.house_number || 'N/A'}</p>
                  <p className="profile-info"><strong>Street Address:</strong> {userInfo.address_info?.street_address || 'N/A'}</p>
                  <p className="profile-info"><strong>Address Type:</strong> {userInfo.address_info?.address_type || 'N/A'}</p>
                  <p className="profile-info"><strong>Address Duration:</strong> {userInfo.address_info?.address_duration || 'N/A'}</p>
                </div>
              </div>
            ) : (
              <p>You haven't submitted your personal or address information yet.</p>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;
