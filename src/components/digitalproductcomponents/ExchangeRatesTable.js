import React from 'react';

const ExchangeRatesTable = () => {
  const rates = [
    { currency: 'USD - US Dollar', flag: 'https://flagcdn.com/w20/us.png', cashBuying: '103.0926', cashSelling: '113.4018', transBuying: '103.0926', transSelling: '113.4018' },
    { currency: 'GBP - Pound Sterling', flag: 'https://flagcdn.com/w20/gb.png', cashBuying: '127.8348', cashSelling: '140.6183', transBuying: '133.8584', transSelling: '147.2443' },
    { currency: 'EUR - Euro', flag: 'https://flagcdn.com/w20/eu.png', cashBuying: '111.3399', cashSelling: '122.4739', transBuying: '111.3399', transSelling: '122.4739' },
    { currency: 'AED - Arab Emirates Dirham', flag: 'https://flagcdn.com/w20/ae.png', cashBuying: '28.9933', cashSelling: '31.8926', transBuying: '28.9066', transSelling: '31.7973' },
    { currency: 'SAR - Saudi Riyal', flag: 'https://flagcdn.com/w20/sa.png', cashBuying: '28.4078', cashSelling: '31.2486', transBuying: '28.3228', transSelling: '31.1551' },
  ];

  return (
    <div className="exchange-rates-table">
      <h2>Today's Foreign Exchange Rates to ETB</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th colSpan="2">Cash</th>
            <th colSpan="2">Transaction</th>
          </tr>
          <tr>
            <th></th>
            <th>Buying</th>
            <th>Selling</th>
            <th>Buying</th>
            <th>Selling</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td>
                <img
                  src={rate.flag}
                  alt={`${rate.currency.split(' - ')[0]} flag`}
                  style={{ width: '22px', height: 'auto', marginRight: '10px' }} // Adjust the width here
                />
                {rate.currency}
              </td>
              <td>{rate.cashBuying}</td>
              <td>{rate.cashSelling}</td>
              <td>{rate.transBuying}</td>
              <td>{rate.transSelling}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRatesTable;
