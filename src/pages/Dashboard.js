import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 
import Michu from '../assets/michu.png';
import Coopayroll from '../assets/coopayroll.png';
import Deboo from '../assets/deboo.png';
import Diasporabanking from '../assets/diasporaBanking.jpg';
import Souqpass from '../assets/souqpass.jpg';
import show from '../assets/show.png';
import './Dashboard.css';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className='dashboard-container'>
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} alt='show' className='show' />
          </button>
        )}
        <div className='content-placeholder'>
          {/* Placeholder for the main content area */}
          
            <Link to="/michu">

                <img src={Michu} alt='MICHU' />
              
            </Link>
            <Link to="/coopay">
              <img src={Coopayroll} alt='CooPayRoll' />
              </Link>
            
              <img src={Deboo} alt='Deboo' />
            
       
            <Link to="/souqpass">
              <img src={Souqpass} alt='Souqpass' />
            </Link>
            
            <Link to="/diaspora-banking">
              
                <img src={Diasporabanking} alt='Diaspora Banking' />
             
            </Link>
          
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
