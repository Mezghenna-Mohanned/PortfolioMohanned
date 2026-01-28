import React from 'react';
import { aboutInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-morphism">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium">Disponible pour des opportunités</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-space">
              Je crée des produits web{' '}
              <span className="gradient-text">modernes</span> au design{' '}
              <span className="gradient-text">premium</span> et qui scalent{' '}
              <span className="gradient-text">proprement</span>.
            </h1>

            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-cyan-400 rounded-full"></div>
                <p className="text-2xl font-semibold">
                  Je suis <span className="gradient-text">{aboutInfo.name}</span>
                </p>
              </div>
              <p className="text-xl text-gray-300">
                Full-stack Web Developer • Étudiant en Ingénierie Logicielle
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Je développe des plateformes modernes, des APIs scalables et des solutions innovantes 
              avec les dernières technologies. Passionné par le code propre et les designs élégants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold rounded-lg hover-lift hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Voir Mes Projets
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass-morphism font-semibold rounded-lg hover-lift hover:bg-white/10 transition-all duration-300"
              >
                Me Contacter
              </a>
              <a
                href="#"
                className="px-8 py-3 glass-morphism font-semibold rounded-lg hover-lift hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <i className="fas fa-download"></i>
                Télécharger CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-lift">
                <i className="fab fa-codepen text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-float"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-dark-900 to-dark-800 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold gradient-text mb-4">MM</div>
                    <div className="text-sm text-gray-400 font-space">SOFTWARE ENGINEER</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl glass-morphism flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-3xl">⚛️</span>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass-morphism flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">📘</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass-morphism flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl glass-morphism flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-3xl">🐍</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center glass-morphism p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold gradient-text">25+</div>
                  <div className="text-sm text-gray-400">Projets</div>
                </div>
                <div className="text-center glass-morphism p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center glass-morphism p-4 rounded-xl hover-lift">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-gray-400">Années Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-bounce">
          <i className="fas fa-chevron-down text-gray-400 text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;