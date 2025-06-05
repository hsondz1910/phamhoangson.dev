import React from 'react';
import { experiences } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>
        
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="ml-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full mt-1 md:mt-0">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-2">{exp.organization}</p>
                    <p className="text-neutral-700">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;