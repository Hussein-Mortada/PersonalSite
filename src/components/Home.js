import React from 'react';
import '../styles/global.css';
import '../styles/Home.css';
import '../styles/App.css';


function Home() {
    return (
        <div className='pageContainer'>
            <div className='HomeContainer'>
                <div className='section dark-bg'>
                    <div className='header'>
                        <h1 className='name'>
                            Hussein Mortada
                            <span className='underline'></span>
                        </h1>
                        <p className='subtitle'>Software Engineer</p>
                        <p className='subtitle'>Open to Work</p>
                    </div>
                    <div className='content'>
                        <p className='description'>
                            I am a Software Engineer with proficiency in Java, Python, JavaScript, etc.  I am proficient in front-end and backend development but prefer backend technologies.  I am eager to contribute my skills and passion for software development to a dynamic team and drive innovation in a collaborative environment.
                        </p>
                    </div>
                    <div className='social-icons'>
                        <a href='https://github.com/Hussein-Mortada' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/husseinmortada' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </div>
                    <div className='scroll-arrow'>
                        <p>Scroll Down</p>
                        <div className='arrow'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;