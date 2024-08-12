import React from 'react';
import { Link } from 'react-router-dom';
import Michu from '../assets/michu.png';
import Coopayroll from '../assets/coopayroll.png';
import Deboo from '../assets/deboo.png';
import Diasporabanking from '../assets/diasporaBanking.jpg';
import Souqpass from '../assets/souqpass.jpg';
import icon from '../assets/primeconnectlogo.png';
import './Product.css';

const Product = () => {
    return (
      <div>
          <div className="products_logo">
              <img src={icon} alt="Logo" className="icon" />
              <a href="/">Prime Connect</a>
              <h1>Our Products</h1>
          </div>
          <div className="products_container">
              <div className="items">
                  <img src={Michu} alt="Michu" />
                  <h2>MICHU</h2>
                  <p>Michu is an AI powered digital lending solution that provides individuals and enterprises access credit through a groundbreaking and cutting-edge credit scoring system. Michu positions itself as a secured, fast, digitized means of applying for a loan with an easy repayment method.</p>
                  <div className="item-button">
                    <Link to="/signup"><button className='item-btn'>Explore</button></Link>
                  </div>
              </div>
              <div className="items">
                  <img src={Coopayroll} alt="Coopayroll" />
                  <h2>CooPayRoll</h2>
                  <p>Coopay-Ebirr is a financial ecosystem provided by Coopbank in partnership with Ebirr, a fintech company in Ethiopia.</p>
                  <div className="item-button">
                  <Link to="/signup"><button className='item-btn'>Explore</button></Link>
                  </div>
              </div>
              <div className="items">
                  <img src={Deboo} alt="Deboo" />
                  <h2>Deboo</h2>
                  <p>The Deboo Crowdfunding System is a web-based platform offered by Cooperative Bank of Oromia. It enables individuals and organizations to create fundraising campaigns and receive contributions from a large number of people to support their projects, causes, or initiatives.</p>
                  <div className="item-button">
                  <Link to="/signup"><button className='item-btn'>Explore</button></Link>
                  </div>
              </div>
              <div className="items">
                  <img src={Souqpass} alt="Souqpass" />
                  <h2>Souqpass</h2>
                  <p>Souqpass is one of the most convenient ways to accept online payments as it allows customers to complete their payment with a single click.</p>
                  <div className="item-button">
                  <Link to="/signup"><button className='item-btn'>Explore</button></Link>
                  </div>
              </div>
              <div className="items">
                  <img src={Diasporabanking} alt="Diaspora Banking" />
                  <h2>Diaspora Banking</h2> 
                  <p>Diaspora Banking Accounts allow Diasporas who reside and work outside the country to maintain and perform domestic and international transfers through their Coopbank Diaspora Accounts. Open an account or request a loan.</p>
                  <div className="item-button">
                  <Link to="/signup"><button className='item-btn'>Explore</button></Link>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Product;
