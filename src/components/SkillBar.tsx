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
    <div className="mb-6 group">
      {showLabel && (
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-3">
            {skill.icon && (
              <span className="text-xl group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
            )}
            <span className="font-rajdhani font-semibold text-gray-200 group-hover:text-accent-gold transition-colors">
              {skill.name}
            </span>
          </div>
          <span className="font-orbitron text-sm font-bold gradient-text">
            {skill.level}%
          </span>
        </div>
      )}
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <div 
          className="h-full bg-gradient-to-r from-accent-gold to-accent-blue rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${skill.level}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;