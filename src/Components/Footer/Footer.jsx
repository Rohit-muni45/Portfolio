import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className='footer-container'>
      </div>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Muni. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/Rohit-muni45/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com/munineelam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/muni-neelam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/muni_neelam" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
