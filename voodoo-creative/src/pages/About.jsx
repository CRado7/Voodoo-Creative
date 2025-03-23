import React, { useState } from 'react';
import teamData from '../data/teamData';
import Modal from '../components/Modal';
import '../styles/About.css';

const About = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState({});

    const handleOpenModal = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember({});
    }

    const handleImageClick = (member) => {
        handleOpenModal(member);
    }

    return (
        <div className="container">
            <div className={`sub-container ${showModal ? "modal-open" : ""}`}>
                <div className="intro-container">
                    <div className="intro">
                        <h1>About Us</h1>
                        <p>
                        Voodoo Creative was founded by Christopher Ferraro as a passion project when he moved from Colorado to Massachusetts. With a deep background in graphic design and extensive experience in both screen printing and commercial printing, Christopher was immersed in the world of art and branding from the very beginning.
                        <br /><br />
                        Inspired by a desire to expand his skill set, he ventured into web development while continuing his work as a freelance graphic designer. Combining his expertise in design with the technical side of web development, Voodoo Creative was born.
                        <br /><br />
                        At Voodoo Creative, we believe in creating compelling, innovative brands that captivate and connect. Whether you're looking to craft a new identity, rebrand, develop a responsive website, or launch a full marketing campaign, we bring creativity, passion, and precision to every project.
                        </p>
                    </div>
                    <div className="intro-picture">
                        <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="About Us" />
                    </div>
                </div>
                <div className="team-container">
                    <h1>Meet the Team</h1>
                    <div className="team-grid">
                        {teamData.map((member) => (
                            <div key={member.id} className="team-member" onClick={() => handleImageClick(member)}>
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} className="static-image" />
                                    <img src={member.hoverImage} alt={member.name} className="hover-image" />
                                    <h3>{member.title}</h3>
                                </div>
                                <div className="member-info">
                                    <h2>{member.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={showModal} onClose={handleCloseModal}>
                <div className="modal-image">
                    <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal-info">
                    <h2>{selectedMember.name}</h2>
                    <h3>{selectedMember.title}</h3>
                    <p>{selectedMember.description}</p>
                </div>
            </Modal>
        </div>
    );
}

export default About;