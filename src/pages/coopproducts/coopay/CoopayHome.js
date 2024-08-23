import React from 'react';
import './CoopayHome.css';
import balanceImage from '../../../assets/balance-query.png'; 
import actToActImage from '../../../assets/acc-acc.png'; 
import sendMoneyImage from '../../../assets/sendmoney.png'; 
import { useNavigate } from 'react-router-dom';

const CoopayHome = () => {
    const navigate=useNavigate();
    return (
        <div className="coopay-container">
            <h1>CooPay Services</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={balanceImage} alt="Bank Balance Query" />
                    <h2>Bank Balance Query</h2>
                    <button onClick={()=>navigate("/check-balance")}>Check Balance</button>
                </div>
                <div className="card">
                    <img src={actToActImage} alt="Account to Account" />
                    <h2>Act. to Act.</h2>
                    <button onClick={()=>navigate("/transfer-money")}>Transfer Now</button>
                </div>
                <div className="card">
                    <img src={sendMoneyImage} alt="Send Money" />
                    <h2>Send Money</h2>
                    <button onClick={()=>navigate("/send-money")}>Send Now</button>
                </div>
            </div>
        </div>
    );
};

export default CoopayHome;
