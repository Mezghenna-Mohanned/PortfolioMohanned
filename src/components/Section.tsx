import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-blue/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="mb-12 md:mb-16">
          {subtitle && (
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-accent-gold to-transparent"></div>
              <span className="font-space-mono text-xs font-bold text-accent-gold uppercase tracking-widest">
                {subtitle}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></div>
            </div>
          )}
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            {title}
            <span className="gradient-text">.</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-gold to-accent-blue mt-4 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;