import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold to-accent-blue rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold to-accent-blue flex items-center justify-center">
                  <span className="font-orbitron font-black text-dark-950 text-xl">MM</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-lg leading-none tracking-wider">
                  MEZGHENNA
                </span>
                <span className="font-space-mono text-[10px] text-accent-blue tracking-widest">
                  DEVELOPER
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" className="text-gray-400 hover:text-accent-gold transition-colors font-rajdhani font-semibold">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-accent-gold transition-colors font-rajdhani font-semibold">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-accent-gold transition-colors font-rajdhani font-semibold">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-accent-gold transition-colors font-rajdhani font-semibold">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-accent-gold transition-colors font-rajdhani font-semibold">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-gray-500 text-sm font-rajdhani">
                © {new Date().getFullYear()} Mezghenna Mohanned. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs font-space-mono">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;