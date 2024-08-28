import React from 'react';
import { Link } from 'react-router-dom';
import './DebooNav.css';
import DebooLogo from '../../../assets/deboo.png';

const Navbar = () => {
    return (
        <nav className="deboo_navbar">
            <div className='back-to'>
            <Link to="/dashboard"><button className='deboo-back'>Go Back</button></Link>
            </div>
            
            <ul>
                <li><Link to="/deboo">Deboo</Link></li>
                <li><Link to="/deboo-campaign">Create Campaign</Link></li>
                <li><Link to="/deboo-contribute">Contribute</Link></li>
                <li><Link to="/deboo-dashboard">Dashboard</Link></li>
            </ul>
            <img className='deboo_img' src={DebooLogo} />
        </nav>
    );
};

export default Navbar;
