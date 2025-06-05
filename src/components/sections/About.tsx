import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-neutral-700">
                {personalInfo.about}
              </p>
              <p className="text-neutral-700">
                I'm constantly learning and expanding my knowledge in software development. 
                My goal is to create efficient, scalable, and user-friendly applications 
                that solve real-world problems.
              </p>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary-500" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary-500" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold">{personalInfo.education.university}</h4>
                  <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                    {personalInfo.education.period}
                  </span>
                </div>
                <p className="text-neutral-600">{personalInfo.education.degree}</p>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <h5 className="font-semibold mb-2">Key Achievements</h5>
                  <ul className="list-disc list-inside space-y-1 text-neutral-700">
                    <li>Dean's List for Academic Excellence (2022-2023)</li>
                    <li>Participant in ACM-ICPC Programming Contest</li>
                    <li>Student Representative for Software Engineering Department</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;