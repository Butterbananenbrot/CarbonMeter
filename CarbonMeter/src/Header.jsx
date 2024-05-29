import React from 'react';
import { Link } from 'react-router-dom';
import thermometerIcon from '/src/assets/thermometer.svg';

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
          <li><Link to="/">Emissions</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




/*
import React from 'react';
import { Link } from 'react-router-dom';
import thermometerIcon from '/src/assets/thermometer.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <img src={thermometerIcon} alt="Thermometer Icon" className="logo" />
        CarbonMeter
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Emissions</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

*/
