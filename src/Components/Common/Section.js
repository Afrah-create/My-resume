// src/components/common/Section.js
import React from 'react';
import './Section.css';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  showDivider = true 
}) => {
  return (
    <section className={`section ${className}`}>
      {title && (
        <div className="section__header">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
          {showDivider && <div className="section__divider"></div>}
        </div>
      )}
      <div className="section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;