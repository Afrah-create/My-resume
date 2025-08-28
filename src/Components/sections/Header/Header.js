import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = ({ data }) => {
  const { personal } = data;
  
  return (
    <header className="header">
      <div className="header-content">
        <h1>{personal.name}</h1>
        <h2>{personal.title}</h2>
        <p className="summary">{personal.summary}</p>
        
        <div className="contact-info">
          <a href={`mailto:${personal.email}`} className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{personal.email}</span>
          </a>
          
          <a href={`tel:${personal.phone.replace(/\D/g, '')}`} className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>{personal.phone}</span>
          </a>
          
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{personal.location}</span>
          </div>
        </div>
        
        <div className="social-links">
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;