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
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="section-container">
        <div className="mb-12 md:mb-16">
          {subtitle && (
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full"></div>
              <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space">
            {title}
            <span className="gradient-text">.</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;