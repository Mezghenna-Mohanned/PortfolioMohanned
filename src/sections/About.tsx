import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { aboutInfo, languages } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <Section id="about" title="À Propos" subtitle="Qui suis-je">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <Card>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
                  <i className="fas fa-user text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{aboutInfo.name}</h3>
                  <p className="text-gray-400">{aboutInfo.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {aboutInfo.description}
              </p>
              
              <div className="pt-4 border-t border-gray-800/50">
                <p className="text-lg font-semibold gradient-text mb-3">{aboutInfo.tagline}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{aboutInfo.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-2">
                    <i className="fas fa-envelope"></i>
                    <span>{aboutInfo.email}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <Card hoverEffect={false}>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
            </Card>
            <Card hoverEffect={false}>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-bold mb-6">Langues</h3>
            <div className="space-y-6">
              {languages.map((language) => (
                <div key={language.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{language.flag}</span>
                    <div>
                      <div className="font-medium">{language.name}</div>
                      <div className="text-sm text-gray-500">Niveau: {language.level}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div 
                        key={level}
                        className={`w-2 h-2 rounded-full ${
                          level <= 
                          (language.level === 'Langue maternelle' ? 5 : 
                           language.level === 'Courant' ? 4 : 
                           language.level === 'Intermédiaire' ? 3 : 2)
                            ? 'bg-gradient-to-r from-primary-500 to-cyan-400' 
                            : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-6">Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎸', label: 'Musique' },
                { icon: '📚', label: 'Lecture' },
                { icon: '✈️', label: 'Voyage' },
                { icon: '🏋️‍♂️', label: 'Sport' },
                { icon: '🎮', label: 'Gaming' },
                { icon: '🎨', label: 'Design' },
                { icon: '🍳', label: 'Cuisine' },
                { icon: '🎬', label: 'Cinéma' },
              ].map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center px-4 py-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-2xl mb-1">{hobby.icon}</span>
                  <span className="text-sm text-gray-300">{hobby.label}</span>
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