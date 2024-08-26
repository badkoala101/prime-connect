import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api'; 
import AdminSidebar from './../../components/admin/AdminSidebar';
import showIcon from '../../assets/show.png'; 
import './AdminDashboard.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        // Fetch users with authorization header
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('adminToken'); // Get the token from local storage
                const response = await api.get('/admin/users', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Add the token to the headers
                    }
                });
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('There was an error fetching the users!', error);
                setLoading(false);
            }
        };

        fetchUsers();
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

export default AdminDashboard;
