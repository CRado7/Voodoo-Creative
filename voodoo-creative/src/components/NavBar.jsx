import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from '../assets/navLogo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><img src={NavLogo} alt="Voodoo Creative"/></li>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/our-work" className={({ isActive }) => (isActive ? 'active' : '')}>Our Work</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;