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
      <aside id="primary-sidebar" className={`sidebar ${open ? 'open' : ''}`} aria-label="Primary">
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
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="primary-sidebar"
            type="button"
            onClick={() => setOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpen((v) => !v);
              }
            }}
          >
            {open ? (
              <svg
                className="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                role="img"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            ) : (
              <svg
                className="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                role="img"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            )}
          </button>
          <h1 className="topbar-title">{sections.find(s => s.id === activeSection)?.label || 'About'}</h1>
        </header>

        <div className="content-inner">
          {children}
        </div>
      </main>
      {/* Overlay to close sidebar on mobile */}
      <div
        className={`sidebar-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
        onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
        tabIndex={-1}
        aria-hidden={!open}
      />
    </div>
  );
};

export default Layout;