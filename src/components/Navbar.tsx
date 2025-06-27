import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'bg-primary-600 shadow-xl py-3 border-b border-neutral-200 dark:bg-primary-700 dark:border-primary-600'
          : 'bg-primary-600 py-5 dark:bg-primary-700'
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-extrabold tracking-widest text-white dark:text-neutral-50 drop-shadow-lg">
          PHAMHOANGSON.DEV
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-white dark:text-neutral-50 hover:text-primary-200 dark:hover:text-neutral-200 transition-colors font-medium px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400`}
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-neutral-50 bg-primary-600 dark:bg-primary-700 rounded-full p-2 shadow hover:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-primary-600 dark:bg-primary-700 backdrop-blur-md border-b border-neutral-200 dark:border-primary-600 shadow-xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white dark:text-neutral-50 hover:text-primary-200 dark:hover:text-neutral-200 transition-colors py-2 font-medium px-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;