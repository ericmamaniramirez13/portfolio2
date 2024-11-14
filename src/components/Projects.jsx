// Projects.js
import React from 'react';
//import './Projects.css';

const projects = [
  { title: 'Project 1', description: 'Description', link: '#' },
  { title: 'Project 2', description: 'Description', link: '#' },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
