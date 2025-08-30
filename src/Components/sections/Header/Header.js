import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = ({ data }) => {
  const { personal } = data;
  
  return (
    <header className="header">
      <div className="about-layout">
        <div className="about-main">
          <div className="about-panel">
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
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}

                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
              </div>
            </div>

            <hr className="about-divider" />

            {/* About details */}
            <div className="about-extra">
              <div className="about-grid">
                <div className="about-bullets">
                  <h3 className="about-heading">About</h3>
                  <ul className="about-list">
                    <li>
                      <FontAwesomeIcon className="about-bullet-icon" icon={faCheckCircle} />
                      <span>Focused on building accessible, performant web apps with clean, maintainable code.</span>
                    </li>
                    <li>
                      <FontAwesomeIcon className="about-bullet-icon" icon={faCheckCircle} />
                      <span>Hands‑on with React, Node.js, REST APIs, and modern tooling.</span>
                    </li>
                    <li>
                      <FontAwesomeIcon className="about-bullet-icon" icon={faCheckCircle} />
                      <span>Strong communicator who enjoys collaborating across design and product.</span>
                    </li>
                    <li>
                      <FontAwesomeIcon className="about-bullet-icon" icon={faCheckCircle} />
                      <span>Always learning — currently exploring cloud services and testing best practices.</span>
                    </li>
                  </ul>
                </div>

                <div className="about-images">
                  {/* Replace src values with your actual images */}
                  <img src="/images/about/Fahad.jpg" alt="Working session or project highlight" />
                  <img src="/images/about/Afr2.webp" alt="Speaking, hackathon, or team collaboration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;