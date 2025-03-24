import React from 'react';
import { Link } from 'react-router-dom';
import jobData from '../data/jobData.js';
import '../styles/OurWork.css';

const OurWork = () => {
    return (
        <div className="container fade">
            <div className="our-work">
                <p className="page-title">Some of the companies that we have brought our magic to</p>
                <div className="work-grid">
                    {jobData.map((job) => (
                        <div 
                            key={job.id} 
                            className="work-item"  
                        >
                            <div className="work-image">
                                <Link to={`/our-work/${job.company}`} style={{ backgroundImage: `url(${job.thumbnail})` }}>
                                </Link>
                            </div>
                            <div className="work-content">
                                <ul>
                                    <li><h2>{job.company}</h2></li>
                                    <li><p>{job.tag}</p></li>
                                    <p>
                                        {job.services.map((service, index) => (
                                        <span key={index}>
                                            {service}
                                            {index < job.services.length - 1 && <span className="separator"> | </span>}
                                        </span>
                                        ))}
                                    </p>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurWork;
