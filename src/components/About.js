import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

const About = () => {

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black min-h-screen relative">
      <div className="container-custom h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 h-full">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12 lg:space-y-16"
          >
            {/* A LITTLE ABOUT US Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                  <div 
                    className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(90deg, #d1d5db 0%, #f3f4f6 50%, #9ca3af 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                    }}
                  >
                    A LITTLE
                  </div>
                  <div className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight mt-1 sm:mt-2">
                    ABOUT US
                  </div>
                </div>
              </div>

              {/* Hand-drawn Doodle */}
              <div className="relative">
                <svg 
                  width="150" 
                  height="45" 
                  viewBox="0 0 200 60" 
                  className="absolute -left-2 sm:-left-4 -top-1 sm:-top-2 w-32 sm:w-40 md:w-48 lg:w-52"
                >
                  <path
                    d="M 10 20 Q 30 10 50 25 Q 70 40 90 30 Q 110 20 130 35 Q 150 50 170 40 Q 190 30 200 35"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />
                  <path
                    d="M 180 35 L 200 35"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
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

            {/* About Text */}
            <div className="text-right space-y-4 sm:space-y-6">
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                WeSphere blends personality, design, and play into one app where every user's identity becomes an adventure, not just a profile. Our vision is to make self-expression more fun and personalized through gamified social interactions.
              </p>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                Built with Flutter for cross-platform support, powered by Supabase Authentication and Firebase, WeSphere transforms your social and emotional traits into beautiful, character-inspired digital identities.
              </p>
            </div>

            {/* Read More Link */}
            <div className="flex justify-end">
              <Link
                to="/about"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 group"
              >
                <span className="text-xs sm:text-sm">Read more</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-200">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;