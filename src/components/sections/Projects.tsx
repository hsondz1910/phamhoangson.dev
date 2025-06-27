import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const Projects: React.FC = () => {
  const [] = useState<string | null>(null);

  return (
    <section id="projects" className="section bg-gradient-to-br from-primary-50/80 via-accent-50/80 to-primary-100/60 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title font-extrabold tracking-tight text-4xl md:text-5xl bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12, type: 'spring' }}
              className="rounded-2xl shadow-xl bg-white/80 dark:bg-neutral-900/80 border border-primary-100 dark:border-primary-900 backdrop-blur-md flex flex-col h-full min-h-[480px] overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-primary-100/60 via-accent-100/40 to-primary-200/40 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-2xl transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-neutral-900/90 text-primary-600 dark:text-primary-300 rounded-full p-3 shadow-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-white transition-colors text-xl flex items-center justify-center"
                      data-tooltip-id={`github-tip-${project.id}`}
                      data-tooltip-content="View on GitHub"
                    >
                      <Github size={28} />
                    </a>
                  )}
                  {project.youtubeLink && project.youtubeLink !== '' && (
                    <a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-neutral-900/90 text-red-600 rounded-full p-3 shadow-lg hover:bg-red-500 hover:text-white transition-colors text-xl flex items-center justify-center"
                      data-tooltip-id={`yt-tip-${project.id}`}
                      data-tooltip-content="Watch Demo"
                    >
                      <Youtube size={28} />
                    </a>
                  )}
                  {project.githubLink && <Tooltip id={`github-tip-${project.id}`} />}
                  {project.youtubeLink && project.youtubeLink !== '' && <Tooltip id={`yt-tip-${project.id}`} />}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-200 line-clamp-2">{project.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-200 mb-4 line-clamp-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;