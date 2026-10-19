import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { LiquidBackground } from './components/LiquidBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ServicesPricingSection } from './components/ServicesPricingSection.tsx';
import { AxorksSection } from './components/AxorksSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll-to-top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Thin cyan scroll progress indicator that fills as user scrolls
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'services', 'axorks', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Bar at the top of the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.75)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Interactive Liquid Canvas & Ambient Lighting */}
      <LiquidBackground />

      {/* Floating Liquid Glass Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={handleNavigate} />

      {/* Main Content Sections with subtle page transitions */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex flex-col"
      >
        <HeroSection onNavigate={handleNavigate} />
        <ProjectsSection />
        <ServicesPricingSection />
        <AxorksSection />
        <ExperienceSection />
        <ContactSection />
      </motion.main>

      {/* Cinematic Executive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
