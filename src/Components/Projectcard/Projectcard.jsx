import React from 'react';
import Project from '../Projects/Project';
import './Projectcard.css';
import amazon from '../../Images/amazon.jpg';
import joke from '../../Images/joke.jpg';
import weather from '../../Images/weather.jpg';
import Tic from '../../Images/Tic.jpg';


const projects = [
  {
    image: weather, 
    title: 'Weather App',
    description: 'A Weather web app built using React JS.',
    githubLink: 'https://github.com/Rohit-muni45/Weather-app',
    siteLink: 'https://weather-app-eta-two-51.vercel.app/',
  },
  {
    image: amazon,
    title: 'Amazon Clone',
    description: 'An Amazon clone built using HTML & CSS.',
    githubLink: 'https://github.com/Rohit-muni45/Amazon-clone',
    siteLink: 'https://amazon-clone-omega-weld.vercel.app/',
  },
  {
    image: Tic,
    title: 'Tic-Tac-Toe',
    description: 'A Tic-Tac-Toe game built using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/Rohit-muni45/Tic-tac-toe',
    siteLink: 'https://moviepage.w3spaces.com/',
  },
  {
    image: joke,
    title: 'Joke Generator',
    description: 'Built a joke generator using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/Rohit-muni45/Jokes-app',
    siteLink: 'https://jokes-app-alpha.vercel.app/',
  },
];

function Projects() {
  return ( 
    <>
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, item) => (
            <Project
              key={item}
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;
