import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api'; // Assuming you have an axios instance named api
import AdminSidebar from './../../components/admin/AdminSidebar';
import showIcon from '../../assets/show.png'; // Show icon for sidebar toggle
import './ManageUsers.css';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        api.get('/admin/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
                setLoading(false);
            });
    }, []);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    if (loading) {
        return <div className="loading-indicator">Loading...</div>;
    }

    return (
        <div className={`admin-dashboard-container ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
            <button className={`show-sidebar-btn ${isSidebarVisible ? 'hidden' : ''}`} onClick={toggleSidebar}>
                <img src={showIcon} alt="Show Sidebar" />
            </button>
            <AdminSidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="admin-main-content">
                <h2 className="admin-heading">User Management</h2>
                <div className="admin-cube-container">
                    <Link to="/viewusers"><div className="admin-cube">
                        <p>View Users</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ManageUsers;
