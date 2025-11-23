import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Zap, Shield } from 'lucide-react';

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight sm:leading-none"
              >
                <div className="font-black mb-2 sm:mb-0">THIS IS</div>
                <div className="font-black mb-2 sm:mb-0">WE-SPHERE</div>
                <div className="font-light">COMMUNITY</div>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto mt-6 sm:mt-8 px-4 sm:px-0"
              >
                WeSphere is a personality-based interactive app that transforms your social and emotional traits into a beautiful, character-inspired profile. Make your personality come alive as a 2D animated character in a digital universe.
              </motion.p>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
