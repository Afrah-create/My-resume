// src/components/sections/Education/Education.js
import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const Education = ({ data }) => {
  const { education } = data;
  
  return (
    <section className="section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
        Education
      </h2>
      
      <div className="education">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>
              {edu.degree}
              {edu.gpa && <span className="gpa">
                <FontAwesomeIcon icon={faAward} /> {edu.gpa} GPA
              </span>}
            </h3>
            
            <span className="school">{edu.school}</span>
            
            <div className="date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;