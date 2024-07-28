import React, { useState } from 'react';

import Sidebar from '../components/Sidebar'; 
import Michu from '../assets/michu.png';
import Coopayroll from '../assets/coopayroll.png';
import Deboo from '../assets/deboo.png';
import Diasporabanking from '../assets/diasporaBanking.jpg';
import Souqpass from '../assets/souqpass.jpg';
import show from '../assets/show.jpg';
import './Dashboard.css';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' />
          </button>
        )}
        <div className='content-placeholder'>
          {/* Placeholder for the main content area */}
          <div className='element-1'>
            <button className='michu'><img src={Michu} alt='MICHU' /></button>
            <button className='coopayroll'><img src={Coopayroll} alt='CooPayRoll' /></button>
            <button className='deboo'><img src={Deboo} alt='Deboo' /></button>
          </div>
          <div className='element-2'>
            <button className='souqpass'><img src={Souqpass} alt='Souqpass' /></button>
            <button className='diasporaBanking'><img src={Diasporabanking} alt='Diaspora Banking' /></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
