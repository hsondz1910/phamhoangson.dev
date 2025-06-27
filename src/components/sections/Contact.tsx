import React from 'react';
import { socialLinks } from '../../data/portfolioData';
import { Github, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Phone':
        return <Phone size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-100/80 via-white to-primary-200/60 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500 text-neutral-900 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title font-extrabold tracking-tight text-4xl md:text-5xl text-primary-700 dark:text-primary-300 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-700 dark:text-primary-300">Let's Talk</h3>
            <p className="text-neutral-600 dark:text-neutral-200 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="space-y-4 mb-8">
              <a
                  href="tel:+84914037057"
                  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <Phone size={20} />
                <span>+84-914-037-057</span>
              </a>
              <a 
                href="mailto:hsondz1910@gmail.com" 
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
                <span>hsondz1910@gmail.com</span>
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Find Me On</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 dark:bg-neutral-800/80 hover:bg-primary-500 dark:hover:bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg backdrop-blur-md border border-primary-100 dark:border-neutral-700"
                    aria-label={link.platform}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    {getIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.13} scale={1.04} tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
              <div className="bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-primary-100 dark:border-neutral-800">
                <h3 className="text-2xl font-semibold mb-6 text-primary-700 dark:text-primary-300">Send Me a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-neutral-100 dark:bg-neutral-700 border-0 rounded-md p-3 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-neutral-100 dark:bg-neutral-700 border-0 rounded-md p-3 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-neutral-100 dark:bg-neutral-700 border-0 rounded-md p-3 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex justify-center items-center gap-2 shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
                  >
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;