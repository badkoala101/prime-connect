import React from 'react';
import Michuimg from '../../../assets/michu.png';
import './Michu-loan.css';
import { Navigate, useNavigate } from 'react-router-dom';
import MichuNav from './MichuNav';

const MichuLoan = () => {
    const navigate = useNavigate();

  return (
   <div>
    <MichuNav/>
     <div className="michu-page-container">
      <div className="michu-page-header">
        <h1>Your Loan Offer</h1>
        <img src={Michuimg} alt="Michu Logo" className="michu-logo" />
      </div>

      <div className="offer-box">
        <h2>You are offered</h2>
        <p className="amount">67,090 Br</p>
        <input
          type="text"
          className="amount-input"
          placeholder="Enter a different amount"
        />
      </div>

      <h2 className="offer-detail-title">Offer Detail</h2>

      <div className="detail-box">
        <div className="detail-left">
          <p>Access fee . 2%</p>
          <p className="bold">1,341.80 Br</p>
        </div>
        <div className="detail-right">
          <p>Interest . 5%</p>
          <p className="bold">3,354.50 Br</p>
        </div>
      </div>

      <div className="detail-box">
        <div className="detail-left">
          <p>Loan duration</p>
          <p className="bold">1 month</p>
        </div>
        <div className="detail-right">
          <p>Loan amount</p>
          <p className="bold">67,090 Br</p>
        </div>
      </div>

      <div className="michu-page-buttons">
        <button className="reject-button" onClick={() => navigate('/apply-loan')}>Reject</button>
        <button className="next-button" onClick={() => navigate('/apply-loan')}>Next</button>
      </div>
    </div>
   </div>
  );
};

export default MichuLoan;
