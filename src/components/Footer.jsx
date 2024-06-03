// src/Footer.js
import React from 'react';
import footerImage from '../foot.png';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer footer-dark">
      <div className="d-flex justify-content-between px-5">
        <div className="footer-content">THIS APP USED FOR THE SHOPPING</div>
          <img
            src={footerImage}
            alt="logo"
            className="footer-img"
          />
      </div>
    </footer>
  );
};

export default Footer;
