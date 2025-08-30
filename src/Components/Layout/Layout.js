// src/components/layout/Layout.js
import React, { useState } from 'react';
import './Layout.css';
import { resumeData } from '../../data/resumeData';

const Layout = ({ children, sections, activeSection, onSectionChange }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    onSectionChange(id);
    setOpen(false); // close sidebar on mobile after selection
  };

  return (
    <div className="layout">
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Primary">
        <div className="brand">
          <img
            className="brand-avatar"
            src={resumeData.personal.avatar}
            alt={`${resumeData.personal.name} avatar`}
            loading="lazy"
          />
          <span className="brand-name">My Resume</span>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavigate(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="topbar">
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>
          <h1 className="topbar-title">{sections.find(s => s.id === activeSection)?.label || 'About'}</h1>
        </header>

        <div className="content-inner">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;