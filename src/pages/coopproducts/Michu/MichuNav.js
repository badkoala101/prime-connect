import React from 'react'
import Michuimg from '../../../assets/michu.png';
import { Link } from 'react-router-dom';

const MichuNav = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">
      <img src={Michuimg} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="nav-links nav-link">
        <li><Link to="/michu">Description</Link></li>
        <li><Link to="/apply-loan">Loan Application Form</Link></li>
        <li><Link to="/loandashboard">Loan Dashboard</Link></li>
        <li><Link to="/michu-loan">Loan Offer</Link></li>
      </ul>
      <div>
      <Link to="/Dashboard"><button className="getstartedbtn">GO Back</button></Link>
      </div>
    </nav>
    </div>
  )
}

export default MichuNav
