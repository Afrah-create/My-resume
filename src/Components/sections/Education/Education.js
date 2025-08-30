// src/components/sections/Education/Education.js
import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const Education = ({ data }) => {
  const { education } = data;

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
      <h2 className="section-title">
        <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
        Education
      </h2>
      
      <div className="education timeline">
        {education.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <article className="edu-card">
              <div className="edu-header">
                <div className="edu-logo">
                  {edu.logo ? (
                    <img src={edu.logo} alt={`${edu.school} logo`} />
                  ) : (
                    <div className="edu-logo--placeholder" aria-label={`${edu.school} logo placeholder`}>
                      {getInitials(edu.school)}
                    </div>
                  )}
                </div>
                <div className="edu-titles">
                  <h3 className="edu-degree">
                    {edu.degree}
                    {edu.gpa && (
                      <span className="gpa-badge">
                        <FontAwesomeIcon icon={faAward} /> {edu.gpa} GPA
                      </span>
                    )}
                  </h3>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-meta">
                    <span className="edu-date">
                      <FontAwesomeIcon icon={faCalendarAlt} /> {edu.startDate} - {edu.endDate || 'Present'}
                    </span>
                  </div>
                </div>
              </div>

              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <div className="courses">
                  <h4>Relevant Coursework</h4>
                  <div className="course-list">
                    {edu.relevantCourses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;