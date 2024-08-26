import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SendMoney.css';
import coopIcon from '../../../assets/coopayroll.png';

const SendMoney = () => {
    const [recipientBank, setRecipientBank] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Send Money details:', { recipientBank, recipientAccount, amount, description });
    };

    return (
        <div className="send-money">
            <div className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    &#8592; Back
                </button>
                <img src={coopIcon} alt="COOP Icon" className="coop-icon" />
            </div>
            <h1>Send Money</h1>
            <form onSubmit={handleSubmit} className="send-money-form">
                <div className="form-group">
                    <label htmlFor="recipientBank">Recipient Bank</label>
                    <select
                        id="recipientBank"
                        value={recipientBank}
                        onChange={(e) => setRecipientBank(e.target.value)}
                        required
                    >
                        <option value="">Select a bank</option>
                        <option value="CBE">CBE</option>
                        <option value="Awash Bank">Awash Bank</option>
                        <option value="Abyssinia Bank">Abyssinia Bank</option>
                        <option value="Dashin Bank">Dashin Bank</option>
                        <option value="Hibret Bank">Hibret Bank</option>
                        <option value="Birhan Bank">Birhan Bank</option>
                        <option value="Oromia Bank">Oromia Bank</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="recipientAccount">Recipient Account Number</label>
                    <input
                        type="text"
                        id="recipientAccount"
                        value={recipientAccount}
                        onChange={(e) => setRecipientAccount(e.target.value)}
                        placeholder="Enter recipient's account number"
                        required
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
                        required
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
                    Send Money
                </button>
            </form>
        </div>
    );
};

export default SendMoney;
