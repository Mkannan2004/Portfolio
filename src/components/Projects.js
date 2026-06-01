import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'AI Platform', category: 'Web App', image: 'https://via.placeholder.com/600x400' },
  { id: 2, title: 'E-Commerce', category: 'Mobile App', image: 'https://via.placeholder.com/600x400' },
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
              <span className="view-project-link">View Project</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;