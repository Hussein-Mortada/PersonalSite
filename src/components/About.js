import React from 'react';
import '../styles/global.css';
import '../styles/App.css';
import '../styles/About.css';
import Logo from '../media/sait logo.png';

function About(){
    return (
        <div className='pageContainer'>
  <div className='AboutContainer' id='about'>
    <div className='section'>
      <div className='about-top-left'>
        <h1>About Me</h1>
        <p className='underline'></p>
      </div>
      <div className='about-center'>
        <h2 className='education'>Education</h2>
        <p>I have a background in Software Development and Business Administration</p>
        <p>I have taken course work in Data Structures, Algorithms, Operating Systems, Networking, Statistics, Project Management, etc.</p>
        <h2 className='education'>Achievements</h2>
        <p>4.0 GPA - Alexander Rutherford Scholarship - Jason Lang Scholarship - Phi Theta Kappa Honor Society - Honor Roll</p>
        <h2 className='why'>Why Hire Me</h2>
        <p>I am adaptable and eager to learn new technologies.  I like complex problems and solving them in unique ways.</p>
        <p>I always strive forward and see things to the end</p>
        <h2 className='contact'>Contact Me:</h2>
        <p>Please scroll to the bottom for contact details :)</p>
      </div>
      <div className='about-logo'>
        <img src={Logo} alt='Your Logo' width='250px'/>
      </div>
    </div>
  </div>
</div>
    );
}

export default About;