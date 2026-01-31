import React from 'react';
import { aboutInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  const mahoragaImg = '/images/mahoraga1.png';

  // Tech logos with image paths instead of icons - rotating around Mahoraga
  const techLogos = [
    { name: 'Python', image: '/images/python.png', delay: 0, position: 'top-10 right-10', rotate: 'animate-spin-slow' },
    { name: 'JavaScript', image: '/images/javascript.png', delay: 0.5, position: 'top-1/4 right-5', rotate: 'animate-spin-slow' },
    { name: 'git', image: '/images/git.png', delay: 1, position: 'top-1/3 left-10', rotate: 'animate-spin-slow' },
    { name: 'Tensorflow', image: '/images/tensorflow.png', delay: 1.5, position: 'bottom-1/3 left-5', rotate: 'animate-spin-slow' },
    { name: 'C', image: '/images/C.png', delay: 2, position: 'bottom-1/4 right-12', rotate: 'animate-spin-slow' },
    { name: ' Flask', image: '/images/Flask.png', delay: 2.5, position: 'top-1/2 right-2', rotate: 'animate-spin-slow' },
    { name: 'TypeScript', image: '/images/Typescript.png', delay: 3, position: 'top-20 left-12', rotate: 'animate-spin-slow' },
    { name: 'SQL', image: '/images/SQL.png', delay: 3.5, position: 'bottom-20 left-8', rotate: 'animate-spin-slow' },
    ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Dark Background Base */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:pl-12 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-5 py-3 rounded-full glass-morphism backdrop-blur-xl border border-orange-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="text-sm font-bold tracking-wide text-orange-200">AVAILABLE FOR PROJECTS</span>
            </div>

            {/* Main Headline with Layered Typography */}
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white/90 font-space">
                  I ADAPT
                </span>
                <span className="block mt-4">
                  <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                    TO YOUR
                  </span>
                </span>
                <span className="block mt-4 text-white/90 font-space">
                  NEEDS
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="mt-8 flex items-center space-x-4">
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500/50 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Subheading */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-white/80">
                {aboutInfo.name}
              </p>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Software Engineer crafting adaptive algorithms that scale intelligently to your evolving requirements
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10">VIEW MY WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                LET'S TALK
              </a>
            </div>

            {/* Social Links - Only LinkedIn and GitHub - Fixed Spacing */}
            <div className="flex items-center space-x-4 pt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-github text-lg text-gray-400 group-hover:text-orange-400 transition-colors"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in text-lg text-gray-400 group-hover:text-orange-400 transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Right Side - Mahoraga Image with Floating Tech Logos */}
          <div className="relative order-1 lg:order-2 flex justify-end">
            {/* Main Image Container - Shifted Right */}
            <div className="relative" style={{ marginRight: '4rem' }}>
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent blur-3xl"></div>
              
              {/* Floating Tech Logos with Images and Rotation */}
              <div className="absolute inset-0 pointer-events-none" style={{ width: '150%', height: '120%', left: '-25%', top: '-10%' }}>
                {techLogos.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`absolute ${tech.position} w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-2 animate-float hover:scale-110 transition-transform`}
                    style={{ 
                      animationDelay: `${tech.delay}s`,
                      animationDuration: `${5 + index * 0.3}s`,
                      zIndex: index % 2 === 0 ? 1 : 5 // Some logos behind, some in front
                    }}
                  >
                    <img 
                      src={tech.image} 
                      alt={tech.name} 
                      className="w-full h-full object-contain animate-spin-slow"
                      style={{ 
                        animationDuration: `${8 + index * 0.5}s`,
                        animationDelay: `${tech.delay * 0.5}s`
                      }}
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
              
              {/* Mahoraga Image - Increased Size */}
              <div className="relative" style={{ zIndex: 3 }}>
                <img 
                  src={mahoragaImg}
                  alt="Mahoraga - Adaptation"
                  className="relative z-10"
                  style={{
                    width: '350px',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                  }}
                />
                
                {/* Overlapping Text Behind Image - "ADAPT" */}
                <div className="absolute top-1/4 -left-32 -z-10">
                  <span className="text-[180px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
                    ADAPT
                  </span>
                </div>
                
                {/* Overlapping Text Behind Image - "EVOLVE" */}
                <div className="absolute bottom-1/4 -right-32 -z-10">
                  <span className="text-[180px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
                    EVOLVE
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-2xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Separated from Hero Content, Not Sticking to Bottom */}
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
          {[
            { value: '25+', label: 'Projects' },
            { value: '15+', label: 'Technologies' },
            { value: '3+', label: 'Years Exp' }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div className="relative glass-morphism backdrop-blur-xl border border-white/10 p-5 rounded-xl text-center group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Fixed at Bottom with Proper Spacing */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="#about" 
          className="flex flex-col items-center space-y-2 group cursor-pointer"
        >
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2 group-hover:border-orange-500/50 transition-colors">
            <div className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-transparent rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;