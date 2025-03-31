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
                        <h1>
                            <span className="slide-left">We don't design brands</span>
                            <br />
                            <span className="slide-right">We empower them</span>
                        </h1>
                    </div>
                </div>
                <div className="team-container fade">
                    <h1>Meet the founder</h1>
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