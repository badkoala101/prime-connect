import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faBell, faIdCard, faUser, faCog, faSignOutAlt, faSun, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import profile from '../assets/images/profile-icon.png';
import './Sidebar.css';

function Sidebar({ isVisible, toggleSidebar }) {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-header">
        <a className='title' href='/'>Prime Connect</a>
        <div className="header-buttons">
          <button className="theme-toggle">&#9728;</button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
        </div>

      </div>
      <ul className="menu">
        <li><a className='dashboard' href='/'><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
        <li><a className='products' href='#'><FontAwesomeIcon icon={faBox} /> Products</a></li>
        <li><a className='notificationn' href='#'><FontAwesomeIcon icon={faBell} /> Notification</a></li>
        <li><a className='verifyId' href='#'><FontAwesomeIcon icon={faIdCard} /> Verify ID</a></li>
        <li><a className='profile' href='#'><FontAwesomeIcon icon={faUser} /> Profile</a></li>
        <li><a className='setting' href='#'><FontAwesomeIcon icon={faCog} /> Setting</a></li>
      </ul>
      <div className="logOut">
        <button className="btnLogout"><FontAwesomeIcon icon={faSignOutAlt} /> Log out</button>
      </div>
      <div className="profile">
        <button className="btnProfile"> <img src={profile} alt="User Avatar" className='userAvatar' /><div className='account'><p className='text'>Name Name </p> <p className='number'> +251-987-654-321 </p></div></button>
      </div>
    </div>
  );
}

export default Sidebar;
