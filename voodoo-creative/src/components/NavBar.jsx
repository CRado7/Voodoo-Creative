import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/navLogo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><img src={NavLogo} alt="Voodoo Creative"/></li>
                <li><Link to="/about">About</Link></li>
                <li>|</li>
                <li><Link to="/services">Services</Link></li>
                <li>|</li>
                <li><Link to="/our-work">Our Work</Link></li>
                <li>|</li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;