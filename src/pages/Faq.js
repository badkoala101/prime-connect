import React, { useState } from 'react';
import './Faq.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Am I eligible to have Gudunfa?",
      description: "Eligible customers of the Gudunfa Saving Mobilization Service are individuals that are involved in:",
      answers: [
        "Petty traders of various nature including “Gulit”:",
        "Semi-skilled works like a garage,Gomista, metal and woodwork...",
        "Smallholding farms: or",
        "Shoe shiners, car washers, porters, taxi assistants, street peddlers...",
        "Parents to teach their children about saving."
      ]
    },
    {
      question: "Can I debit a joint account separately?",
      answers: [
        "Joint accounts shall be maintained in the name of two or three individuals to jointly operate the account;",
        "Joint accounts can be “And Account” and “And/or Account”.",

      ]
    },
    {
      question: "What should I do if I lost my passbook, Cheque or CPO?",
      answers: [
        "Incase you lost your passbook, cheque, or CPO; please report to your branch as immediately as possible."
      ]
    },
    {
      question: "Can I open a saving account with zero balance?",
      answers: [
        "The minimum balance to open a domestic saving account is ETB 50.00. However, if you assure the bank that you will deposit at least the minimum amount within a month, it can be opened and maintained with zero balance for a month.",
      ]
    },
    {
        question: " What are the general eligibility requirements for credit?",
        description: "All applicants applying for any type of loan/facility must fulfill the following general eligibility criteria",
        answers: [
            "ID cards from Kebele, school or employment",
            "Valid passport",
            "Driving licence",
            "TIN card",
            "Pension ID"
          ]
    },
    {
        question: " What maximum percentage of the existing overdraft facility can be facilitated for a single overdrawal?",
        answers: [
            "Single overdrawal amount should not exceed 20% of the existing overdraft facility limit or ETB Ten Million."
          ]
    },
    {
        question: "What type of ID area acceptable for opening domestic deposit accounts?",
        answers: [
            "Any credit applicant needs to open either a checking or saving account at any one of the banks branches before applying for a loan",
            "Business credit applicants should present a renewed trade license or investment license and principal registration certificate for new projects.",
            "The applicant has to present all the documents/information demanded by the bank;",
            "The applicants business shall be financially viable, legally acceptable, socially desirable, technically feasible, and environmental-friendly;",
            "In addition to these criteria, customers have to fulfill the eligibility criteria set for each loan and advances indicated in the credit product line."
          ]
    },{
        question: "What type of ID area acceptable for opening domestic deposit accounts?",
        answers: [
            "ID cards from Kebele, school or employment",
            "Valid passport",
            "Driving licence",
            "TIN card",
            "Pension ID"
          ]
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq-main-container'>
        <Navbar/>
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <p>We're here to answer all your questions.</p>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                    <span>{faq.question}</span>
                    <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
                    </div>
                    {openIndex === index && (
                    <div className="faq-answer">
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
            <div className="faq-footer">
                <p>Got any more questions?</p>
                <button className="contact-button">Get in touch</button>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
};

export default Faq;