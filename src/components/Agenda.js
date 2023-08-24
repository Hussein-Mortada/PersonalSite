import React from 'react';
import '../styles/agenda.css';


function Agenda() {
    return (
        <div className='container'>
        <div className='agenda'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
        </div>
    );
}

export default Agenda;