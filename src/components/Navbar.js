import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="minimal-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          KANNAN.
        </Link>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/skills" className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="contact-btn">Let's Talk</Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;