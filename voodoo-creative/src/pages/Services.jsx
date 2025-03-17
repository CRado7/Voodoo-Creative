import React from 'react';
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-image">
                <div className="services-hero-left">
                    <h1>It's not about what you do</h1>
                </div>
                <div className="services-hero-right">
                    <h1>It's about how you do it</h1>
                </div>
            </div>
            <div className="services-content">
                <h1>Services</h1>
                <p>Welcome to our services page!</p>
                <p>We offer a wide range of services to meet your needs.</p>
                <p>Our team is dedicated to providing the best service possible.</p>
            </div>
        </div>
    );
}

export default Services;