import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Agenda from './components/Agenda';
import './styles/App.css';
import './styles/agenda.css';

function App() {

  return (

      <div className='sections-container'>
      
      <Agenda />
      <Home className="section home-section" />
      <About className="section about-section" />
      <Skills className="section skills-section" />
      <Projects className="section projects-section" />
      <Contact className="section contact-section" />

      </div>

  );
}

export default App;
