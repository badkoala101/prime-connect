import React, { useState, useEffect } from 'react';
import api from '../../../Api'; // Replace with your API utility path
import './CheckBalance.css';
import { useNavigate } from 'react-router-dom';
import coopIcon from '../../../assets/coopayroll.png';

const BalanceQuery = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const [error, setError] = useState(null);

    const fetchBalance = async () => {
        setLoading(true); // Start loading when the fetch begins
        try {
            const response = await api.get('/balance', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.status === 200 && response.data && response.data.balance !== undefined) {
                setBalance(response.data.balance);
            } else {
                setError('Failed to fetch balance');
            }
        } catch (error) {
            setError('Error fetching balance: ' + (error.response?.data?.message || error.message));
            console.error('Error fetching balance:', error);
        } finally {
            setLoading(false); // Stop loading after the fetch completes
        }
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <div className="balance-query">
            <div className="header">
                <button className="back-button" onClick={() => navigate('/coopay')}>
                    &#8592; Back
                </button>
                <img src={coopIcon} alt="COOP Icon" className="coop-icon" />
            </div>

            <div className="balance-container">
                <div className="balance-circle">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : balance !== null ? (
                        <>
                            <h2>Your Bank Balance</h2>
                            <h3>${balance}</h3>
                        </>
                    ) : (
                        <p>Balance information is not available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BalanceQuery;
