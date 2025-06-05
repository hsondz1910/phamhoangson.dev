import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'soft'>('all');
  
  const filteredSkills = skills.filter(skill => 
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">My Skills</h2>
        </ScrollReveal>
        
        <div className="flex justify-center mb-8 mt-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-600 hover:text-primary-500'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'technical'
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-600 hover:text-primary-500'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveCategory('soft')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'soft'
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-600 hover:text-primary-500'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-wrap justify-center">
            {filteredSkills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 0.05}>
                <div className={`skill-tag ${
                  skill.category === 'technical' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-neutral-100 text-neutral-700'
                }`}>
                  {skill.name}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;