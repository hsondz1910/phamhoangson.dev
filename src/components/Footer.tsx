import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="bg-primary-600 dark:bg-primary-700 text-white dark:text-neutral-50 py-8 shadow-inner backdrop-blur-md border-t border-neutral-200 dark:border-primary-600"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-medium tracking-wide">&copy; {currentYear} PHẠM HOÀNG SƠN. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/hsondz1910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white dark:text-neutral-50 hover:text-primary-200 dark:hover:text-neutral-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:hsondz1910@gmail.com"
              className="text-white dark:text-neutral-50 hover:text-primary-200 dark:hover:text-neutral-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
            <ul className="hidden md:flex gap-6 ml-6">
              <li>
                <a href="#home" className="hover:text-primary-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-200 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-200 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-200 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex md:hidden justify-center gap-6 mt-4">
          <li>
            <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;