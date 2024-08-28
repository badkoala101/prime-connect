import React, { useState } from 'react';
import AdminSidebar from './../../components/admin/AdminSidebar';
import showIcon from '../../assets/show.png'; 
import './AdminDashboard.css';
import manage from '../../assets/manage-users.png';
import view from '../../assets/view-user.png';
import grant from '../../assets/grant-access.png';
import UserCountChart from '../../components/admin/UserChart'; 
import LoanApplicationsChart from '../../components/admin/LoanApplicationsChart'; 

function AdminDashboard() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className={`admin-dashboard-container ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
            <button className={`show-sidebar-btn ${isSidebarVisible ? 'hidden' : ''}`} onClick={toggleSidebar}>
                <img src={showIcon} alt="Show Sidebar" />
            </button>
            <AdminSidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="admins-main-content">
                <h2 className="admins-head">Welcome to Your Admin Page</h2>
                <div className="admins-container">
                    The Admin Page of Prime Connect is your central hub for managing user access, viewing user statistics, and ensuring smooth operations.
                </div>
                
                <div className="admin-dashboard-charts">
                    <UserCountChart />
                    <LoanApplicationsChart />
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
