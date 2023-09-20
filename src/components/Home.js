import React from "react";
import "../css/home.css";

function Home(){
    return (
        <div className="home-container" id="home">
            <h3 className="hello">Hello, I'm</h3>
            <h1 className="name">Hussein Mortada.</h1>
            <h1 className="title">Looking For Work</h1>
            <p className="small-desc">I am a software developer.  I work with Java, Python, JavaScript and others. I develop software or web applications.  Feel free to connect with me or 
            check out my projects! :) </p>
        </div>
    );
}

export default Home;
