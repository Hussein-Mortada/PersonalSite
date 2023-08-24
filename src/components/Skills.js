import React from 'react';
import '../styles/global.css';
import '../styles/App.css';
import '../styles/skills.css';

function Skills() {
    return (
        <div className='pageContainer'>
            <div className='SkillsContainer' id='skills'>
                <div className='section'>
                    <div className='skills-top-left'>
                        <h1>Skills</h1>
                        <p className='underline'></p>
                    </div>
                    <div className='skillBoxes'>
                        <div className='skillsection'>
                            <h2>Conceptual</h2>
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Statistics</li>
                                <li>Business Mathematics</li>
                            </ul>
                        </div>
                        <div className='skillsection'>
                            <h2>Database</h2>
                            <ul>
                                <li>Database Administration</li>
                                <li>SQL</li>
                                <li>PL/SQL</li>
                                <li>Oracle RDBMS</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className='skillsection'>
                            <h2>UI/UX</h2>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                        <div className='skillsection'>
                            <h2>Development</h2>
                            <ul>
                                <li>Front-End Development</li>
                                <li>Back-End Development</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>OOP (Object-Oriented Programming)</li>
                                <li>Spring Boot</li>
                                <li>REACT</li>
                            </ul>
                        </div>
                        <div className='skillsection'>
                            <h2>Other</h2>
                            <ul>
                                <li>System Architecture</li>
                                <li>Project Management</li>
                                <li>GitHub</li>
                                <li>AWS</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;