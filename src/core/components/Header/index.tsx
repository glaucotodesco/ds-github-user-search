import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <div className="headear-container">
    <div className="header-title">
        <Link to="/" className="header-link">Bootcamp DevSuperior</Link> 
    </div>
  </div>
);

export default Header;

