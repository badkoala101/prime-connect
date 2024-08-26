import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Michu from '../assets/michu.png';
import Deboo from '../assets/deboo.png';
import Diasporabanking from '../assets/diasporaBanking.jpg';
import Souqpass from '../assets/souqpass.jpg';
import Coopayroll from '../assets/coopayroll.png';
import './Documentation.css'
const Documentation = () => {
  return (
    <div>
      <Navbar/>
      <div className='doc-container'>
        <h1>Prime Connect</h1>
        <p>Prime Connect is your one-stop site for accessing all your favorite coop products and services.  With Prime Connect, you can log in once and access everything you need, from online banking to customer support, without having to remember multiple usernames and passwords.  Prime Connect simplifies your experience, making it easier than ever to manage your account and stay connected with the company's products.</p>
      </div>
      <div className='doc-products'>
            <h2>Products</h2>
            <img src={Michu} alt="Michu" />
            <img src={Diasporabanking} alt="Michu" />
            <img src={Deboo} alt="Michu" />
            <img src={Souqpass} alt="Michu" />
            <img src={Coopayroll} alt="Michu" />
        </div>
      <Footer/>
    </div>
  )
}

export default Documentation
