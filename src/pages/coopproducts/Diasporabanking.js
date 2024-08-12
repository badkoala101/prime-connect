import React from 'react';
import { useNavigate } from 'react-router-dom';
import DiasporaDescription from '../../components/digitalproductcomponents/DiasporaDescription';
import ExchangeRatesTable from '../../components/digitalproductcomponents/ExchangeRatesTable';
import ServiceDetails from '../../components/digitalproductcomponents/ServiceDetails';
import CallToAction from '../../components/digitalproductcomponents/CallToAction';
import StatsSection from '../../components/digitalproductcomponents/StatsSection';
import Testimonials from '../../components/digitalproductcomponents/Testimonials';
import ContactForm from '../../components/digitalproductcomponents/ContactForm';
import './DiasporaBanking.css';


const DiasporaBanking = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="diaspora-banking">
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Dashboard
      </button>
      <h1>Diaspora Banking</h1>
      <DiasporaDescription />
      <ExchangeRatesTable />
      <ServiceDetails />
      <CallToAction />
      <StatsSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default DiasporaBanking;
