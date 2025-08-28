// src/components/sections/Skills/Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faTools, faDatabase, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'programming languages':
      return <FontAwesomeIcon icon={faCode} className="category-icon" />;
    case 'web technologies':
      return <FontAwesomeIcon icon={faLaptopCode} className="category-icon" />;
    case 'tools & platforms':
      return <FontAwesomeIcon icon={faTools} className="category-icon" />;
    case 'databases':
      return <FontAwesomeIcon icon={faDatabase} className="category-icon" />;
    case 'languages':
      return <FontAwesomeIcon icon={faLanguage} className="category-icon" />;
    default:
      return <FontAwesomeIcon icon={faCode} className="category-icon" />;
  }
};

const Skills = ({ data }) => {
  const { skills } = data;
  
  return (
    <section className="section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="section-icon" />
        Skills & Expertise
      </h2>
      
      <div className="skills-container">
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>
                {getCategoryIcon(category)}
                {category}
              </h3>
              <div className="skill-list">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill.name || skill}
                    {skill.level && (
                      <div className="skill-level">
                        <div 
                          className="skill-level-bar" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;