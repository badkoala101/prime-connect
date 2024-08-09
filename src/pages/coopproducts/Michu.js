import React, { useState } from 'react';
import LoanApplicationForm from '../../components/digitalproductcomponents/LoanApplication';
import Dashboard from '../../components/digitalproductcomponents/LoanDashboard';
import Michuimg from '../../assets/michu.png';
import './Michu.css';

const Michu = () => {
  const [currentView, setCurrentView] = useState('description');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="michu-container">
      <div className="michu-header">
      <img src={Michuimg} alt='MICHU' />
        <h1>Welcome to Michu</h1>
        <p>
          Michu is a cutting-edge digital lending platform providing fast and secure
          access to uncollateralized loans. Explore our services and manage your loans
          efficiently through our user-friendly dashboard.
        </p>
      </div>
      <div className="michu-nav">
        <button onClick={() => handleViewChange('description')}>Description</button>
        <button onClick={() => handleViewChange('loanApplication')}>Apply for Loan</button>
        <button onClick={() => handleViewChange('dashboard')}>Dashboard</button>
      </div>
      <div className="michu-content">
        {currentView === 'description' && (
          <div className="description">
            <p>
              Welcome to the Michu platform. Here you can apply for loans and view
              your loan status on the dashboard. Choose an option from the menu above
              to proceed.
            </p>
          </div>
        )}
        {currentView === 'loanApplication' && <LoanApplicationForm />}
        {currentView === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
};

export default Michu;
