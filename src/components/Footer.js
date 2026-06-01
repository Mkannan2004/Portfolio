import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        
       
        <div className="footer-top">
          <h2 className="footer-title">Got an <span className="outline-text">idea?</span></h2>
          <a href="#contact" className="footer-cta-link">
            Let's build it together 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        
        <div className="footer-divider"></div>

       
        <div className="footer-bottom">
          <div className="footer-brand">
            <h3>KANNAN.</h3>
          </div>
          
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Kannan. All rights reserved.</p>
            <p className="footer-location">Crafted in Tamil Nadu, India</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;