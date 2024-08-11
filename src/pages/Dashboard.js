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
    <div className='content-box_dashboard'>
      <div className="dashboard-container">
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <main className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
          {!isSidebarVisible && (
            <button className="sidebar-show-button" onClick={toggleSidebar}>
              <img src={show}  alt='show' className='show' />
            </button>
          )}
          <div className='content-placeholder'>
            {/* Placeholder for the main content area */}
            <div className='element-1'>
            <Link to="/michu">
  <button className='michu'>
    <img src={Michu} alt='MICHU' />
  </button>
</Link>
              <button className='coopayroll'><img src={Coopayroll} alt='CooPayRoll' /></button>
              <button className='deboo'><img src={Deboo} alt='Deboo' /></button>
            </div>
            <div className='element-2'>
              <button className='souqpass'><img src={Souqpass} alt='Souqpass' /></button>
              <Link to="/diaspora-banking"><button className='diasporaBanking'><img src={Diasporabanking} alt='Diaspora Banking' /></button></Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
