import React from 'react';
import { Download, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/images/myself.jpg';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-100/80 via-accent-50/80 to-primary-200/60 dark:from-neutral-900 dark:via-primary-900 dark:to-neutral-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              <p className="text-primary-500 font-medium mb-2 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-700 bg-clip-text text-transparent">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-primary-600 drop-shadow-lg">{personalInfo.name}</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-700 bg-clip-text text-transparent">{personalInfo.role}</h2>
              <p className="text-neutral-700 dark:text-neutral-200 mb-8 max-w-lg text-lg">
                <strong>Passionate Full-Stack Developer</strong> with solid experience in Java, JavaScript, and React. I enjoy building intuitive, scalable applications that enhance user experience and solve real-world challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/files/PhamHoangSon_Resume.pdf"
                  className="btn btn-primary shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
                  download
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-outline border border-primary-600 bg-transparent text-primary-600 hover:bg-primary-600 hover:text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail size={18} />
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
              className="relative"
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.18} scale={1.07} tiltMaxAngleX={18} tiltMaxAngleY={18} className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-8 border-white dark:border-primary-900 mx-auto bg-gradient-to-br from-primary-400/70 via-accent-200/60 to-primary-200/40">
                <img
                  src={profileImg}
                  alt="Pham Hoang Son"
                  className="w-full h-full object-cover rounded-full"
                />
              </Tilt>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-0 right-0 md:right-12 bg-gradient-to-r from-primary-50 via-accent-50 to-primary-100 dark:from-neutral-900 dark:via-primary-900 dark:to-primary-800 p-4 rounded-xl shadow-xl backdrop-blur-md border border-primary-100 dark:border-primary-900"
              >
                <p className="font-bold text-primary-500 dark:text-primary-300 text-base">Fourth-year Student</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;