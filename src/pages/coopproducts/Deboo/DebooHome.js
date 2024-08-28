import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DebooNav from './DebooNav';
import DebooFaq from './DebooFaq';
import Deboopic from '../../../assets/debopic.jpg';
import Deboopic2 from '../../../assets/debopic2.jpg';
import './DebooHome.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const toggleParagraph = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='deboo-main'>
            <DebooNav />
            <div className="deboo-container">
                <header className="deboo-header">
                    <h1>Welcome to Deboo Fund</h1>
                </header>
                
                <div className="deboo-content">
                    <div className='deboo-des-img'>
                        <div className="deboo-des">
                            <p>
                                The Deboo Crowdfunding System is a web-based platform offered by Cooperative Bank of Oromia. It enables individuals and organizations to create fundraising campaigns and receive contributions from a large number of people to support their projects, causes, or initiatives.
                            </p>
                            <p>
                                In today's world, where traditional funding avenues can often be restrictive or inaccessible, especially in developing regions, Deboo stands out as a game-changer. It democratizes the process of raising funds by allowing anyone with an idea or a need to tap into the collective generosity of a large number of people. The platform facilitates the creation of campaigns that are not only easy to set up but also highly customizable, allowing users to tell their stories in a compelling way that resonates with potential contributors.
                            </p>      
                        </div>
                        <div className="deboo-image">
                            <img src={Deboopic} alt="Deboo" />
                        </div>
                    </div>
                </div>

                <button onClick={toggleParagraph} className='deboo-show-Button'>
                    {isVisible ? 'Hide' : 'Show'} Detail
                </button>

                {isVisible && (
                    <div className='deboo-des-img'>
                    <div className='deboo-des'>               
                      <p>
                      One of the most significant aspects of the Deboo Crowdfunding System is its accessibility. The platform is designed to be user-friendly, with intuitive navigation and clear instructions that make it easy for even those with limited technical skills to create and manage a campaign. This accessibility is crucial, as it ensures that a wide range of people, from different walks of life, can utilize the platform to pursue their goals.
                      </p>
                    </div>
                    
                    <div className="deboo-des">
                    Moreover, Deboo is built on the foundation of community support and collaboration. By enabling individuals and organizations to reach out to a global audience, it helps foster a sense of connection and shared purpose. Contributors can choose to support causes that align with their values, knowing that their contributions, no matter how small, can make a significant impact. This collective effort is what makes crowdfunding such a powerful tool—it's not just about raising money; it's about building a community around a shared vision.
                    </div>
                  </div>
                )}
                {isVisible && (
                  <div className='deboo-des-img'>
                    <div className="deboo-image2">
                            <img src={Deboopic2} alt="Deboo2" />
                        </div>
                    <div className='deboo-des'>               
                      <p>
                      In a time where social and economic challenges are prevalent, platforms like Deboo are essential. They provide a means for people to come together and support one another in meaningful ways. Whether it's funding a local community project, supporting an entrepreneur with a promising startup, or helping a charitable organization continue its work, the Deboo Crowdfunding System enables people to make a difference.
                      </p>
                    </div>
                    
                    <div className="deboo-des">
                        
                        <p>
                        By offering this platform, the Cooperative Bank of Oromia is not only supporting financial inclusion but also encouraging innovation and entrepreneurship. It's a testament to the bank's commitment to empowering its customers and contributing to the socio-economic development of the region. With Deboo, the bank is providing a vital resource that has the potential to transform lives and communities, one campaign at a time.


                        </p>
                    </div>
                  </div>
                )}
    
            

                <div className="deboo-footer">
                    <button className="go-for-it-btn" onClick={() => navigate('/deboo-campaign')}>Go For It</button>
                </div>

                <h3 className="deboo-mission">
                    Bringing the dreamers' and innovators' vision to life and reaching out to people who require assistance from others in order to survive.
                </h3>

                <DebooFaq />
            </div>
        </div>
    );
};

export default HomePage;
