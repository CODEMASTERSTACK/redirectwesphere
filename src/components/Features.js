import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  CreditCard, 
  Shield, 
  Gamepad2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const Features = () => {
  const leftColumnFeatures = [
    {
      icon: User,
      title: 'Personalized Sphere Profiles',
      description: 'Each user owns a unique Sphere Card with strengths, weaknesses, habits, and nature reflected as a 2D animated character.'
    },
    {
      icon: CreditCard,
      title: 'Sphere Card System',
      description: 'Claim your Unclaimed Card through interactive animation to unlock your Sphere identity and full app access.'
    }
  ];

  const rightColumnFeatures = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Supabase Authentication with Firebase storage ensures secure user login and data protection for all users.'
    },
    {
      icon: Gamepad2,
      title: 'Gamified Experience',
      description: 'Earn XP by playing games, collect badges, participate in weekly Sphere Challenges, and unlock achievements.'
    },
    {
      icon: Sparkles,
      title: 'Dynamic Content',
      description: 'Firebase Remote Config allows dynamic updates of visuals, content, and features without app updates.'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-none">
                FEATURES
              </h2>
            </div>
            
            <div className="space-y-2 sm:space-y-4">
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Core</span>
                <br />
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">Capabilities</span>
              </div>
            </div>

            {/* Abstract Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white transform rotate-45 flex items-center justify-center"
            >
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white transform -rotate-45" />
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Column - 2 Features */}
              <div className="space-y-8 sm:space-y-12">
                {leftColumnFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight text-left">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - 3 Features */}
              <div className="space-y-8 sm:space-y-12">
                {rightColumnFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight text-left">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
