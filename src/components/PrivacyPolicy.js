import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  FileText,
  Users,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="privacy" className="section-padding bg-black min-h-screen relative">
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
                PRIVACY
              </div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif uppercase tracking-tight mt-2 sm:mt-3">
                POLICY
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
          {/* Important Notice */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Important Notice</h2>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 sm:p-6">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                All characters in WeSphere are created for entertainment and fun purposes only. They are fictional representations and should not be taken seriously or used as a basis for real-life decisions.
              </p>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                If you want to remove any character or have concerns, please contact us at: <span className="text-yellow-400 font-semibold break-all">leosen.krish@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Privacy Policy</h2>
            </div>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg">
              Last Updated: <span className="text-white font-semibold">{new Date().toLocaleDateString()}</span>
            </p>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              WeSphere is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our application.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center">Information We Collect</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Personal Information</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Account information (email, username)</li>
                  <li>• Character preferences and interactions</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Technical Data</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• App usage analytics (anonymized)</li>
                  <li>• Device information for app optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center">How We Use Your Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Service Improvement</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• To provide and improve our services</li>
                  <li>• To personalize your character experience</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Communication & Security</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• To communicate with you about the app</li>
                  <li>• To ensure app security and prevent abuse</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="text-green-400 font-semibold">We do not sell, trade, or rent your personal information</span> to third parties. Your data is stored securely and used only for the purposes stated in this policy.
              </p>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Terms of Service</h2>
            </div>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              By using WeSphere, you agree to these terms of service. Please read them carefully.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center">User Responsibilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">App Usage</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Use the app responsibly and respectfully</li>
                  <li>• Do not create offensive or inappropriate content</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Community Guidelines</h4>
                <ul className="text-white/80 text-sm sm:text-base space-y-1 sm:space-y-2">
                  <li>• Respect other users and their characters</li>
                  <li>• Follow all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Character Usage Policy */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Character Usage Policy</h2>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-yellow-400 text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">ENTERTAINMENT ONLY</h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                All characters in WeSphere are purely fictional and created for entertainment purposes only. They should not be taken seriously or used as a basis for real-life decisions.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-white/20">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Contact Information</h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              If you have any questions, concerns, or requests regarding this privacy policy or the app, please contact us:
            </p>
            <div className="bg-white/5 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-white text-sm sm:text-base lg:text-lg font-semibold break-all">Email: leosen.krish@gmail.com</p>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg">Response Time: We typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
