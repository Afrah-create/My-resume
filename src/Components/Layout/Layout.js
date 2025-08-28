// src/components/layout/Layout.js
import React from 'react';

const Layout = ({ children, sections, activeSection, onSectionChange }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Navigation Sidebar */}
      <nav style={{ width: '280px', backgroundColor: '#f8f9fa', padding: '20px' }}>
        <h3>Resume Sections</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sections.map((section) => (
            <li key={section.id} style={{ marginBottom: '10px' }}>
              <button
                style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  backgroundColor: activeSection === section.id ? '#007bff' : 'transparent',
                  color: activeSection === section.id ? 'white' : '#333',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;