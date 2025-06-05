import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} PHẠM HOÀNG SƠN. All Rights Reserved.</p>
          </div>
          
          <div>
            <ul className="flex gap-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;