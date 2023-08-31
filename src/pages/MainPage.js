import React from "react";
import NavBar from "../components/NavBar";
import SocialMediaLinks from "../components/Socials";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import "../css/mainpage.css";

function MainPage() {
    return (
        <div className="page-container">
            <div className="navbar-container">
                <NavBar />
            </div>
            <SocialMediaLinks />
            <Home />
            <About />
            <Experience/>
            <Projects />
            <Contact /> 
        </div>
    );
}
export default MainPage;