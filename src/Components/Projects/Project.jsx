import React from 'react';
import './Project.css';

function Project({ image, title, description, githubLink, siteLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3> 
        <p>{description}</p>
        <div className="project-links">
          <button className='btn'><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></button>
          <button className='btn'><a href={siteLink} target="_blank" rel="noopener noreferrer">Site</a></button> 
        </div> 
      </div>
    </div>
  );
}

export default Project;
