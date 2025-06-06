import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">My Projects</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <div
                className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative w-full overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition duration-500 ease-in-out ${hoveredProject === project.id ? 'scale-105 brightness-90 saturate-125' : 'scale-100 opacity-80'}`}
                    />
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-semibold">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.githubLink && (
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300 transition-colors">
                                <Github size={20} />
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-700 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-neutral-600 mb-2">Role: {project.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 font-medium flex items-center gap-1 hover:text-primary-600 transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;