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
      case 'education': return 'from-blue-500 to-cyan-400';
      case 'work': return 'from-purple-500 to-pink-400';
      case 'internship': return 'from-green-500 to-emerald-400';
      default: return 'from-primary-500 to-cyan-400';
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-800/50 to-gray-800/20"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center shadow-lg`}>
                {item.icon ? (
                  <span className="text-white text-lg">{item.icon}</span>
                ) : (
                  <span className="text-white text-sm font-bold">
                    {item.type === 'education' ? '🎓' : '💼'}
                  </span>
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
            }`}>
              <div className="glass-morphism rounded-xl p-6 hover-lift">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-300 w-fit">
                    {item.period}
                  </span>
                  {item.type && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)}/20 text-white w-fit`}>
                      {item.type === 'education' ? 'Formation' : 
                       item.type === 'internship' ? 'Stage' : 'Expérience'}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 font-medium mb-4">{item.subtitle}</p>
                
                {Array.isArray(item.description) ? (
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">{item.description}</p>
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