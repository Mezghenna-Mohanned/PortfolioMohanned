import React from 'react';
import Section from '../components/Section';
import SkillBar from '../components/SkillBar';
import Card from '../components/Card';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.filter(skill => skill.category === 'frontend'),
      icon: "🎨",
      color: "from-accent-blue to-cyan-400"
    },
    {
      title: "Backend",
      skills: skills.filter(skill => skill.category === 'backend'),
      icon: "⚙️",
      color: "from-accent-gold to-yellow-400"
    },
    {
      title: "Tools & Tech",
      skills: skills.filter(skill => skill.category === 'tools'),
      icon: "🛠️",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Languages",
      skills: skills.filter(skill => skill.category === 'language'),
      icon: "💻",
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <Section id="skills" title="Skills" subtitle="Technical Expertise">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} glowEffect>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center rotate-45`}>
                <span className="text-2xl -rotate-45">{category.icon}</span>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.color} blur-lg opacity-50`}></div>
              </div>
              <div>
                <h3 className="font-orbitron text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-gray-400 font-rajdhani">
                  {category.skills.length} skills
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      {/* Additional Skills */}
      <div className="mt-12">
        <Card glowEffect>
          <h3 className="font-orbitron text-xl font-bold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Agile/Scrum", "REST APIs", "GraphQL", "Microservices", 
              "CI/CD", "Testing", "Performance Optimization", "Responsive Design",
              "UI/UX Principles", "Git Workflow", "Linux", "Cloud Architecture"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/5 rounded-lg text-sm font-rajdhani font-semibold hover:bg-white/10 border border-white/10 hover:border-accent-gold/30 hover:text-accent-gold transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Skills;