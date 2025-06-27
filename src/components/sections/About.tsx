import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gradient-to-br from-primary-50/80 via-accent-50/80 to-primary-100/60 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title font-extrabold tracking-tight text-4xl md:text-5xl text-primary-700 dark:text-primary-300 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
            className=""
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.10} scale={1.02} tiltMaxAngleX={8} tiltMaxAngleY={8} className="space-y-6 bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-primary-100 dark:border-primary-900">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent">Who am I?</h3>
              {personalInfo.about.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-neutral-700 dark:text-neutral-200 mb-4 text-lg">
                    {para}
                  </p>
              ))}
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-700 bg-clip-text text-transparent">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary-500" />
                    <span className="text-neutral-800 dark:text-neutral-100">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary-500" />
                    <span className="text-neutral-800 dark:text-neutral-100">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary-500" />
                    <span className="text-neutral-800 dark:text-neutral-100">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent">Education</h3>
            <Tilt glareEnable={true} glareMaxOpacity={0.10} scale={1.02} tiltMaxAngleX={8} tiltMaxAngleY={8} className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-primary-100 dark:border-primary-900">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-primary-700 dark:text-primary-200">{personalInfo.education.university}</h4>
                <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                  {personalInfo.education.period}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-200">{personalInfo.education.degree}</p>
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <h5 className="font-semibold mb-2 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-700 bg-clip-text text-transparent">Key Achievements</h5>
                <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-200">
                  <li>Academic Highlights</li>
                  <li>Learning Focus</li>
                  <li>Relevant Coursework & Activities</li>
                </ul>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;