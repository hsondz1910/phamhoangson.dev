import React from 'react';
import { certifications, languages } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <h2 className="section-title">Certifications</h2>
            </ScrollReveal>
            
            <div className="mt-10 space-y-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <span className="text-sm text-neutral-600">{cert.date}</span>
                    </div>
                    <p className="text-neutral-600 mb-2">{cert.issuer}</p>
                    {cert.description && (
                      <p className="text-neutral-700 text-sm mt-2">{cert.description}</p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <div>
            <ScrollReveal delay={0.2}>
              <h2 className="section-title">Languages</h2>
            </ScrollReveal>
            
            <div className="mt-10 space-y-6">
              {languages.map((lang, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <div className="card">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{lang.name}</h3>
                      <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                    
                    {lang.name === 'English' && (
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <div className="flex flex-col gap-3">
                          <div>
                            <p className="text-sm font-medium text-neutral-700 mb-1">Reading & Writing</p>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-neutral-700 mb-1">Speaking & Listening</p>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                              <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;