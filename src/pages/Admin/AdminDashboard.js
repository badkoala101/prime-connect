import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api'; 
import AdminSidebar from './../../components/admin/AdminSidebar';
import showIcon from '../../assets/show.png'; 
import './AdminDashboard.css';
import manage from '../../assets/manage-users.png';
import view from '../../assets/view-user.png';
import grant from '../../assets/grant-access.png';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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
            <div className="admins-main-content">
                <h2 className="admins-head">Welcome to Your Admin Page</h2>
                <div className="admins-container">
                    The Admin Page of Prime Connect is your central hub for managing user access to the company's products. Here, you can easily oversee all user accounts, granting access to eligible users and ensuring they have the appropriate permissions. With just a few clicks, you can review detailed user information, make adjustments to their access levels, and ensure that only authorized individuals are utilizing the company's resources. This intuitive interface puts you in control, simplifying the process of managing and maintaining your user base.
                </div>
                <div className='admins-auth'>
                    <div>
                        <img src={manage} className="img-manage" alt="manage user" />
                        <p>Manage Users</p>
                    </div>
                    <div>
                        <img src={view} className="img-view" alt="view user" />
                        <p>View Users</p>
                    </div>
                    <div>
                        <img src={grant} className="img-grant" alt="grant user" />
                        <p>Grant Users Access</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default AdminDashboard;
