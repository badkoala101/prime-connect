import React, { useState, useEffect } from 'react';
import api from '../Api';
import Sidebar from '../components/Sidebar';
import show from '../assets/show.png';
import star from '../assets/star.png';
import starblue from '../assets/starblue.png';
import box from '../assets/export.png';
import './Notification.css';

const Notification = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const fetchNotifications = async () => {
    try {
      const response = await api.get('/notifications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 200) {
        setNotifications(response.data);
      } else {
        throw new Error('Failed to fetch notifications');
      }
    } catch (error) {
      setError('Error fetching notifications: ' + (error.response?.data?.message || error.message));
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleFavorite = async (id, isFavorite) => {
    try {
      await api.patch(`/notifications/${id}/favorite`, { favorite: !isFavorite }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Update local state to reflect the change
      setNotifications(notifications.map(notification =>
        notification.id === id ? { ...notification, favorite: !isFavorite } : notification
      ));
    } catch (error) {
      setError('Error updating notification: ' + (error.response?.data?.message || error.message));
      console.error('Error updating notification:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/notifications/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Remove the notification from local state
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      setError('Error deleting notification: ' + (error.response?.data?.message || error.message));
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <div className="notifications-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={isSidebarVisible ? 'main-content' : 'main-content full-width'}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' alt="Show Sidebar" />
          </button>
        )}
        <div className='notifications-content'>
          <div className="content-box_notification">
            <h3>List of Notifications</h3>
            <div className="tabs_notification">
              <button className='tab active_notification'>All</button>
              <button className='tab_notification'>Archived</button>
              <button className='tab_notification'>Favorite</button>
            </div>
            <div className="filter_notification">
              <input type="text" placeholder="Search by product" />
            </div>
            <div className='table'>
              <table>
                <tbody>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <tr key={notification.id}>
                        <td>
                          <img
                            src={notification.favorite ? starblue : star}
                            alt="star icon"
                            onClick={() => handleFavorite(notification.id, notification.favorite)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td><img src={notification.box || box} alt="box icon" /></td>
                        <td style={{ color: notification.favorite ? 'blue' : 'black' }}>
                          {notification.message}
                        </td>
                        <td>{notification.time}</td>
                        <td>
                          <button onClick={() => handleDelete(notification.id)} style={{ color: 'red' }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No notifications found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notification;
