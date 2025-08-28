// src/App.js
import React, { useState } from 'react';
import Layout from './Components/Layout/Layout';  // Capital C
import Header from './Components/sections/Header/Header';
import Education from './Components/sections/Education/Education';
import Experience from './Components/sections/Experiences/Experience'; // Note: folder is "Experiences"
import Projects from './Components/sections/Projects/Projects';
import Skills from './Components/sections/Skills/Skills';
import { resumeData } from './data/resumeData';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('header');

  const sections = [
    { id: 'header', label: 'About', component: Header },
    { id: 'education', label: 'Education', component: Education },
    { id: 'experience', label: 'Experience', component: Experience },
    { id: 'projects', label: 'Projects', component: Projects },
    { id: 'skills', label: 'Skills', component: Skills }
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || Header;

  return (
    <div className="App">
      <Layout 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      >
        <ActiveComponent data={resumeData} />
      </Layout>
    </div>
  );
}

export default App;