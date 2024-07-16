import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 
  return (
    <header className="header"> 
      <div className="logo">Muni</div>
      <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile' : ''}`}>
        
        <Link to="/" activeclassname="active" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" activeclassname="active" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/skills" activeclassname="active" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
        <Link to="/projects" activeclassname="active" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
        <Link to="/contact" activeclassname="active" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        
      </nav>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <div className="close-icon">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        ) : (
          <div className="hamburger-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )} 
      </div>
    </header>
  );
}

 export default Header;



