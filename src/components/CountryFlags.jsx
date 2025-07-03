import React from 'react';

const featuredCountries = [
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
  { name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
  { name: 'United States', flag: 'https://flagcdn.com/us.svg' },
  { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
  { name: 'UAE', flag: 'https://flagcdn.com/ae.svg' },
  { name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
  { name: 'Poland', flag: 'https://flagcdn.com/pl.svg' },
  { name: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
  { name: 'Oman', flag: 'https://flagcdn.com/om.svg' },
  { name: 'Croatia', flag: 'https://flagcdn.com/hr.svg' }
];

export default function CountryFlags() {
  return (
    <div className="flag-section">
      <h1 className="flag-title">Top Countries We Serve</h1>
      <div className="flag-container">
        {featuredCountries.map((country) => (
          <div key={country.name} className="flag-box">
            <img
              src={country.flag}
              alt={country.name}
              className="flag-img"
              title={country.name}
            />
            <p className="flag-name">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
