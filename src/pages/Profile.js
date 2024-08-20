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
                  <p className="profile-info"><strong>First Name:</strong> {userInfo.personal_info.first_name}</p>
                  <p className="profile-info"><strong>Middle Name:</strong> {userInfo.personal_info.middle_name}</p>
                  <p className="profile-info"><strong>Last Name:</strong> {userInfo.personal_info.last_name}</p>
                  <p className="profile-info"><strong>Gender:</strong> {userInfo.personal_info.gender}</p>
                  <p className="profile-info"><strong>Birth Date:</strong> {userInfo.personal_info.birth_date}</p>
                  <p className="profile-info"><strong>Marital Status:</strong> {userInfo.personal_info.marital_status}</p>
                </div>
                <div className="profile-section">
                  <h3 className="profile-section-heading">Address Information</h3>
                  <p className="profile-info"><strong>Country:</strong> {userInfo.address_info.country}</p>
                  <p className="profile-info"><strong>Region:</strong> {userInfo.address_info.region}</p>
                  <p className="profile-info"><strong>Zone:</strong> {userInfo.address_info.zone}</p>
                  <p className="profile-info"><strong>City:</strong> {userInfo.address_info.city}</p>
                  <p className="profile-info"><strong>Woreda:</strong> {userInfo.address_info.woreda}</p>
                  <p className="profile-info"><strong>Kebele:</strong> {userInfo.address_info.kebele}</p>
                  <p className="profile-info"><strong>House Number:</strong> {userInfo.address_info.house_number}</p>
                  <p className="profile-info"><strong>Street Address:</strong> {userInfo.address_info.street_address}</p>
                  <p className="profile-info"><strong>Address Type:</strong> {userInfo.address_info.address_type}</p>
                  <p className="profile-info"><strong>Address Duration:</strong> {userInfo.address_info.address_duration}</p>
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
