import React from 'react';
import { Link } from 'react-router-dom';
import sun from '../assets/sun.png';
import back from '../assets/back.png';
import dashboard from '../assets/dashboard.jpg';
import product from '../assets/product.jpg';
import notification from '../assets/notification.jpg';
import verify from '../assets/verify.jpg';
import user from '../assets/user.png';
import setting from '../assets/setting.jpg';
import logout from '../assets/logout.png'
import profile from '../assets/profile-icon.png';
import './Sidebar.css';

function Sidebar({ isVisible, toggleSidebar }) {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar-header">
        <a className='title' href='/'>Prime Connect</a>
        <div className="header-buttons">
          <button className='nightmode'><img src={sun} className='sun' alt="sun" /></button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={back} className='back' alt="back" />
          </button>
        </div>

      </div>
      <ul className="menu">
        <li><Link to="/dashboard" className='dashboard'><img src={dashboard} className='dashboard' alt="Dashboard" /> Dashboard</Link></li>
        <li><Link to="/Products" className='product'><img src={product} className='product' alt="Product" /> Products</Link></li>
        <li><Link to="/notification" className='notificationn'><img src={notification} className='notification' alt="Notification" /> Notification</Link></li>
        <li><Link to="/verify-id" className='verifyId'><img src={verify} className='verify' alt="Verify ID" /> Verify ID</Link></li>
        <li><Link to="/profile" className='profile'><img src={user} className='user' alt="Profile" /> Profile</Link></li>
        <li><Link to="/setting" className='setting'><img src={setting} className='setting' alt="Setting" /> Setting</Link></li>
      </ul>
      <div className="logOut">
        <button className="btnLogout"><img src={logout} className='logout' /> Logout</button>
      </div>
      <div className="profile">
        <button className="btnProfile"> <img src={profile} alt="User Avatar" className='userAvatar' /><div className='account'><p className='text'>Name Name </p> <p className='number'> +251-987-654-321 </p></div></button>
      </div>
    </div>
  );
}

export default Sidebar;
