import React, { useEffect, useState } from 'react';
import Michuimg from '../../../assets/michu.png';
import './Michu-loan.css';
import { useNavigate } from 'react-router-dom';
import MichuNav from './MichuNav';
import api from '../../../Api';

const MichuLoan = () => {
    const [loanStatus, setLoanStatus] = useState(null);
    const [loanAmount, setLoanAmount] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLoanStatus = async () => {
            try {
                const response = await api.get('/loan-status', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, 
                    },
                });
                if (response.status === 200) {
                    const status = response.data.status;
                    setLoanStatus(status);

                    if (status === 'approved') {
                        setLoanAmount(response.data.amount);
                    }
                } else {
                    throw new Error('Failed to fetch loan status');
                }
            } catch (error) {
                setError('Error fetching loan status: ' + (error.response?.data?.message || error.message));
                console.error('Error fetching loan status:', error);
            }
        };

        fetchLoanStatus();
    }, []);

    const handlePopupClose = () => {
        navigate('/apply-loan'); 
    };

    return (
        <div>
            <MichuNav />
            <div className="michu-page-container">
                {loanStatus === 'approved' && loanAmount ? (
                    <div>
                        <div className="michu-page-header">
                            <h1>Your Loan Offer</h1>
                            <img src={Michuimg} alt="Michu Logo" className="michu-logo" />
                        </div>

                        <div className="offer-box">
                            <h2>You are offered</h2>
                            <p className="amount">{loanAmount} Br</p>
                        </div>

                        <h2 className="offer-detail-title">Offer Detail</h2>

                        <div className="detail-box">
                            <div className="detail-left">
                                <p>Access fee . 2%</p>
                                <p className="bold">{(loanAmount * 0.02).toFixed(2)} Br</p>
                            </div>
                            <div className="detail-right">
                                <p>Interest . 5%</p>
                                <p className="bold">{(loanAmount * 0.05).toFixed(2)} Br</p>
                            </div>
                        </div>

                        <div className="detail-box">
                            <div className="detail-left">
                                <p>Loan duration</p>
                                <p className="bold">1 month</p>
                            </div>
                            <div className="detail-right">
                                <p>Loan amount</p>
                                <p className="bold">{loanAmount} Br</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="loan-popup-message">
                        <div className="loan-popup-content">
                            <h2>No Loan Offers Available</h2>
                            <p>You have no loan offers available at this time.</p>
                            <button className="loan-popup-button" onClick={handlePopupClose}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MichuLoan;
