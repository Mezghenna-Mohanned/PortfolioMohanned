import React from 'react';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    icon?: string;
  };
  showLabel?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, showLabel = true }) => {
  return (
    <div className="mb-5">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            {skill.icon && <span className="text-lg">{skill.icon}</span>}
            <span className="font-medium text-gray-200">{skill.name}</span>
          </div>
          <span className="text-sm font-medium gradient-text">{skill.level}%</span>
        </div>
      )}
      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;