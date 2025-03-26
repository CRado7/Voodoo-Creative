import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import downArrow from "../assets/downArrow.svg";
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="container">
            <div className="services-hero">
                <div className="services-image"></div>
                <div className="services-hero-left">
                    <h1>It's not about <span className="bold">what</span> you do</h1>
                </div>
                <div className="services-hero-right">
                    <h1>It's about <span className="bold">how</span> you do it</h1>
                </div>
                <div className="down-arrow">
                    <a href="#service-content">
                        <img src={downArrow} alt="Down Arrow" />
                    </a>
                </div>
            </div>
            <div className="services-intro">
                <p>
                    Making a brand is so much more than just a logo.
                    It is a <span className="shine">feeling</span>, a <span className="shine">vibe</span>, a <span className="shine">culture</span>.
                    We put our hearts into everything we do so your brand can <span className="shine">shine</span>.
                    We eat, sleep, and breathe everything creative.
                    <br />
                </p>
                    <span className="color">We are Voodoo Creative.</span>

                <Link to="/contact">Let's get started</Link>
            </div>
            <div className="services-content fade" id="service-content">
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div className="services-card" key={service.id}>
                            <div className="services-card-title">
                                <h2>{service.title}</h2>
                            </div>
                            <div className="services-card-info">
                                <h2>{service.description}</h2>
                                <p>What we can help with:</p>
                                <ul>
                                    {service.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;