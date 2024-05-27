import React from 'react';
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

