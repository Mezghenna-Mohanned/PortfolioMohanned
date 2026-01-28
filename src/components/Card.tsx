import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        glass-morphism rounded-xl p-6 
        ${hoverEffect ? 'hover-lift hover:bg-white/10' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card