import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountTransfer.css';
import coopIcon from '../../../assets/coopayroll.png'; 

const AccountTransfer = () => {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Transfer details:', { fromAccount, toAccount, amount, description });
    };

    return (
        <div className="account-transfer">
            <div className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    &#8592; Back
                </button>
                <img src={coopIcon} alt="COOP Icon" className="coop-icon" />
            </div>
            <h1>Account to Account Transfer</h1>
            <form onSubmit={handleSubmit} className="transfer-form">
                <div className="form-group">
                    <label htmlFor="fromAccount">From Account</label>
                    <input
                        type="text"
                        id="fromAccount"
                        value={fromAccount}
                        onChange={(e) => setFromAccount(e.target.value)}
                        placeholder="Enter your account number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="toAccount">To Account</label>
                    <input
                        type="text"
                        id="toAccount"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                        placeholder="Enter the recipient's account number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description (optional)"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Transfer
                </button>
            </form>
        </div>
    );
};

export default AccountTransfer;
