import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-morphism py-3 shadow-lg shadow-accent-gold/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-orbitron text-sm font-medium text-gray-300 hover:text-white transition-all relative group tracking-wider"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-gold to-accent-blue transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-blue blur-sm transition-all duration-300 group-hover:w-full opacity-50"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors relative group"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gradient-to-r from-accent-gold to-accent-blue transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gradient-to-r from-accent-gold to-accent-blue transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gradient-to-r from-accent-gold to-accent-blue transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 mt-6 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="font-orbitron text-sm font-medium text-gray-300 hover:text-white py-2 transition-all hover:pl-4 tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 rounded-full bg-accent-gold mr-3"></span>
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;