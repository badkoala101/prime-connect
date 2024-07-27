import React from 'react';
import sun from '../assets/sun.png';
import back from '../assets/back.png';
import logout from '../assets/logout.png';
import Michu from '../assets/michu.png';
import Coopayroll from '../assets/coopayroll.png';
import Deboo from '../assets/deboo.png';
import Diasporabanking from '../assets/diasporaBanking.jpg';
import Souqpass from '../assets/souqpass.jpg';
import './Dashboard.css';

function Dashboard({ isVisible, toggleSidebar }) {
  return (
    <section className={`content ${isVisible ? '' : 'full-width'}`}>
    {!isVisible && (
      <button className="sidebar-show-button" onClick={toggleSidebar}>
        <img src={back} alt='Back' />
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
  </section>
  );
}

export default Dashboard;
