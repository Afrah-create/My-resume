// src/Components/sections/Contact/Contact.js
import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ data }) => {
  const { personal } = data;

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        <div className="contact-card card">
          <h3>Get in touch</h3>
          <p className="contact-lead">I’m open to internship and collaboration opportunities. Feel free to reach out.</p>

          <ul className="contact-list">
            <li>
              <a href={`mailto:${personal.email}`} className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{personal.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${personal.phone.replace(/\D/g, '')}`} className="contact-link">
                <FontAwesomeIcon icon={faPhone} />
                <span>{personal.phone}</span>
              </a>
            </li>
            <li className="contact-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{personal.location}</span>
            </li>
          </ul>

          <div className="contact-social">
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        <div className="contact-card card">
          <h3>Send a message</h3>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${personal.email}`; }}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can I help?" required />
            </div>
            <button className="btn btn--primary" type="submit">Email Me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
