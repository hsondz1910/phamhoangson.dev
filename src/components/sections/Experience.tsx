import React from 'react';
import { experiences } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-gradient-to-br from-primary-50/80 via-accent-50/80 to-primary-100/60 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title font-extrabold tracking-tight text-4xl md:text-5xl bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          Experience
        </motion.h2>
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 w-px h-full bg-primary-200 dark:bg-primary-800" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring' }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
                    <div className="timeline-item bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-md border border-primary-100 dark:border-primary-900 transition-all duration-300">
                      <div className="ml-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">{exp.title}</h3>
                          <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full mt-1 md:mt-0">
                            {exp.date}
                          </span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-200 mb-2">{exp.organization}</p>
                        <p className="text-neutral-700 dark:text-neutral-100 mb-2">{exp.description}</p>

                        {exp.technologies && (
                            <p className="text-neutral-600 dark:text-neutral-200 mb-1">
                              <strong>Technologies:</strong> {exp.technologies.join(', ')}
                            </p>
                        )}

                        {exp.tools && (
                            <p className="text-neutral-600 dark:text-neutral-200 mb-1">
                              <strong>Tools & Methodologies:</strong> {exp.tools.join(', ')}
                            </p>
                        )}

                        {exp.role && Array.isArray(exp.role) && (
                            <div className="text-neutral-600 dark:text-neutral-200 mb-1">
                              <strong>Role & Contribution:</strong>
                              <ul className="list-disc list-inside mt-1">
                                {exp.role.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                        )}

                        {exp.website && (
                            <p className="text-blue-600 underline">
                              <a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block mt-2 font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded shadow"
                              >
                                Visit Website
                              </a>
                            </p>
                        )}
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;