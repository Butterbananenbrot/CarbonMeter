import React from 'react';
import { Link } from 'react-router-dom';
import './LocalMenu.css';

const LocalMenu = ({ direction }) => {
  const isRtl = direction === 'rtl';

  return (
    <nav className={`local-menu ${isRtl ? 'local-menu-rtl' : 'local-menu-ltr'}`}>
      <ul>
        <li><Link to="/">Emissions</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default LocalMenu;
