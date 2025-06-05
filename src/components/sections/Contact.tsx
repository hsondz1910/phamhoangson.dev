import React from 'react';
import { socialLinks } from '../../data/portfolioData';
import { Github, Mail, Phone, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      case 'Phone':
        return <Phone size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title text-white">Get In Touch</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-neutral-300 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:hsondz1910@gmail.com" 
                  className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                  <span>hsondz1910@gmail.com</span>
                </a>
                <a 
                  href="tel:+84914037057" 
                  className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  <Phone size={20} />
                  <span>+84-914-037-057</span>
                </a>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Find Me On</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-800 hover:bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label={link.platform}
                    >
                      {getIcon(link.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-neutral-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-neutral-700 border-0 rounded-md p-3 text-white focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-neutral-700 border-0 rounded-md p-3 text-white focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-neutral-700 border-0 rounded-md p-3 text-white focus:ring-2 focus:ring-primary-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full flex justify-center items-center gap-2"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;