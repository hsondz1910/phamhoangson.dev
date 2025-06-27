import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';
import { SiJavascript, SiTypescript, SiDart, SiFlutter, SiAndroid, SiFirebase, SiReact, SiNodedotjs, SiExpress, SiNestjs, SiSpring, SiBootstrap, SiDocker, SiGithub, SiGit, SiPostgresql, SiMongodb, SiJson } from 'react-icons/si';
import { FaJava, FaCode, FaMobileAlt, FaCubes, FaCloud, FaTools, FaProjectDiagram, FaPuzzlePiece } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';

const skillIconMap: Record<string, JSX.Element> = {
  Java: <FaJava />,
  Dart: <SiDart />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  'Android (Java)': <SiAndroid />,
  Flutter: <SiFlutter />,
  'Firebase Realtime Database': <SiFirebase />,
  'Firebase Authentication': <SiFirebase />,
  'Firebase Firestore': <SiFirebase />,
  Firebase: <SiFirebase />,
  'Firebase Storage': <SiFirebase />,
  'Firebase Console': <SiFirebase />,
  React: <SiReact />,
  'Next.js': <SiReact />,
  'Node.js': <SiNodedotjs />,
  'Express.js': <SiExpress />,
  NestJS: <SiNestjs />,
  'Spring Boot': <SiSpring />,
  Bootstrap: <SiBootstrap />,
  Docker: <SiDocker />,
  GitHub: <SiGithub />,
  Git: <SiGit />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  'Visual Studio Code': <VscVscode />,
  JSON: <SiJson />,
};

const MAX_SKILLS_DISPLAY = 4;

const skillGroups = [
  { key: 'Programming Languages', label: 'Programming Languages', icon: <FaCode className="mr-2" /> },
  { key: 'Frameworks & Libraries', label: 'Frameworks & Libraries', icon: <FaCubes className="mr-2" /> },
  { key: 'Mobile Development', label: 'Mobile Development', icon: <FaMobileAlt className="mr-2" /> },
  { key: 'Cloud & DevOps', label: 'Cloud & DevOps', icon: <FaCloud className="mr-2" /> },
  { key: 'Tools & Platforms', label: 'Tools & Platforms', icon: <FaTools className="mr-2" /> },
  { key: 'Version Control & Collaboration', label: 'Version Control & Collaboration', icon: <FaProjectDiagram className="mr-2" /> },
  { key: 'Other Technologies', label: 'Other Technologies', icon: <FaPuzzlePiece className="mr-2" /> },
];

const skillCard =
  'bg-neutral-100 dark:bg-primary-700 border border-primary-600 rounded-xl shadow flex items-center gap-3 px-4 py-3 min-h-[56px] transition-all duration-200 group cursor-pointer';
const skillCardHover =
  'hover:bg-primary-600 hover:text-white hover:border-primary-700 dark:hover:bg-primary-600 dark:hover:text-white';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frameworks & Libraries');
  const [showAllGroups, setShowAllGroups] = useState<Record<string, boolean>>({});
  
  const filteredSkills = skills.filter(skill => 
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  const technicalGroups = Array.from(new Set(skills.filter(s => s.category === 'technical' && s.group).map(s => s.group)));
  const technicalSkillsByGroup = technicalGroups.map(group => ({
    group,
    skills: filteredSkills.filter(s => s.category === 'technical' && s.group === group)
  }));

  return (
    <section id="skills" className="section bg-gradient-to-br from-primary-50/80 via-white to-primary-100/60 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title font-extrabold tracking-tight text-4xl md:text-5xl text-primary-700 dark:text-primary-300 mb-12">My Skills</h2>
        </ScrollReveal>
        
        <div className="flex justify-center mb-8 mt-10">
          <div className="inline-flex bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-2 shadow-lg gap-2 flex-wrap backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm gap-2
                ${activeCategory === 'all' ? 'bg-primary-500 text-white shadow-md scale-105' : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500 bg-white/80 dark:bg-neutral-700 hover:bg-primary-50 dark:hover:bg-primary-900/30'}`}
            >
              <motion.span animate={activeCategory === 'all' ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 300 }}>
                <FaCode className="mr-2" />
              </motion.span>
              All Skills
            </button>
            {skillGroups.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as any)}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm gap-2
                  ${activeCategory === tab.key ? 'bg-primary-500 text-white shadow-md scale-105' : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500 bg-white/80 dark:bg-neutral-700 hover:bg-primary-50 dark:hover:bg-primary-900/30'}`}
              >
                <motion.span animate={activeCategory === tab.key ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 300 }}>
                  {tab.icon}
                </motion.span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white/70 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-primary-100 dark:border-neutral-800 transition-all duration-500">
          {activeCategory === 'all' && technicalSkillsByGroup.map(({ group, skills }) => {
            const groupKey = group ? String(group) : '';
            const showAll = showAllGroups[groupKey] || false;
            const displaySkills = showAll ? skills : skills.slice(0, MAX_SKILLS_DISPLAY);
            return (
              <div key={groupKey} className="mb-8 w-full">
                <h3 className="text-xl font-bold mb-3 text-primary-700 dark:text-primary-300 tracking-wide">{groupKey}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-300">
                  {displaySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`${skillCard} ${skillCardHover}`}
                      tabIndex={0}
                    >
                      <motion.span
                        className="text-2xl text-primary-600 group-hover:text-white"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {skillIconMap[skill.name] || <span className="w-5 h-5 flex items-center justify-center bg-primary-200 rounded-full text-xs font-bold">{skill.name[0]}</span>}
                      </motion.span>
                      <span className="font-semibold text-base text-primary-700 group-hover:text-white transition-colors duration-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
                {skills.length > MAX_SKILLS_DISPLAY && (
                  <button
                    className={`mt-3 w-8 h-8 flex items-center justify-center rounded-full border border-primary-400 bg-white/80 dark:bg-neutral-800 shadow hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300`}
                    onClick={() => setShowAllGroups(prev => ({ ...prev, [groupKey]: !showAll }))}
                    aria-label={showAll ? 'Ẩn bớt' : 'Xem thêm'}
                  >
                    <span className="text-primary-500 text-lg font-bold">{showAll ? '-' : '+'}</span>
                  </button>
                )}
              </div>
            );
          })}
          {activeCategory !== 'all' && activeCategory !== 'soft' && (
            <div className="w-full">
              <h3 className="text-xl font-bold mb-3 text-primary-700 dark:text-primary-300 tracking-wide">{skillGroups.find(g => g.key === activeCategory)?.label}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-300">
                {skills.filter(s => s.group === activeCategory).map((skill) => (
                  <div
                    key={skill.name}
                    className={`${skillCard} ${skillCardHover}`}
                    tabIndex={0}
                  >
                    <motion.span
                      className="text-2xl text-primary-600 group-hover:text-white"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {skillIconMap[skill.name] || <span className="w-5 h-5 flex items-center justify-center bg-primary-200 rounded-full text-xs font-bold">{skill.name[0]}</span>}
                    </motion.span>
                    <span className="font-semibold text-base text-primary-700 group-hover:text-white transition-colors duration-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;