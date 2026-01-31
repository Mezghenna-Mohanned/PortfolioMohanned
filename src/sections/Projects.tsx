import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Recent Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center space-x-3 px-8 py-4 glass-morphism rounded-lg font-orbitron font-bold hover-lift border border-white/10 hover:border-accent-gold/50 group transition-all"
        >
          <span className="group-hover:text-accent-gold transition-colors">VIEW ALL PROJECTS</span>
          <i className="fas fa-arrow-right text-accent-gold group-hover:translate-x-2 transition-transform"></i>
        </a>
      </div>
    </Section>
  );
};

export default Projects;