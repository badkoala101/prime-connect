import React, { useState, useEffect } from 'react';
import api from '../../../Api'; // Replace with your API utility path
import './CheckBalance.css';
import { Navigate, useNavigate } from 'react-router-dom';
import coopIcon from '../../../assets/coopayroll.png'; 


const BalanceQuery = () => {
    const navigate=useNavigate();
    const [balance, setBalance] = useState(89087);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         try {
    //             const response = await api.get('/balance', {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('user')}`,
    //                 }
    //             });
                // setBalance(10);
    //             setLoading(false);
    //         } catch (err) {
    //             setError(localStorage.getItem('token'));
    //             setLoading(false);
    //             console.log(err);
    //         }

    //     };

    //     fetchBalance();
    // }, []);
    const fetchBalance = async () => {
        try {
          const response = await api.get('/balance', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
          if (response.status === 200) {
            setBalance(response.data);
            setLoading(false);
          } else {
            throw new Error('Failed to fetch notifications');
            setLoading(false);

          }
        } catch (error) {
          setError('Error fetching : ' + (error.response?.data?.message || error.message));
          console.error('Error fetching :', error);
          setLoading(false);

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
                    {loading ? ( <p>Loading...</p>) : error ? (<p>{error}</p> ) : balance !== null ? (
                        <>
                            <h2>Your Bank Balance</h2>
                           <h3>${balance}</h3> 
                        </>)
                   : (
                        <p>Balance information is not available at the moment.</p>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default BalanceQuery;
