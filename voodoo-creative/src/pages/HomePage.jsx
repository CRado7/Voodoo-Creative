import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import jobData from '../data/jobData.js';
import "../styles/HomePage.css";

const industries = ["Medical industry", "Cannabis industry", "Law Enforcement industry", "Sports industry", "Manufacturing industry"];

const HomePage = () => {
    const [currentIndustry, setCurrentIndustry] = useState(industries[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndustry((prev) => {
                const currentIndex = industries.indexOf(prev);
                return industries[(currentIndex + 1) % industries.length];
            });
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container">
        <div className="home-hero">
            <div className="home-hero-text">
                <p>Here At Voodoo Creative</p>
                <h1>We create <span className="bold">bold</span> brands 
                    <br />
                    with a dash of <span className="elegant">elegance</span>
                </h1>
            </div>
        </div>
        <div className="home-content">
            <div className="motto-container">
                <div className="motto-content">
                    <p>Our Motto</p>
                    <h2>
                    Voodoo Creative is a creative agency that specializes in web development, branding, and design. 
                    <br /><br />
                    We launch multi-channel marketing campaigns that are designed to get results.
                    </h2>
                </div>
            </div>
            <div className="industries-container">
                <h2>
                    We have worked with companies in the{' '}
                    <br />
                    <span className="fade-in-out">{currentIndustry}</span>
                </h2>
            </div>
            <div className="featured-work">
                <h2>Featured Work</h2>
                <div className="featured-work-grid">
                {jobData.filter(job => job.featured).map((job) => (
                    <div key={job.id} className="featured-work-item">
                    <div className="featured-work-image">
                        <Link to={`/work/${job.company}`} style={{ backgroundImage: `url(${job.image})` }}>
                        </Link>
                    </div>
                    <div className="featured-work-content">
                        <h2>{job.company}</h2>
                        {/* <p>{job.tag}</p> */}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <button>Get in touch</button>
        </div>
        </div>
    );
    }

export default HomePage;