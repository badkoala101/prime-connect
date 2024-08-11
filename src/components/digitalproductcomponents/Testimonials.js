import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Coopbank's Diaspora Banking service has made it so easy for me to manage my finances back home while living abroad.",
      author: 'John Doe',
    },
    {
      quote: "The investment loan helped me expand my business in Ethiopia. The process was quick and hassle-free!",
      author: 'Jane Smith',
    },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>"{testimonial.quote}"</p>
          <p>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
