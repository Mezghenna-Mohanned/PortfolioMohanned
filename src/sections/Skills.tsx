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
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend",
      skills: skills.filter(skill => skill.category === 'backend'),
      icon: "⚙️",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Outils & Technologies",
      skills: skills.filter(skill => skill.category === 'tools'),
      icon: "🛠️",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Langages de Programmation",
      skills: skills.filter(skill => skill.category === 'language'),
      icon: "💻",
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <Section id="skills" title="Compétences" subtitle="Expertises techniques">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <span className="text-xl">{category.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-gray-400">{category.skills.length} compétences</p>
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
        <Card>
          <h3 className="text-xl font-bold mb-6">Autres Compétences</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Agile/Scrum", "REST APIs", "GraphQL", "Microservices", 
              "CI/CD", "Testing", "Performance Optimization", "Responsive Design",
              "UI/UX Principles", "Git Workflow", "Linux", "Cloud Architecture"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/30 rounded-full text-sm hover:bg-gray-800/50 transition-colors"
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