import React from 'react';
import { certifications, languages } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section bg-gradient-to-br from-primary-50/80 via-accent-50/80 to-primary-100/60 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h2
              className="section-title font-extrabold tracking-tight text-4xl md:text-5xl bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent mb-10"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              Certifications
            </motion.h2>
            <div className="mt-10 space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring' }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
                    <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-primary-100 dark:border-primary-900 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">{cert.title}</h3>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">{cert.date}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-200 mb-2">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-neutral-700 dark:text-neutral-100 text-sm mt-2">{cert.description}</p>
                      )}
                      {cert.link && (
                          <p className="text-blue-600 underline">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-2 font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded shadow"
                            >
                              View Certification
                            </a>
                          </p>
                          )
                      }
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h2
              className="section-title font-extrabold tracking-tight text-4xl md:text-5xl text-primary-600 mb-10"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            >
              Languages
            </motion.h2>
            <div className="mt-10 space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.15, type: 'spring' }}
                >
                  <Tilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
                    <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-primary-100 dark:border-primary-900 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">{lang.name}</h3>
                        <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                          {lang.level}
                        </span>
                      </div>
                      {lang.name === 'English' && (
                        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                          <div className="flex flex-col gap-3">
                            <div>
                              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">Reading & Writing</p>
                              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">Speaking & Listening</p>
                              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;