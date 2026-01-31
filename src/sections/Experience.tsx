import React from 'react';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  const timelineItems = experiences.map(exp => ({
    ...exp,
    title: exp.position,
    subtitle: exp.company,
    type: exp.type === 'internship' ? ('internship' as const) : ('work' as const),
    description: exp.description,
    icon: exp.type === 'internship' ? '🎯' : '💼',
  }));

  return (
    <Section id="experience" title="Experience" subtitle="Professional Journey">
      <div className="max-w-4xl mx-auto">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  );
};

export default Experience;