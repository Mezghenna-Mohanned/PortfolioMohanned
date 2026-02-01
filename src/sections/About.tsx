import React, { useState } from 'react';
import Section from '../components/Section';

interface QA {
  id: string;
  question: string;
  answer: string;
}

const About: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string>('who-are-you');

  const qaItems: QA[] = [
    {
      id: 'who-are-you',
      question: 'Who are you?',
      answer: 'I\'m Mezghenna Mohanned, a 4th year software engineering student at USTHB in Algiers, Algeria. I\'m passionate about building solutions and exploring the vast potential of artificial intelligence.'
    },
    {
      id: 'what-do-you-love',
      question: 'What do you love doing?',
      answer: 'I love creating algorithms that solve real problems. There\'s something special about crafting elegant code that transforms complex challenges into simple solutions. I\'m particularly drawn to AI and its ability to revolutionize problem-solving.'
    },
    {
      id: 'languages',
      question: 'What languages do you speak?',
      answer: 'I\'m fluent in Arabic (native), French, and English. Being multilingual has helped me communicate effectively and understand diverse perspectives in tech communities.'
    },
    {
      id: 'focus',
      question: 'What\'s your current focus?',
      answer: 'My focus is on artificial intelligence, machine learning, and algorithm design. I\'m committed to continuous learning and building projects that leverage AI to create meaningful impact.'
    },
    {
      id: 'contact',
      question: 'How can you be reached?',
      answer: 'You can reach me at mezh2911@gmail.com. I\'m always interested in discussing interesting projects, collaborations, or opportunities in software engineering and AI.'
    }
  ];

  const activeQA = qaItems.find(item => item.id === activeQuestion);

  return (
    <Section id="about" title="About Me" subtitle="Who I Am">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction Paragraph */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate software engineering student driven by a love for algorithms and artificial intelligence.
            Based in Algiers, I thrive on solving complex problems through elegant code and innovative thinking.
            My journey in tech is defined by curiosity, persistence, and a commitment to creating solutions that matter.
          </p>
        </div>

        {/* Interactive Terminal */}
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
              <span className="font-space-mono text-xs text-orange-400/60 ml-4">~/mezghenna/interview.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-space-mono text-sm space-y-6">
              {/* Question Display */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 flex-shrink-0">$</span>
                  <span className="text-gray-400">ask_question</span>
                </div>

                <div className="pl-4 text-cyan-400 text-base">
                  {activeQA?.question}
                </div>
              </div>

              {/* Answer Display */}
              <div className="border-t border-orange-500/20 pt-6 space-y-3">
                <div className="text-gray-400 text-xs">
                  &gt;&gt; Response:
                </div>
                <div className="pl-4 text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {activeQA?.answer}
                </div>
              </div>

              {/* Suggestions */}
              <div className="border-t border-orange-500/20 pt-6 space-y-3">
                <div className="text-gray-400 text-xs mb-3">
                  &gt;&gt; Quick access:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                  {qaItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveQuestion(item.id)}
                      className={`text-left px-3 py-2 rounded-lg border transition-all duration-200 font-space-mono text-xs ${
                        activeQuestion === item.id
                          ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                          : 'border-orange-500/20 text-gray-400 hover:border-orange-400 hover:text-orange-300 hover:bg-orange-500/10'
                      }`}
                    >
                      <span className="text-orange-500">➜</span> {item.question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cursor */}
              <div className="flex items-center space-x-2 pt-2 animate-pulse">
                <span className="text-orange-500">$</span>
                <span className="text-gray-400">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;