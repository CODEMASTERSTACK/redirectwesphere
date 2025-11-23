import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Download from './components/Download';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import { playHoverSound, playClickSound } from './utils/audio';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('main > *', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'main',
          start: 'top 80%',
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleInteraction = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        if (e.type === 'mouseenter') playHoverSound();
        if (e.type === 'click') playClickSound();
      }
    };

    document.addEventListener('mouseenter', handleInteraction, true);
    document.addEventListener('click', handleInteraction, true);

    return () => {
      document.removeEventListener('mouseenter', handleInteraction, true);
      document.removeEventListener('click', handleInteraction, true);
    };
  }, []);

  return (
    <div className="App relative min-h-screen text-white overflow-hidden">
      <ThreeBackground />
      <Header />
      <main ref={mainRef} className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <About />
              <Download />
            </>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
