import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [membership, setMembership] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [countries, setCountries] = useState(0);
  const [agencies, setAgencies] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  const statsRef = useRef(null);

  const countUp = (start, end, setState, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setState(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasCounted) {
          countUp(0, 5000, setMembership);
          countUp(0, 10000000, setDeposit);
          countUp(0, 120, setCountries);
          countUp(0, 13, setAgencies);
          setHasCounted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasCounted]);

  return (
    <div className="stats-section" ref={statsRef}>
      <h2>Our Impact</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>{membership.toLocaleString()}+</h3>
          <p>Total Membership</p>
        </div>
        <div className="stat-item">
          <h3>{deposit.toLocaleString()}+</h3>
          <p>Deposit Amount</p>
        </div>
        <div className="stat-item">
          <h3>{countries.toLocaleString()}+</h3>
          <p>Countries Served</p>
        </div>
        <div className="stat-item">
          <h3>{agencies.toLocaleString()}+</h3>
          <p>Remittance Agencies</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
