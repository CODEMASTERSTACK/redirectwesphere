import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Mail, 
  ChevronLeft,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Download', href: '#download' },
    ],
    company: [
      { name: 'About', href: '#about' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/privacy' },
    ],
  };


  return (
    <footer className="bg-black text-white">
      <div className="container-custom">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12 lg:space-y-16"
            >
              {/* GET IN TOUCH Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  <div>
                    <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                      GET IN
                    </div>
                    <div className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-tight">
                      TOUCH
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="w-24 sm:w-32 h-px bg-white opacity-30"></div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12 lg:space-y-16"
            >
              {/* Logo */}
              <div className="flex justify-end">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-white transform rotate-45 flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transform -rotate-45" />
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-right space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-end space-x-2 sm:space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-sm sm:text-base md:text-lg break-all">leosen.krish@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-end space-x-2 sm:space-x-3">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <span className="text-white text-sm sm:text-base md:text-lg">Made with Curiosity</span>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="text-right space-y-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {Object.entries(footerLinks).map(([category, links]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">
                        {category}
                      </h4>
                      <ul className="space-y-1">
                        {links.map((link) => (
                          <li key={link.name}>
                            {link.href.startsWith('/') ? (
                              <Link
                                to={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                              >
                                {link.name}
                              </Link>
                            ) : (
                              <a
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                              >
                                {link.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-right pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-gray-400 text-xs sm:text-sm">
                  © {currentYear} WeSphere. All rights reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
