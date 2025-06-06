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
            {/* Timeline line */}
            <div className="absolute left-2 top-0 w-px h-full bg-gray-300" />
              {experiences.map((exp, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <div className="timeline-item">
                      {/*<div className="timeline-dot"></div>*/}
                      <div className="ml-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full mt-1 md:mt-0">
                            {exp.date}
                          </span>
                        </div>
                        <p className="text-neutral-600 mb-2">{exp.organization}</p>
                        <p className="text-neutral-700 mb-2">{exp.description}</p>

                        {exp.technologies && (
                            <p className="text-neutral-600 mb-1">
                              <strong>Technologies:</strong> {exp.technologies.join(', ')}
                            </p>
                        )}

                        {exp.tools && (
                            <p className="text-neutral-600 mb-1">
                              <strong>Tools & Methodologies:</strong> {exp.tools.join(', ')}
                            </p>
                        )}

                        {exp.role && Array.isArray(exp.role) && (
                            <div className="text-neutral-600 mb-1">
                              <strong>Role & Contribution:</strong>
                              <ul className="list-disc list-inside mt-1">
                                {exp.role.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                        )}

                        {exp.website && (
                            <p className=" text-blue-600 underline">
                              <a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block mt-2  font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                              >
                                Visit Website
                              </a>
                            </p>
                        )}
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