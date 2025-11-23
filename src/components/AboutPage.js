import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users,
  Target,
  Code,
  Globe,
  Heart,
  ArrowLeft,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about-page" className="section-padding bg-black min-h-screen relative">
      {/* Back Button */}
      <div className="fixed top-16 left-4 sm:left-6 z-50">
        <Link
          to="/"
          className="flex items-center space-x-1 sm:space-x-2 text-white hover:text-gray-300 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-xs sm:text-sm font-medium hidden xs:block">Back to Home</span>
        </Link>
      </div>

      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 pt-16 sm:pt-20"
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight leading-tight">
              <div 
                className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, #d1d5db 0%, #f3f4f6 50%, #9ca3af 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                }}
              >
                ABOUT
              </div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif uppercase tracking-tight mt-2 sm:mt-3">
                WESPHERE
              </div>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-24 sm:w-32 h-px bg-white opacity-30 mx-auto mt-4 sm:mt-6 lg:mt-8"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12 px-4"
        >
          {/* What is WeSphere */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">What is WeSphere?</h2>
            </div>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              WeSphere is a unique and innovative character discovery and claiming app that brings together students, friends, and classmates in a fun, interactive way. The app allows users to explore, claim, and manage virtual character personalities based on traits and information collected from different students in their class and friend circles.
            </p>
          </div>

          {/* Purpose & Vision */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Purpose & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Main Purpose</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Students can discover character representations</li>
                  <li>• Friends can explore personality traits</li>
                  <li>• Users can claim and personalize characters</li>
                  <li>• Communities can engage through sharing</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Why It Was Made</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Foster Social Connections</li>
                  <li>• Entertainment Value</li>
                  <li>• Educational Aspect</li>
                  <li>• Community Building</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">How It Works</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Character Discovery</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Browse virtual character personalities</li>
                  <li>• Search by name or traits</li>
                  <li>• Explore character details</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Character Claiming</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Request to claim characters</li>
                  <li>• Admin approval system</li>
                  <li>• Manage claimed characters</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Character Creation</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Request new characters</li>
                  <li>• Detailed character profiles</li>
                  <li>• Customizable character cards</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Social Features</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Invite friends to join</li>
                  <li>• Share character collections</li>
                  <li>• Explore others' characters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Team */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Development Team</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Primary Developer</h3>
                <p className="text-white/80 text-sm sm:text-base mb-2">Krish</p>
                <p className="text-white/60 text-xs sm:text-sm break-all">leosen.krish@gmail.com</p>
                <p className="text-white/80 text-sm sm:text-base mt-2">Main developer and creator of WeSphere</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Admin & Co-Developer</h3>
                <p className="text-white/80 text-sm sm:text-base mb-2">Kripal Singh</p>
                <p className="text-white/60 text-xs sm:text-sm break-all">kripalsingh.work@gmail.com</p>
                <p className="text-white/80 text-sm sm:text-base mt-2">Admin system developer and backend architect</p>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Technical Architecture</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Technology Stack</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Frontend: Flutter</li>
                  <li>• Backend: Supabase</li>
                  <li>• Analytics: Firebase</li>
                  <li>• Database: PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Key Features</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Secure Authentication</li>
                  <li>• Role-Based Access</li>
                  <li>• Real-time Updates</li>
                  <li>• Analytics Integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Target Audience</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Primary Users</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Students (High school & college)</li>
                  <li>• Friend Groups</li>
                  <li>• Character Enthusiasts</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Use Cases</h3>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Classroom Activities</li>
                  <li>• Friend Group Exploration</li>
                  <li>• Personal Entertainment</li>
                  <li>• Community Building</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Availability */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Platform Availability</h2>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-2">Android</h3>
                  <p className="text-white/80 text-sm sm:text-base">Google Play Store</p>
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-2">iOS</h3>
                  <p className="text-white/80 text-sm sm:text-base">Apple App Store</p>
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-2">Web</h3>
                  <p className="text-white/80 text-sm sm:text-base">Any Modern Browser</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              WeSphere represents more than just a character discovery app – it's a platform that brings people together through the shared joy of character exploration and personality discovery.
            </p>
            <div className="bg-white/5 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-white text-sm sm:text-base lg:text-lg font-semibold break-all">Email: leosen.krish@gmail.com</p>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg">Response Time: 24-48 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
