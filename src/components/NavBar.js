import React from "react";
import Logo from   "../media/cat_3468377.png";
import "../css/navbar.css";
function NavBar(){
    return (
        <div className="nav-bar">
        <a href="https://www.freepik.com/">
        <img src={Logo} alt="Free Pik Logo"></img>
        </a>
            
            <ul className="nav-menu">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#experience"><li>Experience</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    );
}
export default NavBar;