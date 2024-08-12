import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Abebe Kebede',
    message: 'This service has been amazing. It changed the way we manage our finances.',
  },
  {
    name: 'Abebe Kebede',
    message: 'A game-changer in our industry. The support has been top-notch.',
  },
  {
    name: 'Abebe Kebede',
    message: 'We have seen incredible growth since we started using this service.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const nextTestimonial = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimationClass('slide-in');
    }, 500);
  };

  const prevTestimonial = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setAnimationClass('slide-in');
    }, 500);
  };

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        <button className="arrow prev" onClick={prevTestimonial}>&lt;</button>
        <div className={`testimonial-card ${animationClass}`}>
          <p className="testimonial-message">"{testimonials[currentIndex].message}"</p>
          <p className="testimonial-name">— {testimonials[currentIndex].name}</p>
        </div>
        <button className="arrow next" onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;
