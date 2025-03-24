import React from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../data/jobData';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
    const { company } = useParams();
    console.log(company);
    const project = jobData.find((job) => job.company === company);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container fade">
            <div className="case-type">
                <p>{project.caseType}</p>
                <h1>{project.company}</h1>
            </div>
            <div className="project-hero">
                <img src={project.image} alt={project.company} />
                <p>{project.tag}</p>
            </div>
            <div className="project-header">
                    <h1>{project.header.title}</h1>
                    <p>{project.header.intro}</p>
            </div>
            <div className="project-approach">
                <p className="project-item-title">{project.approach.title}</p>
                <p>{project.approach.description}</p>
            </div>
            <div className="project-design">
                <div className="project-design-info">
                    <p className="project-item-title">{project.design.title}</p>
                    <p>{project.design.description}</p> 
                </div>
                <img src={project.design.images} alt={project.company} />
            </div>
            <div className="project-identity">
                <p className="project-item-title">{project.identity.title}</p>
                <div className="project-identity-images">
                    {project.identity.images.map((image, index) => (
                        <div key={index} className="project-identity-image">
                            <img src={image.image} alt={project.company} />
                            <p>{image.caption}</p>
                        </div>
                    ))}
                </div>
                <div className="extra-images">
                    {project.extraImages.images.map((image, index) => (
                        <div key={index} className="extra-image">
                            <img src={image.image} alt={project.company} />
                            <p>{image.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;