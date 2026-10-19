import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from './data/portfolioData.ts';
import { LiquidBackground } from './components/LiquidBackground.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';

// Page Imports
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ExperiencePage } from './pages/ExperiencePage.tsx';
import { AxorksPage } from './pages/AxorksPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { SEOHead } from './components/SEOHead.tsx';

// Reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedAppContent() {
  const location = useLocation();

  // Thin cyan scroll progress indicator that fills as user scrolls
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Bar at the top of the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 z-50 origin-left shadow-[0_0_12px_rgba(56,189,248,0.75)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Interactive Liquid Canvas & Ambient Lighting (persistent across all pages) */}
      <LiquidBackground />

      {/* Floating Liquid Glass Navigation */}
      <Navbar />

      {/* Animated Multi-Page Routes */}
      <main className="relative z-10 flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/axorks" element={<AxorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Floating High-Conversion WhatsApp Channel */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-950/90 hover:bg-zinc-900 border border-emerald-500/40 hover:border-emerald-400 text-white shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.35)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="relative">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute inset-0 opacity-75" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider uppercase leading-none">
            Direct Line
          </span>
          <span className="text-xs font-bold text-zinc-100 flex items-center gap-1">
            <span>WhatsApp Architect</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </motion.a>

      {/* Global Cinematic Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOHead />
      <AnimatedAppContent />
    </BrowserRouter>
  );
}
