import React from 'react';
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
          <button className='nightmode'><img src={sun} className='sun' /></button>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={back} className='back' />
          </button>
        </div>

      </div>
      <ul className="menu">
        <li><a className='dashboard' href='/'><img src={dashboard} className='dashboard' /> Dashboard</a></li>
        <li><a className='products' href='#'> <img src={product} className='product' />Products</a></li>
        <li><a className='notificationn' href='#'><img src={notification} className='notification' /> Notification</a></li>
        <li><a className='verifyId' href='#'><img src={verify} className='verify' /> Verify ID</a></li>
        <li><a className='profile' href='#'><img src={user} className='user' /> Profile</a></li>
        <li><a className='setting' href='#'><img src={setting} className='setting' /> Setting</a></li>
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
