import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize navigation arrays to prevent re-renders
  const leftNavigation = useMemo(() => [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
  ], []);

  const rightNavigation = useMemo(() => [
    { name: 'Download', href: '#download' },
    { name: 'Contact', href: '#contact' },
  ], []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 xs:px-6 sm:px-8 lg:px-12">
          {/* Left Navigation */}
          <div className="hidden lg:flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {leftNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="text-white text-xs font-light tracking-wide">
              Creative studio
            </div>
          </div>

          {/* Center Brand */}
          <div className="flex-1 flex justify-center">
            <span className="text-lg xs:text-xl sm:text-2xl font-bold text-white uppercase tracking-widest">
              WeSphere
            </span>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {rightNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 xs:px-6 pt-4 pb-6 space-y-4">
              <div className="space-y-3">
                <div className="text-white text-xs font-light tracking-wide mb-3">
                  Creative studio
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {leftNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2 px-3 rounded-lg hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  {rightNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2 px-3 rounded-lg hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
