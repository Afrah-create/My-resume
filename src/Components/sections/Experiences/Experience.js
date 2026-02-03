import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Experience = ({ data }) => {
  const { experience } = data;
  
  // Function to calculate duration between two dates in years and months
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);
    
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth() + 1;
    months += end.getMonth() + 1;
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let duration = '';
    if (years > 0) {
      duration += `${years} ${years === 1 ? 'year' : 'years'}`;
    }
    if (remainingMonths > 0) {
      if (duration) duration += ' ';
      duration += `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
    
    return duration || 'Less than a month';
  };

  // Function to format date to Month YYYY format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    if (dateString.toLowerCase() === 'present') return 'Present';
    
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getInitials = (name = '') => {
    try {
      return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0]?.toUpperCase())
        .join('');
    } catch {
      return '';
    }
  };

  return (
    <section className="section">
      
      <div className="experience-container">
        <div className="experience-timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-period">
                <FontAwesomeIcon icon={faCalendarAlt} className="period-icon" />
                <span>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  <span className="duration"> • {calculateDuration(exp.startDate, exp.endDate)}</span>
                </span>
              </div>
              
              <div className="timeline-content">
                <div className="job-header">
                  <div className="company-logo">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} />
                    ) : (
                      <div className="company-logo--placeholder" aria-label={`${exp.company} logo placeholder`}>
                        {getInitials(exp.company)}
                      </div>
                    )}
                  </div>
                  <div className="job-titles">
                    <h3 className="timeline-title">{exp.title}</h3>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        {exp.company}
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" />
                      </a>
                    ) : (
                      <span className="company">{exp.company}</span>
                    )}
                  </div>
                </div>
                
                {exp.location && (
                  <div className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                    <span>{exp.location}</span>
                  </div>
                )}
                
                {exp.description && (
                  <p className="timeline-description">{exp.description}</p>
                )}
                
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>
                        <span className="bullet">▹</span>
                        <span className="responsibility-text">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="timeline-tags">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;