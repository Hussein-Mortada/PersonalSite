import React from 'react';

import '../styles/App.css';
import '../styles/global.css';
import '../styles/contact.css';

function Contact() {
    return (
      <div className='pageContainer'>
        <div className='ContactContainer' id='contact'>
          <div className='section'>
          <div className='contact-top-left'>
                        <h1>Contact</h1>
                        <p className='underline'></p>
                    </div>
            <div className='contact-links'>
              <a href='mailto:hussein.mortada.sd@gmail.com'>hussein.mortada.sd@gmail.com</a>
              <a href='https://www.linkedin.com/in/husseinmortada' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-linkedin'></i>
                            &nbsp;&nbsp;&nbsp;Connect With Me!
                        </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;

