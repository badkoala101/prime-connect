import React, { useState } from 'react';
import './DebooFaq.css';


const DebooFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const debooFaqs = [
    {
      question: "What is the Deboo Crowdfunding system?",
      
      answers: [
        "The Deboo Crowdfunding System is a web-based platform offered by Cooperative Bank of Oromia. It enables individuals and organizations to create fundraising campaigns and receive contributions from a large number of people to support their projects, causes, or initiatives."
      ]
    },
    {
        question: "How can I donate to a campaign on the Deboo Crowdfunding System?",
        
        answers: [
          "To contribute to a campaign, browse through the available campaigns on the Deboo Crowdfunding System website. Select the campaign you wish to support and click on the 'Donate' or 'Back This Project' button. Follow the instructions to make your contribution securely."
        ]
    },
    {
        question: "How can I create an account on the Deboo Crowdfunding System?",
        
        answers: [
          "To create an account, visit the Deboo Crowdfunding System website and click on the 'Sign Up' or 'Register' button. Follow the registration process by providing your personal information, email address and/or phone number, and setting up a password. Once your account is created, you can start creating and managing campaigns."
        ]
    },
    {
        question: "What types of campaigns can I create on the Deboo Crowdfunding System?",
        
        answers: [
          "The Deboo Crowdfunding System supports various types of campaigns, including personal projects, creative endeavors, social causes, entrepreneurial ventures, community initiatives, and more. You can create campaigns to raise funds for a wide range of purposes."
        ]
    },
    {
        question: "How do I manage campaigns on the Deboo Crowdfunding Sysyem?",
        
        answers: [
          "Once your campaign is created, you can manage it through your account dashboard. You can track the progress of your campaign, update campaign information, communicate with donors, and access campaign analytics and reports to monitor its performance."
        ]
    },
    
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='deboofaq-main-container'>
        
        <div className="deboofaq-container">
            <h1>Frequently Asked Questions</h1>
            
            <div className="deboofaq-list">
                {debooFaqs.map((faq, index) => (
                <div className="deboofaq-item" key={index}>
                    <div className="deboofaq-question" onClick={() => toggleAnswer(index)}>
                    <span>{faq.question}</span>
                    <span className="deboofaq-toggle">{openIndex === index ? '-' : '+'}</span>
                    </div>
                    {openIndex === index && (
                    <div className="deboofaq-answer">
                        <p>{faq.description}</p>
                        <ul>
                        {faq.answers.map((answer, idx) => (
                            <li key={idx}>{answer}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                ))}
            </div>
            
        </div>
       
    </div>
    
  );
};

export default DebooFaq;