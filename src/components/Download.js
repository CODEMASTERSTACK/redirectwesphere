import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download as DownloadIcon, 
  ArrowUpRight
} from 'lucide-react';
import GradientButton from './GradientButton';

const Download = () => {
  const downloadOption = {
    description: 'Download WeSphere app and start your journey',
    buttonText: 'Download App',
    href: '#'
  };

  return (
    <section id="download" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black min-h-screen relative">
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
            {/* DOWNLOAD APP Section */}
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
                    DOWNLOAD
                  </div>
                  <div className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight mt-1 sm:mt-2">
                    THE APP
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

            {/* Download Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Download Info */}
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
                  <DownloadIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm sm:text-base md:text-lg">
                    {downloadOption.description}
                  </p>
                </div>
              </div>

              {/* Gradient Download Button */}
              <div className="flex justify-center">
                <GradientButton
                  size="lg"
                  className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                  gradientColors={[
                    "#ff6d1b",
                    "#ffee55", 
                    "#5bff89",
                    "#4d8aff",
                    "#6b5fff",
                    "#ff64f9",
                    "#ff6565"
                  ]}
                  animationSpeed={3}
                  glowEffect={true}
                  glowSize={6}
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <span>{downloadOption.buttonText}</span>
                    <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
