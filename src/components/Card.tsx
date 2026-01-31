import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowEffect = false 
}) => {
  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      {glowEffect && (
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-accent-blue rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
      )}
      
      <div 
        className={`
          relative glass-morphism rounded-xl p-6 
          ${hoverEffect ? 'hover-lift hover:bg-white/10 hover:border-accent-gold/30' : ''}
          transition-all duration-300
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;