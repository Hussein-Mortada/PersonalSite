import React from "react";
import "../css/socials.css";
import lilogo from "../media/linkedin.png"
import ghlogo from "../media/github.png"

function SocialMediaLinks() {
    return (
        <div className='social-icons'>
            <a href='https://github.com/Hussein-Mortada' target='_blank' rel='noopener noreferrer'>
            <img src={ghlogo} alt="github logo"></img>
            </a>
            <a href='https://www.linkedin.com/in/husseinmortada' target='_blank' rel='noopener noreferrer'>
                <img src={lilogo} alt="linkedin logo"></img>
            </a>
        </div>
    );
}

export default SocialMediaLinks;
