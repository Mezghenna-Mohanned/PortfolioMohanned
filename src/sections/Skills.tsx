import React from 'react';
import Section from '../components/Section';

const Skills: React.FC = () => {
  // Define all technologies with their connections (neural network nodes)
  const technologies = [
    // MAIN NODES - Closer together and closer to center
    { name: 'Python', image: '/images/python.png', x: 45, y: 45, size: 'large', layer: 'core' },      // Index 0
    { name: 'JavaScript', image: '/images/javascript.png', x: 55, y: 45, size: 'large', layer: 'core' }, // Index 1
    { name: 'Database', image: '/images/database.png', x: 50, y: 35, size: 'large', layer: 'core' },  // Index 2
    
    // PYTHON ECOSYSTEM (LEFT SIDE) - Connected to Python
    { name: 'TensorFlow', image: '/images/tensorflow.png', x: 20, y: 20, size: 'medium', layer: 'left' },    // Index 3
    { name: 'PyTorch', image: '/images/pytorch.png', x: 15, y: 35, size: 'medium', layer: 'left' },           // Index 4
    { name: 'Matplotlib', image: '/images/matplotlib.png', x: 20, y: 50, size: 'medium', layer: 'left' },    // Index 5
    { name: 'Flask', image: '/images/Flask.png', x: 15, y: 65, size: 'medium', layer: 'left' },               // Index 6
    { name: 'Pandas', image: '/images/pandas.png', x: 25, y: 75, size: 'medium', layer: 'left' },            // Index 7
    { name: 'Sklearn', image: '/images/sklearn.jpg', x: 10, y: 55, size: 'medium', layer: 'left' },           // Index 8
    { name: 'Jupyter', image: '/images/jupyter.png', x: 25, y: 30, size: 'medium', layer: 'left' },          // Index 9
    
    // JAVASCRIPT ECOSYSTEM (RIGHT SIDE) - Connected to JavaScript
    { name: 'TypeScript', image: '/images/Typescript.png', x: 80, y: 30, size: 'medium', layer: 'right' },   // Index 10
    { name: 'HTML', image: '/images/HTML.png', x: 85, y: 50, size: 'medium', layer: 'right' },               // Index 11
    { name: 'CSS', image: '/images/CSS.png', x: 80, y: 70, size: 'medium', layer: 'right' },                 // Index 12
    
    // DATABASE ECOSYSTEM (TOP) - Connected to Database node
    { name: 'SQL', image: '/images/sql.png', x: 40, y: 10, size: 'medium', layer: 'top' },                    // Index 13
    { name: 'PostgreSQL', image: '/images/postgresql.png', x: 50, y: 8, size: 'medium', layer: 'top' },      // Index 14
    { name: 'MongoDB', image: '/images/mongodb.png', x: 60, y: 10, size: 'medium', layer: 'top' },            // Index 15
    
    // BOTTOM NODES (LONELY) - No connections to main nodes
    { name: 'C', image: '/images/C.png', x: 35, y: 85, size: 'medium', layer: 'bottom' },                    // Index 16
    { name: 'C++', image: '/images/CPP.png', x: 50, y: 85, size: 'medium', layer: 'bottom' },                // Index 17
    { name: 'Git', image: '/images/git.png', x: 65, y: 85, size: 'medium', layer: 'bottom' },                // Index 18
  ];

  // Define connections between nodes (neural network synapses)
  // Only connections between main nodes and from main nodes to their ecosystems
  const connections = [
    // PYTHON CONNECTIONS (Index 0) - To left side technologies
    { from: 0, to: 3, strength: 'strong' },  // Python -> TensorFlow
    { from: 0, to: 4, strength: 'strong' },  // Python -> PyTorch
    { from: 0, to: 5, strength: 'strong' },  // Python -> Matplotlib
    { from: 0, to: 6, strength: 'strong' },  // Python -> Flask
    { from: 0, to: 7, strength: 'strong' },  // Python -> Pandas
    { from: 0, to: 8, strength: 'strong' },  // Python -> Sklearn
    { from: 0, to: 9, strength: 'strong' },  // Python -> Jupyter
    
    // JAVASCRIPT CONNECTIONS (Index 1) - To right side technologies
    { from: 1, to: 10, strength: 'strong' }, // JavaScript -> TypeScript
    { from: 1, to: 11, strength: 'strong' }, // JavaScript -> HTML
    { from: 1, to: 12, strength: 'strong' }, // JavaScript -> CSS
    
    // DATABASE CONNECTIONS (Index 2) - To top technologies
    { from: 2, to: 13, strength: 'strong' }, // Database -> SQL
    { from: 2, to: 14, strength: 'strong' }, // Database -> PostgreSQL
    { from: 2, to: 15, strength: 'strong' }, // Database -> MongoDB
    
    // MAIN NODE CONNECTIONS ONLY (Triangle formation)
    { from: 0, to: 1, strength: 'strong' },  // Python <-> JavaScript
    { from: 0, to: 2, strength: 'strong' },  // Python <-> Database
    { from: 1, to: 2, strength: 'strong' },  // JavaScript <-> Database
    
    // BOTTOM LONELY NODES - Only connected to each other (keeping these as requested)
    { from: 16, to: 17, strength: 'medium' }, // C <-> C++
    { from: 17, to: 18, strength: 'medium' }, // C++ <-> Git
    { from: 16, to: 18, strength: 'weak' },   // C <-> Git
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large': return 'w-16 h-16 md:w-20 md:h-20 border-2'; // Reduced from w-20/w-24
      case 'medium': return 'w-12 h-12 md:w-16 md:h-16 border-2'; // Reduced from w-16/w-20
      case 'small': return 'w-10 h-10 md:w-14 md:h-14 border-2'; // Reduced from w-12/w-16
      default: return 'w-12 h-12 md:w-16 md:h-16 border-2';
    }
  };

  const getConnectionOpacity = (strength: string) => {
    switch(strength) {
      case 'strong': return 'opacity-60';
      case 'medium': return 'opacity-40';
      case 'weak': return 'opacity-20';
      default: return 'opacity-30';
    }
  };

  return (
    <Section id="skills" title="Skills" subtitle="Technical Expertise">
      {/* Section Description */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-300 font-rajdhani">
          My technical expertise spans across multiple domains, forming an interconnected neural network of skills.
          Each technology strengthens and complements the others, enabling me to build comprehensive solutions.
        </p>
      </div>

      {/* Neural Network Visualization */}
      <div className="relative w-full max-w-6xl mx-auto" style={{ minHeight: '700px' }}>
        {/* SVG for connection lines */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ minHeight: '700px' }}
        >
          <defs>
            {/* Gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.5 }} />
              <stop offset="50%" style={{ stopColor: '#22d3ee', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.5 }} />
            </linearGradient>
            
            {/* Animated gradient */}
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.8 }}>
                <animate attributeName="stop-color" 
                  values="#f97316; #22d3ee; #f97316" 
                  dur="4s" 
                  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0.8 }}>
                <animate attributeName="stop-color" 
                  values="#22d3ee; #f97316; #22d3ee" 
                  dur="4s" 
                  repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Draw all connections */}
          {connections.map((conn, index) => {
            const fromTech = technologies[conn.from];
            const toTech = technologies[conn.to];
            
            return (
              <g key={index}>
                {/* Background glow */}
                <line
                  x1={`${fromTech.x}%`}
                  y1={`${fromTech.y}%`}
                  x2={`${toTech.x}%`}
                  y2={`${toTech.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  className={`${getConnectionOpacity(conn.strength)} blur-sm`}
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(249, 115, 22, 0.4))'
                  }}
                />
                
                {/* Main line */}
                <line
                  x1={`${fromTech.x}%`}
                  y1={`${fromTech.y}%`}
                  x2={`${toTech.x}%`}
                  y2={`${toTech.y}%`}
                  stroke="url(#animatedGradient)"
                  strokeWidth="2"
                  className={getConnectionOpacity(conn.strength)}
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="10"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
                
                {/* Animated pulse */}
                <circle r="3" fill="#f97316" className={getConnectionOpacity(conn.strength)}>
                  <animateMotion
                    dur={`${3 + index * 0.2}s`}
                    repeatCount="indefinite"
                    path={`M ${fromTech.x},${fromTech.y} L ${toTech.x},${toTech.y}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Technology Nodes */}
        <div className="relative z-10" style={{ minHeight: '700px' }}>
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
              }}
            >
              {/* Outer glow ring - pulsing */}
              <div 
                className={`absolute inset-0 ${getSizeClasses(tech.size)} rounded-2xl bg-gradient-to-br from-orange-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow`}
                style={{ 
                  transform: 'scale(1.3)', // Reduced from 1.5
                  animationDelay: `${index * 0.2}s`
                }}
              ></div>
              
              {/* Main node container - smaller boxes */}
              <div
                className={`
                  relative ${getSizeClasses(tech.size)} 
                  rounded-xl backdrop-blur-xl  // Changed from rounded-2xl to rounded-xl
                  border-orange-500/40 
                  p-1.5 md:p-2.5  // Reduced padding
                  transition-all duration-500
                  hover:scale-110 hover:border-orange-500
                  animate-float
                `}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  boxShadow: '0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(34, 211, 238, 0.2), inset 0 0 10px rgba(249, 115, 22, 0.1)', // Reduced glow
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: `${4 + index * 0.2}s`,
                }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-cyan-500/10"></div>
                
                {/* Tech logo */}
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))', // Reduced glow
                  }}
                />
                
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl border-2 border-orange-500/50 animate-spin-slow"></div>
                </div>
              </div>
              
              {/* Label */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <div className="px-2 py-0.5 rounded-lg bg-black/90 backdrop-blur-xl border border-orange-500/30 whitespace-nowrap">
                  <span className="text-xs font-bold text-orange-400 font-space-mono">{tech.name}</span>
                </div>
              </div>
              
              {/* Neural pulse effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-xl border-2 border-orange-500 animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Categories Legend */}
      <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative glass-morphism rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center border border-orange-500/30">
                <i className="fas fa-brain text-orange-400"></i>
              </div>
              <h4 className="font-orbitron font-bold text-lg">AI & ML</h4>
            </div>
            <p className="text-sm text-gray-400 font-rajdhani">
              Machine Learning, Deep Learning, and Data Science
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative glass-morphism rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                <i className="fas fa-code text-cyan-400"></i>
              </div>
              <h4 className="font-orbitron font-bold text-lg">Development</h4>
            </div>
            <p className="text-sm text-gray-400 font-rajdhani">
              Full-Stack Web Development and Software Engineering
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative glass-morphism rounded-xl p-6 border border-orange-500/20 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center border border-orange-500/30">
                <i className="fas fa-database text-orange-400"></i>
              </div>
              <h4 className="font-orbitron font-bold text-lg">Data & Tools</h4>
            </div>
            <p className="text-sm text-gray-400 font-rajdhani">
              Databases, DevOps, and Development Tools
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;