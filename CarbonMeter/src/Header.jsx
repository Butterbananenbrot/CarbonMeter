import React from 'react';
import thermometerIcon from '/src/assets/thermometer.svg';
import './Header.css';

const Header = ({ direction }) => {
  const isRtl = direction === 'rtl';

  return (
    <header dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'header-rtl' : 'header-ltr'}>
      <div className={`header-content ${isRtl ? 'header-content-rtl' : ''}`}>
        <img src={thermometerIcon} alt="Thermometer Icon" className="logo" />
        <h1>CarbonMeter</h1>
      </div>
      <nav>
        <ul>
          <li><a href="https://www.theguardian.com/environment/2024/apr/04/just-57-companies-linked-to-80-of-greenhouse-gas-emissions-since-2016"
                      >The Guardian</a></li>
          <li><a href="https://carbonmajors.org/">Carbon Majors</a></li>
          <li><a href="https://edgar.jrc.ec.europa.eu/">EDGAR</a></li>
          <li><a href="https://github.com/Butterbananenbrot/CarbonMeter">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;