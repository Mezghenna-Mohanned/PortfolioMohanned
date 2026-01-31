import React from 'react';
import { aboutInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  const mahoragaImg = '/images/mahoraga.png';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
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
                Software Engineer engineering adaptive intelligence that scales with your vision.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10">VIEW MY WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                LET'S TALK
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              {[
                { icon: 'fab fa-github', href: '#' },
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
                { icon: 'fab fa-codepen', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={`${social.icon} text-xl text-gray-400 group-hover:text-orange-400 transition-colors`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Mahoraga Image */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container with Gradient Fade */}
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent blur-3xl"></div>
              
              {/* Image with Gradient Mask */}
              <div className="relative">
                <img 
                  src={mahoragaImg}
                  alt="Mahoraga - Adaptation"
                  className="relative z-10"
                  style={{
                    // ADJUST IMAGE SIZE HERE:
                    width: '450px',      // Change this value to adjust width (e.g., '400px', '500px', '600px')
                    height: 'auto',      // Keep as 'auto' to maintain aspect ratio
                    maxWidth: '100%',    // Ensures responsiveness on small screens
                    objectFit: 'contain',
                    
                    // GRADIENT FADE EFFECTS:
                    // Bottom fade (merges with background at bottom)
                    // Right fade (merges with background on right side)
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in'
                  }}
                />
                
                {/* Overlapping Text Behind Image - "ADAPT" */}
                <div className="absolute top-1/4 -left-24 -z-10">
                  <span className="text-[180px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
                    ADAPT
                  </span>
                </div>
                
                {/* Overlapping Text Behind Image - "EVOLVE" */}
                <div className="absolute bottom-1/4 -right-24 -z-10">
                  <span className="text-[180px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
                    EVOLVE
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-2xl rounded-full"></div>
            </div>

            {/* Stats Cards */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-12">
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
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