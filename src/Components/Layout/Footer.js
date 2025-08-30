import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          © {currentYear} Awongo Fahadi Rashid. All rights reserved.
        </div>
        <div className="footer-links">
          <a 
            href="https://github.com/Afrah-Create" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
