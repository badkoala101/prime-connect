import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Model from '../../../assets/Model-Pic-for-michu.png';
import './Michu-Home.css';
import MichuNav from './MichuNav';
const MichuHome = () => {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="michu-container">
      <MichuNav/>
      <div className="michu-header">
        <h1>Welcome to Michu</h1>
      </div>
      <div className="michu-content">
        <div className="description-with-image">
          <div className="description">
            <p>
              Michu is a cutting-edge digital lending platform providing fast and secure access to uncollateralized loans. 
              Explore our services and manage your loans efficiently through our user-friendly dashboard.
            </p>
            <p>
              Michu Powered by Qena, Ethiopia’s first uncollateralized digital lending product launched in January 2022, introduces its product Micro loan brought to you by Cooperative Bank of Oromia.
              Michu is an AI-powered digital lending solution that provides individuals and enterprises access to credit through a groundbreaking and cutting-edge credit scoring system. 
              Michu positions itself as a secured, fast, and digitized means of applying for loans with an easy repayment method.
            </p>      
            </div>
          <div className="image">
            <img src={Model} alt='Michu' />
          </div>
        </div>

            <button onClick={toggleParagraph} className='show-Button'>
              {isVisible ? 'Hide' : 'Show'} Detail
            </button>
            {isVisible && (
              <div className='description-with-image'>
                <div className='description'>               
                  <p>
                    <h2>Why Michu ?</h2>
                    Financial sector in Ethiopia doesn’t have a relevant, appropriate, scalable, and digitized means of assessing the credit worthiness of MSMEs without some sort of guarantee. 
                    Micro, small, and medium enterprises (MSMEs) do not have sufficient collateral assets to unlock credit from banks. 
                    This is mainly attributed to&nbsp;lack of collateral, lack of appropriate technology, and difficulty connecting to the digital economy.
                  </p>
                </div>
                
                <div className="description">
                    <h1>Ease of Application Process</h1>
                    <p>
                      Coopbank's adoption of Michu has improved its ease of doing business by streamlining lending processes and removing geographical barriers. 
                      With standardized processes and accurate data, lending decisions can now be made more quickly and consistently.
                      Borrowers can initiate loan applications from anywhere, at any time, without the need for physical movement. 
                      By uploading the necessary documents online, the Michu platform can rapidly communicate loan decisions, further enhancing the ease and convenience of the process.
                    </p>
                </div>
              </div>
            )}
            {isVisible && (
              <div className='description-with-image'>
                <div className='description'>               
                  <p>
                    <h2>Short Loan Processing Period</h2>
                    This is another major differentiating factor between conventional lending and the Michu Loan. 
                    It could take weeks, sometimes even months, to process applications and disburse the required funds if the regular loan processing 
                    methods are followed in the current ban
                    king system in the country. On the other hand, digital lenders can process your application within a few minutes and the funds can 
                    reach your bank account within a second. This is highly ideal, especially when you want a quick loan to supplement your financial needs.
                  </p>
                </div>
                
                <div className="description">
                    <h1>Speedy Loan Analysis</h1>
                    <p>
                    Several pieces of data are consumed to appraise and process customer loan requests. 
                    However, for Michu, several digital data sources are used to inform credit decisions. 
                    These variables are assembled into computerized decision trees and substitute manual decision-making processes.
                    </p>
                </div>
              </div>
            )}

        <div className="michu-footer">
          <button className="get-into-it-button"  onClick={() => navigate('/apply-loan')}>Get into it</button>
        </div>
      </div>
    </div>
  );
};


export default MichuHome
