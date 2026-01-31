import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string | string[];
  icon?: string;
  type?: 'education' | 'work' | 'internship';
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const getTypeColor = (type?: string) => {
    switch(type) {
      case 'education': return 'from-accent-blue to-cyan-400';
      case 'work': return 'from-accent-gold to-yellow-400';
      case 'internship': return 'from-green-500 to-emerald-400';
      default: return 'from-accent-gold to-accent-blue';
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-accent-gold/50 via-accent-blue/30 to-transparent"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } group`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center shadow-lg rotate-45 group-hover:rotate-90 transition-transform duration-500`}>
                <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500">
                  {item.icon ? (
                    <span className="text-white text-xl font-bold">{item.icon}</span>
                  ) : (
                    <span className="text-white text-lg font-bold">
                      {item.type === 'education' ? '🎓' : '💼'}
                    </span>
                  )}
                </div>
              </div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${getTypeColor(item.type)} blur-xl opacity-30 group-hover:opacity-60 transition-opacity`}></div>
            </div>
            
            {/* Content */}
            <div className={`ml-20 md:ml-0 md:w-5/12 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
            }`}>
              <div className="glass-morphism rounded-xl p-6 hover-lift border border-white/5 hover:border-accent-gold/30 transition-all duration-500 group-hover:bg-white/10">
                <div className={`flex flex-col gap-3 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></div>
                    <span className="font-space-mono text-xs font-bold text-gray-300 tracking-wider">
                      {item.period}
                    </span>
                  </div>
                  {item.type && (
                    <span className={`inline-flex px-4 py-1.5 rounded-lg text-xs font-orbitron font-bold bg-gradient-to-r ${getTypeColor(item.type)}/20 border border-${item.type === 'education' ? 'accent-blue' : 'accent-gold'}/30 text-white tracking-wider`}>
                      {item.type === 'education' ? 'FORMATION' : 
                       item.type === 'internship' ? 'STAGE' : 'EXPERIENCE'}
                    </span>
                  )}
                </div>
                
                <h3 className="font-orbitron text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-rajdhani font-semibold mb-4 text-lg">
                  {item.subtitle}
                </p>
                
                {Array.isArray(item.description) ? (
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 text-sm font-rajdhani flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-gold to-accent-blue mt-1.5 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm font-rajdhani">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;