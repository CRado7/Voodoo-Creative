import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import jobData from '../data/jobData.js';
import downArrow from "../assets/downArrow.svg";
import "../styles/HomePage.css";

const industries = ["Medical Companies", "Cannabis Companies", "Law Enforcement Departments", "Sports Teams", "Manufacturing Industry"];

const HomePage = () => {
    const [currentIndustry, setCurrentIndustry] = useState(industries[0]);
    const [heroOpacity, setHeroOpacity] = useState(1);
    const scrollContainerRef = useRef(null);
    const featuredContainerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndustry((prev) => {
                const currentIndex = industries.indexOf(prev);
                return industries[(currentIndex + 1) % industries.length];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Scroll effect for the hero section
    useEffect(() => {
        const handleScroll = () => {

          const newOpacity = Math.max(1 - window.scrollY / 1000, 0.2);
          setHeroOpacity(newOpacity);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


        // Horizontal scroll effect
    //     useEffect(() => {
    //     const handleHorizontalScroll = () => {
    //         const scrollY = window.scrollY;
    //         const windowHeight = window.innerHeight;
    //         const horizontalSection = document.querySelector(".horizontal-scroll");
    //         const sectionTop = horizontalSection.offsetTop;
    //         const totalScroll = windowHeight * 1; // Adjust for smoothness
    
    //         // Calculate scroll progress (0 at start, 1 when fully scrolled)
    //         const progress = Math.max(0, Math.min((scrollY - sectionTop) / totalScroll, 1));
    
    //         // Move the horizontal-scroll section from right to left
    //         horizontalSection.style.transform = `translateX(${(1 - progress) * 100}vw)`;
    //     };
    
    //     window.addEventListener("scroll", handleHorizontalScroll);
        
    //     return () => {
    //         window.removeEventListener("scroll", handleHorizontalScroll);
    //     };
    // }, []);


    return (
        <div className="container">
            <div 
                className="home-hero"
                style={{ opacity: heroOpacity }}
                >
                <div className="home-hero-text">
                    <p>Here At Voodoo Creative</p>
                    <h1>We create <span className="bold">bold</span> brands 
                        <br />
                        with a dash of <span className="elegant">elegance</span>
                    </h1>
                </div>
                <div className="down-arrow">
                    <a href="#motto-container">
                        <img src={downArrow} alt="Down Arrow" />
                    </a>
                </div>
            </div>
            <div className="home-content" id="motto-container">
                <div className="motto-container">
                    <div className="motto-content">
                        <h4>Voodoo Creative</h4>
                        <h2>
                        We are a creative agency that specializes in web-development, branding, design, and marketing. 
                        <br /><br />
                        We combine these strengths to launch multi-channel marketing campaigns that drive real results.
                        </h2>
                    </div>
                    <div className="down-arrow">
                    <a href="#industries-container">
                        <img src={downArrow} alt="Down Arrow" />
                    </a>
                </div>
                </div>
                <div className="work-container">
                    <div className="industries-container" id="industries-container">
                        <h1>
                            We have worked with{' '}
                            <span className="fade-in-out">{currentIndustry}</span>
                        </h1>
                    </div>
                    <div className="featured-work">
                        {/* <h2>Featured Work</h2> */}
                        <div className="featured-work-grid">
                        {jobData.filter(job => job.featured).map((job) => (
                            <div key={job.id} className="featured-work-item">
                            <div className="featured-work-image">
                                <Link to={`/our-work/${job.company}`} style={{ backgroundImage: `url(${job.image})` }}>
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
                </div>
                <div className="contact">
                    <h1>Have a project in mind?</h1>
                    <button>Get in touch</button>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
    }

export default HomePage;