import React, { useState, useEffect } from 'react';
import AddressInfo from './AddressInfo';
import PersonalInfo from './PersonalInfo';
import usericon from '../../assets/user.png';
import Sidebar from '../../components/Sidebar';
import show from '../../assets/show.png';
import api from '../../Api'; 
import { useNavigate } from 'react-router-dom';
import './VerifyId.css'; 

const VerifyId = () => {
    const [page, setPage] = useState(1);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [showMessageBox, setShowMessageBox] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkIfBothFormsSubmitted = async () => {
            try {
                const response = await api.get('/user-info', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (response.data.personal_info && response.data.address_info) {
                    setShowMessageBox(true);
                } else if (response.data.personal_info) {
                    setPage(2);
                }
            } catch (error) {
                console.error('Error checking submission status:', error.response?.data?.message || error.message);
            }
        };

        checkIfBothFormsSubmitted();
    }, [navigate]);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleRedirect = () => {
        navigate('/Dashboard');
    };

    return (
        <div className='verifyid'>
            <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <h2 className='verifyid-title'>Identification Verification</h2>
            <div className="verifyid-content">
                {showMessageBox ? (
                    <div className="message-box">
                        <p>You have already submitted your information, You can now use products.</p>
                        <button onClick={handleRedirect}>Go to Dashboard</button>
                    </div>
                ) : (
                    <>
                        <div className="tab-menu">
                            {!isSidebarVisible && (
                                <button className="sidebar-show-button" onClick={toggleSidebar}>
                                    <img src={show} className='show' alt='Show Sidebar' />
                                </button>
                            )}

                            <div className="step">
                                <img className={page === 1 ? 'current' : 'form-filled'} src={usericon} alt='' />
                                <button className={page === 1 ? 'current' : 'form-filled'} onClick={() => setPage(1)}>Personal Info</button>
                            </div>

                            <div className="step">
                                <img className={page === 2 ? 'current' : ''} src={usericon} alt='' />
                                <button onClick={() => setPage(2)} className={page === 2 ? 'current' : ''}>Address Info</button>
                            </div>
                        </div>
                        {page === 1 ? <PersonalInfo onNext={() => handlePageChange(2)} /> : <AddressInfo />}
                    </>
                )}
            </div>
        </div>
    );
};

export default VerifyId;
