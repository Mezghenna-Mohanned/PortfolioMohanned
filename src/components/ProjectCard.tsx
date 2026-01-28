import React from 'react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageColor: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500`}></div>
      <div className="relative glass-morphism rounded-xl p-6 h-full hover-lift overflow-hidden">
        {/* Project number */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-gray-800/20 to-transparent"></div>
        <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-800/30">
          {project.id}
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">P{project.id}</span>
            </div>
            
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-gray-400 hover:text-white transition-colors hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-gray-400 hover:text-white transition-colors hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt text-lg"></i>
                </a>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-5">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;