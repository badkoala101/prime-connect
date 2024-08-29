import React, { useState, useEffect } from 'react';
import api from '../Api';
import Sidebar from '../components/Sidebar';
import show from '../assets/show.png';
import star from '../assets/star.png';
import starblue from '../assets/starblue.png';
import './Notification.css';

const Notification = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
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
        const sortedNotifications = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setNotifications(sortedNotifications);
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
      const response = await api.patch(`/notifications/${id}/favorite`, { favorite: !isFavorite }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        setNotifications(notifications.map(notification =>
          notification.id === id ? { ...notification, favorite: !isFavorite } : notification
        ));
      } else {
        throw new Error('Failed to update favorite status');
      }
    } catch (error) {
      setError('Error updating notification: ' + (error.response?.data?.message || error.message));
      console.error('Error updating notification:', error);
    }
  };

  const handleArchive = async (id, isArchived) => {
    try {
      const response = await api.patch(`/notifications/${id}/archive`, { archived: !isArchived }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        setNotifications(notifications.map(notification =>
          notification.id === id ? { ...notification, archived: !isArchived } : notification
        ));
      } else {
        throw new Error('Failed to update archive status');
      }
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
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      setError('Error deleting notification: ' + (error.response?.data?.message || error.message));
      console.error('Error deleting notification:', error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.patch(`/notifications/${id}/read`, { read: true }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setNotifications(notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      ));
    } catch (error) {
      setError('Error updating notification: ' + (error.response?.data?.message || error.message));
      console.error('Error updating notification:', error);
    }
  };

  // Filter notifications based on the active tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'Favorite') {
        return notification.favorite;
    } else if (activeTab === 'Archived') {
        return notification.archived;
    } else if (activeTab === 'All') {
        return !notification.archived; // Exclude archived notifications from the "All" tab
    }
    return true;
  });

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
              <button 
                className={`tab ${activeTab === 'All' ? 'active_notification' : ''}`} 
                onClick={() => setActiveTab('All')}
              >
                All
              </button>
              <button 
                className={`tab ${activeTab === 'Archived' ? 'active_notification' : ''}`} 
                onClick={() => setActiveTab('Archived')}
              >
                Archived
              </button>
              <button 
                className={`tab ${activeTab === 'Favorite' ? 'active_notification' : ''}`} 
                onClick={() => setActiveTab('Favorite')}
              >
                Favorite
              </button>
            </div>
            <div className="filter_notification">
              <input type="text" placeholder="Search by product" />
            </div>
            <div className='table'>
              <table>
                <tbody>
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => (
                      <tr key={notification.id}>
                        <td>
                          <img
                            src={notification.favorite ? starblue : star}
                            alt="star icon"
                            onClick={() => handleFavorite(notification.id, notification.favorite)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td 
                          onClick={() => markAsRead(notification.id)}
                          style={{ 
                            fontWeight: notification.read ? 'normal' : 'bold',
                            cursor: 'pointer' 
                          }}>
                          {notification.message} {!notification.read && <span style={{ color: 'red', marginLeft: '5px' }}>New</span>}
                        </td>
                        <td>
                          <button 
                            className="archive-button" 
                            onClick={() => handleArchive(notification.id, notification.archived)}
                          >
                            {notification.archived ? 'Remove from Archive' : 'Archive'}
                          </button>
                        </td>
                        <td>
                          <button className="delete-button" onClick={() => handleDelete(notification.id)} style={{ color: 'red' }}>
                            Delete
                          </button>
                        </td>
                        <td>
                          <span>{new Date(notification.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
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
