import React from 'react';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import { educations } from '../data/portfolioData';

const Education: React.FC = () => {
  const timelineItems = educations.map(edu => ({
    ...edu,
    title: edu.degree,
    subtitle: edu.institution,
    type: 'education' as const,
    description: edu.description,
    icon: edu.icon,
  }));

  return (
    <Section id="education" title="Education" subtitle="Academic Journey">
      <div className="max-w-4xl mx-auto">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  );
};

export default Education;