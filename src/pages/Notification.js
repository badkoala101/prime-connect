import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import show from '../assets/show.png';
import star from '../assets/star.png';
import starblue from '../assets/starblue.png';
import box from '../assets/export.png';
import './Notification.css';
import { Form } from 'react-router-dom';


function Products() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const originalRows = [
    { star: star, box: box, message: "We're pleased to inform you that...", time: "Just now" },
    { star: star, box: box, message: "We're pleased to inform you that...", time: "2 days ago" },
    { star: starblue, box: box, message: "We're pleased to inform you that...", time: "21 Jul, 2024" },
  ];

  const duplicatedRows = [];
  for (let i = 0; i < 3; i++) {
    duplicatedRows.push(...originalRows);
  }

  return (
    <div className="notifications-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' />
          </button>
        )}
        <div className='notifications-content'>
            <div className="content-box">
                <h3>List of Notification</h3>
                <div className="tabs">
                    <button className="tab active">All</button>
                    <button className="tab">Archived</button>
                    <button className="tab">Favorites</button>
                    
                </div>
                <div className="filter">
                    <input type="text" placeholder="Search by product" />
                    
                </div>
                <div className='table'>
                    <table>
                        <tbody>
                            {duplicatedRows.map((notification, index) => (
                            <tr key={index}>
                                <td><img src={notification.star} alt="star icon" /></td>
                                <td><img src={notification.box} alt="box icon" /></td>
                                <td>{notification.message}</td>
                                <td>{notification.time}</td>
                            </tr>
                            ))}
                            <tr>
                                <td><img src={ star } /></td>
                                <td><img src={ box } /></td>
                                <td>We're pleased to inform you that...</td>
                                <td>Just now</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Products;