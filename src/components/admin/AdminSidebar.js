import React, { useState } from 'react';
import sun from '../../assets/sun.png';
import back from '../../assets/back.png';
import manageUsersIcon from '../../assets/profile-icon.png';
import michuIcon from '../../assets/michu.png';
import dropdownIcon from '../../assets/view-toggle.png'; 
import logout from '../../assets/logout.png';
import profile from '../../assets/profile-icon.png';
import dashboard from '../../assets/dashboard.jpg';
import './AdminSidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminSidebar({ isVisible, toggleSidebar }) {
  const [userName, setUserName] = useState('Admin Name');
  const [userEmail, setUserEmail] = useState('admin@example.com');
  const [isMichuDropdownVisible, setMichuDropdownVisible] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  const toggleMichuDropdown = () => {
    setMichuDropdownVisible(!isMichuDropdownVisible);
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-header">
        <a className="title" href="/">
          Prime Connect Admin
        </a>
        <div className="header-buttons">
          <button className="nightmode">
            <img src={sun} className="sun" alt="sun" />
          </button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={back} className="back" alt="back" />
          </button>
        </div>
      </div>
      <ul className="menu">
        <li className="sidebar-list-item">
          <NavLink to="/admin" className="link">
            <img src={dashboard} className="icon" alt="Dashboard" />
            Dashboard
          </NavLink>
          <NavLink to="/manage-users" className="link">
            <img src={manageUsersIcon} className="icon" alt="Manage Users" />
            Manage Users
          </NavLink>
        </li>
        <li className="sidebar-list-item" onMouseEnter={toggleMichuDropdown} onMouseLeave={toggleMichuDropdown}>
          <div className="link">
            <img src={michuIcon} className="icon" alt="Michu" />
            Michu <img src={dropdownIcon} className="dropdown-icon" alt="dropdown" />
          </div>
          {isMichuDropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/manage-loan-application" className="dropdown-link">
                  Manage Loan Application
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="logOut">
        <button onClick={handleLogout} className="btnLogout">
          <img src={logout} className="logout-img" alt="Logout" /> Logout
        </button>
      </div>
      <div className="profile">
        <button className="btnProfile">
          <img src={profile} alt="User Avatar" className="userAvatar" />
          <div className="account">
            <p className="text">{userName}</p>
            <p className="number">{userEmail}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
