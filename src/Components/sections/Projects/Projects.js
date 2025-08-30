// src/components/sections/Projects/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const Projects = ({ data }) => {
  const { projects } = data;
  
  const getInitials = (text = '') => {
    try {
      return text
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
        <FontAwesomeIcon icon={faCode} className="section-icon" />
        Projects
      </h2>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-thumb">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/600x300?text=Project+Image';
                    }}
                  />
                ) : (
                  <div className="project-thumb--placeholder" aria-label={`${project.title} placeholder`}>
                    {getInitials(project.title)}
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link btn-link"
                      aria-label="View on GitHub"
                    >
                      <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link btn-link primary"
                      aria-label="View Live Demo"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="project-link-icon" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;