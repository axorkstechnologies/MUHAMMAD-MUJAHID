import React, { useState, useEffect } from 'react';
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
      {/* Interactive Liquid Canvas & Ambient Lighting */}
      <LiquidBackground />

      {/* Floating Liquid Glass Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={handleNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onNavigate={handleNavigate} />
        <ProjectsSection />
        <ServicesPricingSection />
        <AxorksSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Cinematic Executive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
