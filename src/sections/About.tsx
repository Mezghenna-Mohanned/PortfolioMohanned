import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  const languages = [
    { name: "Arabic", proficiency: "Native", code: "AR" },
    { name: "French", proficiency: "Fluent", code: "FR" },
    { name: "English", proficiency: "Fluent", code: "EN" },
  ];

  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Terminal Window - Main Info */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative bg-black/80 backdrop-blur-xl border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-orange-950/50 to-black/50 px-4 py-3 border-b border-orange-500/20 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-space-mono text-xs text-orange-400/60 ml-4">~/about/mezghenna.sh</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-space-mono text-sm space-y-4">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 flex-shrink-0">$</span>
                  <span className="text-gray-400">cat identity.txt</span>
                </div>

                <div className="pl-4 space-y-3 text-gray-300">
                  <div>
                    <span className="text-orange-400">name:</span>
                    <span className="text-white ml-2 font-semibold">Mezghenna Mohanned</span>
                  </div>
                  <div>
                    <span className="text-orange-400">role:</span>
                    <span className="text-white ml-2">Software Engineering Student</span>
                  </div>
                  <div>
                    <span className="text-orange-400">year:</span>
                    <span className="text-white ml-2">4th Year @ USTHB</span>
                  </div>
                  <div>
                    <span className="text-orange-400">location:</span>
                    <span className="text-white ml-2">Algiers, Algeria</span>
                  </div>
                  <div>
                    <span className="text-orange-400">email:</span>
                    <span className="text-cyan-400 ml-2">mezh2911@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-4">
                  <span className="text-orange-500 flex-shrink-0">$</span>
                  <span className="text-gray-400">cat mission.txt</span>
                </div>

                <div className="pl-4 text-gray-300 leading-relaxed">
                  <p className="text-white/90">
                    I love creating <span className="text-orange-400 font-semibold">algorithms</span> that help build
                    <span className="text-orange-400 font-semibold"> solutions</span>. I enjoy everything about
                    <span className="text-orange-400 font-semibold"> Artificial Intelligence</span> and its potential
                    to transform the way we solve problems.
                  </p>
                </div>

                <div className="flex items-center space-x-2 pt-2 animate-pulse">
                  <span className="text-orange-500">$</span>
                  <span className="text-gray-400">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Window - Languages */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative bg-black/80 backdrop-blur-xl border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-orange-950/50 to-black/50 px-4 py-3 border-b border-orange-500/20 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-space-mono text-xs text-orange-400/60 ml-4">~/languages/config.json</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-space-mono text-sm space-y-4">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 flex-shrink-0">$</span>
                  <span className="text-gray-400">cat languages.json</span>
                </div>

                <div className="pl-4">
                  <div className="text-gray-400">{'{'}</div>
                  <div className="pl-4 space-y-3 py-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="group/lang">
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400">"{lang.code}":</span>
                          <span className="text-gray-400">{'{'}</span>
                        </div>
                        <div className="pl-4 space-y-1 text-gray-300">
                          <div>
                            <span className="text-orange-400">"language":</span>
                            <span className="text-green-400 ml-2">"{lang.name}"</span>,
                          </div>
                          <div>
                            <span className="text-orange-400">"proficiency":</span>
                            <span className="text-green-400 ml-2">"{lang.proficiency}"</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">{'}'}</span>
                          {index < languages.length - 1 && <span className="text-gray-400">,</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-400">{'}'}</div>
                </div>

                <div className="flex items-start space-x-2 pt-4 border-t border-orange-500/10">
                  <span className="text-orange-500 flex-shrink-0">$</span>
                  <span className="text-gray-400">echo "Communication: Multilingual"</span>
                </div>

                <div className="pl-4 text-green-400">
                  Communication: Multilingual ✓
                </div>

                <div className="flex items-center space-x-2 pt-2 animate-pulse">
                  <span className="text-orange-500">$</span>
                  <span className="text-gray-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="mt-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative bg-black/60 backdrop-blur-xl border border-orange-500/20 rounded-lg px-6 py-4 hover:border-orange-500/40 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 font-space-mono text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-gray-400">STATUS:</span>
                <span className="text-green-400">ONLINE</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-400">MODE:</span>
                <span className="text-orange-400">LEARNING</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-400">FOCUS:</span>
                <span className="text-cyan-400">AI & ALGORITHMS</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-400">LOCATION:</span>
                <span className="text-white">DZ/ALG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;