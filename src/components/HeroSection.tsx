import React, { useState, useRef, Suspense, lazy } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  ExternalLink, 
  Box, 
  User 
} from 'lucide-react';
import { CONTACT_INFO, EXECUTIVE_METRICS } from '../data/portfolioData.ts';
import { PhotoPlaceholder } from './PhotoPlaceholder.tsx';
import { Card3D } from './Card3D.tsx';
import { KineticText } from './motion/KineticText.tsx';
import { RollingCounter } from './motion/RollingCounter.tsx';
import { MagneticWrapper } from './motion/MagneticWrapper.tsx';

// Lazy load 3D monolith so Three.js doesn't bloat the initial critical bundle
const FloatingMonolith3D = lazy(() =>
  import('./FloatingMonolith3D.tsx').then((m) => ({ default: m.FloatingMonolith3D }))
);
interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [heroMode, setHeroMode] = useState<'portrait' | 'monolith3d'>('portrait');
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-40px' });

  // Subtle parallax background effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const parallaxBg1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxBg2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Motion variants for staged entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const headlineLineVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const metricsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const metricCardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle Parallax Background Glows */}
      <motion.div 
        style={{ y: parallaxBg1, opacity: parallaxOpacity }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: parallaxBg2, opacity: parallaxOpacity }}
        className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Executive Copy & Actions */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Refined Executive Status & Identity Indicator */}
            <motion.div 
              variants={itemFadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-200 font-medium">Muhammad Mujahid</span>
                <span className="text-zinc-600">•</span>
                <span className="text-cyan-400">Founder & Systems Architect</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-600">|</span>
                <span>Karachi (UTC+5)</span>
                <span className="text-zinc-600">|</span>
                <span className="text-emerald-400 font-medium">40k+ Active Users Supported</span>
              </div>
            </motion.div>

            {/* Main Headline with 2026 Kinetic Text Reveal */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-display break-words">
                <KineticText
                  text="Custom Web Platforms & Intelligent AI Visibility."
                  className="block text-white"
                  highlightWords={['Custom', 'Web', 'Platforms', 'Intelligent', 'Visibility.']}
                  highlightClassName="text-gradient block"
                  delay={0.1}
                />
                <motion.span 
                  variants={headlineLineVariants} 
                  className="text-zinc-400 font-normal text-2xl sm:text-3xl lg:text-4xl block mt-2"
                >
                  Engineered to Run Your Business.
                </motion.span>
              </h1>
            </div>

            {/* Subtext - Clear Strategic Positioning */}
            <motion.p 
              variants={itemFadeUp}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed"
            >
              I design and build high-performance web platforms and modern AI search discovery systems for serious companies. You work directly with me—no agency account managers, no junior developers, and 100% ownership of every line of code.
            </motion.p>

            {/* Primary Action Buttons - Optimized for High Client Conversion with Magnetic Physics */}
            <motion.div 
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full"
            >
              <MagneticWrapper strength={0.25} className="w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-black font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>Message on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </MagneticWrapper>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:gap-3 w-full sm:w-auto">
                <MagneticWrapper strength={0.18} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>Services & Pricing</span>
                  </motion.button>
                </MagneticWrapper>

                <MagneticWrapper strength={0.18} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>Case Studies</span>
                  </motion.button>
                </MagneticWrapper>
              </div>
            </motion.div>

            {/* Verified Trust Signals */}
            <motion.div 
              variants={itemFadeUp}
              className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400"
            >
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Direct reply within 2 hours</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1 h-1 rounded-full bg-indigo-400" />
                <span>Direct Founder Delivery</span>
              </div>
            </motion.div>

            {/* Core Tech Stack Badges */}
            <motion.div 
              variants={itemFadeUp}
              className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400"
            >
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider mr-1">Stack:</span>
              {['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'AI Pipelines', 'Cloud Infra'].map((tech) => (
                <motion.span
                  whileHover={{ y: -2, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-zinc-300 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Depth Card with Portrait & 3D Monolith Switcher */}
          <motion.div 
            variants={rightColumnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              {/* View Mode Switcher */}
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-mono text-zinc-400">
                  Perspective
                </span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setHeroMode('portrait')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      heroMode === 'portrait'
                        ? 'bg-white/15 text-white font-medium shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Portrait</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroMode('monolith3d')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      heroMode === 'monolith3d'
                        ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5 text-cyan-400" />
                    <span>3D</span>
                  </button>
                </div>
              </div>

              {/* Viewport Frame with Soft 3D Perspective */}
              <Card3D maxTilt={6} glowColor="rgba(56, 189, 248, 0.25)">
                <div className="relative rounded-3xl overflow-hidden border border-white/15">
                  {heroMode === 'portrait' ? (
                    <div className="relative">
                      <PhotoPlaceholder
                        id="executive-hero-portrait"
                        variant="hero"
                        label="Muhammad Mujahid - Systems Architect"
                        defaultPhoto="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                      />
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs z-20 shadow-xl">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-white font-medium">Muhammad Mujahid</span>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-300">Founder & Systems Architect</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel-glow border border-cyan-500/20 flex flex-col justify-between p-6 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-indigo-950/20">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                          WebGL Canvas
                        </span>
                        <span>Interactive 3D</span>
                      </div>

                      <div className="w-full h-full flex items-center justify-center">
                        <Suspense fallback={
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-6 h-6 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin" />
                            <span className="text-[10px] font-mono text-zinc-500">Initializing 3D Canvas...</span>
                          </div>
                        }>
                          <FloatingMonolith3D />
                        </Suspense>
                      </div>

                      <div className="text-center z-10">
                        <div className="text-xs font-mono text-cyan-400">Interactive Spatial Model</div>
                        <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Move cursor to rotate perspective</div>
                      </div>
                    </div>
                  )}
                </div>
              </Card3D>
              
              {/* Quick Info Under Card */}
              <div className="mt-4 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Karachi, PK (UTC+5)</span>
                </span>
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Metrics Bar with 3D Soft Tilt Cards & 2026 Rolling Numbers */}
        <motion.div 
          variants={metricsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {EXECUTIVE_METRICS.map((metric, idx) => (
            <motion.div key={idx} variants={metricCardVariants}>
              <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.15)">
                <div className="glass-panel p-3.5 sm:p-5 rounded-2xl border border-white/[0.06] relative overflow-hidden group hover:border-white/20 transition-all duration-300 h-full">
                  <div className="text-2xl sm:text-4xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors">
                    <RollingCounter value={metric.value} />
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    {metric.caption}
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-colors pointer-events-none" />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
