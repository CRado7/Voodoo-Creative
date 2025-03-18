import React from 'react';
import '../styles/Services.css';

const Services = () => {
    return (
        <div className="container">
            <div className="services-image">
                <div className="services-hero-left">
                    <h1>It's not about what you do</h1>
                </div>
                <div className="services-hero-right">
                    <h1>It's about how you do it</h1>
                </div>
            </div>
            <div className="services-content">
                <h1>What We Do</h1>
                <div className="services-grid">
                    <div className="services-item">
                        {/* flex grow? */}
                        <h2>Branding</h2>
                        <p>We create unique brand identities that resonate with your audience.</p>
                    </div>
                    <div className="services-item">
                        <h2>Web Design</h2>
                        <p>Our web designs are user-friendly and visually appealing.</p>
                    </div>
                    <div className="services-item">
                        <h2>Graphic Design</h2>
                        <p>We design stunning graphics that capture attention and convey your message.</p>
                    </div>
                    <div className="services-item">
                        <h2>Photography</h2>
                        <p>Our photography services capture the essence of your brand.</p>
                    </div>
                    <div className="services-item">
                        <h2>Video Production</h2>
                        <p>We create engaging videos that tell your brand's story.</p>
                    </div>
                    <div className="services-item">
                        <h2>Social Media Management</h2>
                        <p>We manage your social media presence to enhance your brand visibility.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;