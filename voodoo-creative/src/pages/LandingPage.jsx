import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';

import mainLogo from '../assets/mainLogo.svg';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <img src={mainLogo} alt="Voodoo Creative" className="glitch" />
            {/* <div className="menu">
                <Link to="/our-work" className="glitch top-left menu-item" data-text="Our Work">Our Work</Link>
                <Link to="/about" className="glitch top-right menu-item" data-text="About">About</Link>
                <Link to="/services" className="glitch bottom-left menu-item" data-text="Services">Services</Link>
                <Link to="/contact" className="glitch bottom-right menu-item" data-text="Contact">Contact</Link>
            </div> */}
        </div>
    );
};

export default LandingPage;