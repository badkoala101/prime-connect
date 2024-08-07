import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import show from '../assets/show.png';
import './Products.css';
import toggle from '../assets/view-toggle.png'

function Products() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="Products-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
        {!isSidebarVisible && (
          <button className="sidebar-show-button" onClick={toggleSidebar}>
            <img src={show} className='show' />
          </button>
        )}
        <div className='products-content'>
          <div className="content-box">
            <h2>Products</h2>
            <div className="tabs">
              <button className="tab active">My Products</button>
              <button className="tab">Related Products</button>
              <button className="tab">All Products</button>
            </div>
            <div className="filter">
              <input type="text" placeholder="Filter my products" />
              <button className="view-button"><img src={toggle} alt='view-toggle' className='view-toggle'/> View</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Descriptions</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (_, i) => (
                  <tr key={i}>
                    <td>
                      <input type="checkbox" /> My Product {i + 1}
                    </td>
                    <td>Descriptions</td>
                    <td className={i % 2 === 0 ? 'active' : 'pending'}>
                      {i % 2 === 0 ? 'Active' : 'Pending'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <span>0 of 100 row(s) selected.</span>
              <span>Rows per page</span>
              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
              <span>Page 1 of 10</span>
              <div className="pagination-controls">
                <button>&lt;&lt;</button>
                <button>&lt;</button>
                <button>&gt;</button>
                <button>&gt;&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;