import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projets" subtitle="Réalisations récentes">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center space-x-2 px-6 py-3 glass-morphism rounded-lg font-semibold hover-lift"
        >
          <span>Voir tous les projets</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </Section>
  );
};

export default Projects;