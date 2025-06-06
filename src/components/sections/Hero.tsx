import React from 'react';
import { Download, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <ScrollReveal>
              <p className="text-primary-500 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
              <h2 className="text-2xl md:text-3xl text-neutral-600 mb-6">{personalInfo.role}</h2>
              <p className="text-neutral-700 mb-8 max-w-lg">
                <strong>Passionate Full-Stack Developer</strong> with solid experience in Java, JavaScript, and React. I enjoy building intuitive, scalable applications that enhance user experience and solve real-world challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="../../../src/assets/file/PhamHoangSon_Resume.pdf" className="btn btn-primary" download>
                  <Download size={18} />
                  Download CV
                </a>
                <a href="#contact" className="btn btn-outline">
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:w-1/2 relative">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-500 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto">
                <img
                  src="../../../src/assets/images/myself.jpg"
                  alt="Pham Hoang Son"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 md:right-12 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary-500">Fourth-year Student</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;