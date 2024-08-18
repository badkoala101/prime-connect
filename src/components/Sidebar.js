import React, { useEffect, useState } from 'react';
import sun from '../assets/sun.png';
import back from '../assets/back.png';
import dashboard from '../assets/dashboard.jpg';
import product from '../assets/product.jpg';
import notification from '../assets/notification.jpg';
import verify from '../assets/verify.jpg';
import user from '../assets/user.png';
import setting from '../assets/setting.jpg';
import logout from '../assets/logout.png';
import profile from '../assets/profile-icon.png';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidebar({ isVisible, toggleSidebar }) {
  const [userName, setUserName] = useState('Name Name');
  const [userEmail, setUserEmail] = useState('example@email.com');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetch('http://localhost:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        setUserName(data.name || 'Name Name');
        setUserEmail(data.email || 'example@email.com');
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, []);

  const items = [
    { id: 1, label: 'Dashboard', link: '/dashboard', icon: dashboard },
    { id: 2, label: 'Products', link: '/Products', icon: product },
    { id: 3, label: 'Notification', link: '/notification', icon: notification },
    { id: 4, label: 'Verify ID', link: '/verifyid', icon: verify },
    { id: 5, label: 'Profile', link: '/profile', icon: user },
    { id: 6, label: 'Setting', link: '/setting', icon: setting },
  ];
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-header">
        <a className="title" href="/">
          Prime Connect
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
        {items.map((item) => (
          <li key={item.id} className="sidebar-list-item">
            <NavLink to={item.link} className="link" activeClassName="active">
              <img src={item.icon} className="icon" alt={item.label} />
              {item.label}
            </NavLink>
          </li>
        ))}
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

export default Sidebar;
