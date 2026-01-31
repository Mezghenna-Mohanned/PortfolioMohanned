import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { aboutInfo, languages } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <Card glowEffect>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold to-accent-blue rounded-lg blur-lg opacity-50"></div>
                  <div className="relative w-16 h-16 rounded-lg bg-gradient-to-br from-accent-gold to-accent-blue flex items-center justify-center">
                    <i className="fas fa-user text-white text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold">{aboutInfo.name}</h3>
                  <p className="text-gray-400 font-rajdhani text-lg">{aboutInfo.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed font-rajdhani text-lg">
                {aboutInfo.description}
              </p>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-xl font-orbitron font-semibold gradient-text mb-4">{aboutInfo.tagline}</p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-3 font-rajdhani">
                    <i className="fas fa-map-marker-alt text-accent-gold"></i>
                    <span>{aboutInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 font-rajdhani">
                    <i className="fas fa-envelope text-accent-blue"></i>
                    <span>{aboutInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <Card hoverEffect={false} glowEffect>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-black gradient-text mb-2">3+</div>
                <div className="text-sm text-gray-400 font-rajdhani font-semibold">Years Experience</div>
              </div>
            </Card>
            <Card hoverEffect={false} glowEffect>
              <div className="text-center">
                <div className="text-4xl font-orbitron font-black gradient-text mb-2">25+</div>
                <div className="text-sm text-gray-400 font-rajdhani font-semibold">Projects Done</div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          <Card glowEffect>
            <h3 className="font-orbitron text-xl font-bold mb-6">Languages</h3>
            <div className="space-y-6">
              {languages.map((language) => (
                <div key={language.id} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{language.flag}</span>
                    <div>
                      <div className="font-rajdhani font-bold text-lg">{language.name}</div>
                      <div className="text-sm text-gray-500 font-space-mono">{language.level}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div 
                        key={level}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          level <= 
                          (language.level === 'Langue maternelle' ? 5 : 
                           language.level === 'Courant' ? 4 : 
                           language.level === 'Intermédiaire' ? 3 : 2)
                            ? 'bg-gradient-to-r from-accent-gold to-accent-blue shadow-lg' 
                            : 'bg-gray-700/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card glowEffect>
            <h3 className="font-orbitron text-xl font-bold mb-6">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎸', label: 'Music' },
                { icon: '📚', label: 'Reading' },
                { icon: '✈️', label: 'Travel' },
                { icon: '🏋️‍♂️', label: 'Fitness' },
                { icon: '🎮', label: 'Gaming' },
                { icon: '🎨', label: 'Design' },
                { icon: '🍳', label: 'Cooking' },
                { icon: '🎬', label: 'Cinema' },
              ].map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-gold/30 transition-all group"
                >
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{hobby.icon}</span>
                  <span className="text-xs text-gray-300 font-rajdhani font-semibold">{hobby.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;