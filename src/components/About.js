import React from 'react';
import '../css/about.css';

function About(){
    return (
  <div className='about-container' id='about'>
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
        <h2 className='why'>Goal</h2>
        <p> My goal is to expand my skill set and continue to grow as a software developer in time</p>
        <h2 className='contact'>Contact Me:</h2>
        <p>Please scroll to the bottom for contact details :)</p>
      </div>
  </div>
    );
}

export default About;