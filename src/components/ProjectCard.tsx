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
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${project.imageColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
      
      <div className="relative glass-morphism rounded-xl p-6 h-full hover-lift overflow-hidden border border-white/5 group-hover:border-accent-gold/30 transition-all duration-500">
        {/* Project number background */}
        <div className="absolute -top-8 -right-8 text-9xl font-orbitron font-black text-white/[0.02] group-hover:text-accent-gold/10 transition-colors duration-500">
          {project.id.toString().padStart(2, '0')}
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent-blue/20 flex items-center justify-center border border-accent-gold/20">
                <span className="font-orbitron text-sm font-bold gradient-text">
                  {project.id.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-gold/20 flex items-center justify-center transition-all border border-white/10 hover:border-accent-gold/50 group/icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-lg text-gray-400 group-hover/icon:text-accent-gold transition-colors"></i>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-blue/20 flex items-center justify-center transition-all border border-white/10 hover:border-accent-blue/50 group/icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt text-lg text-gray-400 group-hover/icon:text-accent-blue transition-colors"></i>
                </a>
              )}
            </div>
          </div>
          
          <h3 className="font-orbitron text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors tracking-wide">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-5 leading-relaxed font-rajdhani">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-space-mono bg-white/5 rounded-lg text-gray-300 border border-white/10 hover:border-accent-gold/50 hover:text-accent-gold transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent-gold/10 group-hover:border-accent-gold/30 transition-colors"></div>
      </div>
    </div>
  );
};

export default ProjectCard;