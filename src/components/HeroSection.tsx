import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Shield, 
  Sparkles, 
  Box, 
  User, 
  Compass 
} from 'lucide-react';
import { CONTACT_INFO, EXECUTIVE_METRICS } from '../data/portfolioData.ts';
import { PhotoPlaceholder } from './PhotoPlaceholder.tsx';
import { FloatingMonolith3D } from './FloatingMonolith3D.tsx';
import { Card3D } from './Card3D.tsx';

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
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle Cinematic Parallax Background Glows */}
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
            {/* Ambient Top Tag with 3D Depth */}
            <motion.div 
              variants={itemFadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300 tracking-wider uppercase">
                Executive Systems Engineer & Founder
              </span>
            </motion.div>

            {/* Main Headline with Staggered Line Reveal */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-display">
                <motion.span 
                  variants={headlineLineVariants} 
                  className="text-white block"
                >
                  Engineering
                </motion.span>
                <motion.span 
                  variants={headlineLineVariants} 
                  className="text-gradient block"
                >
                  Mission-Critical Systems
                </motion.span>
                <motion.span 
                  variants={headlineLineVariants} 
                  className="text-zinc-400 font-normal text-3xl sm:text-4xl lg:text-5xl block mt-1"
                >
                  with Cinematic Craft.
                </motion.span>
              </h1>
            </div>

            {/* Subtext */}
            <motion.p 
              variants={itemFadeUp}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed"
            >
              I am <span className="text-white font-medium">Muhammad Mujahid</span>, Founder of{' '}
              <a 
                href={CONTACT_INFO.agencyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 underline underline-offset-4 decoration-cyan-500/50 hover:decoration-cyan-300 transition-colors"
              >
                Axorks
              </a>
              . I architect high-concurrency web platforms, autonomous AI pipelines, and bespoke liquid glass interfaces designed to scale effortlessly and command industry authority.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemFadeUp}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-emerald-500/40 text-emerald-300 font-semibold text-sm backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Consultation</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-medium text-sm backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Services & Pricing</span>
              </motion.button>
            </motion.div>

            {/* Verified Tech Badges */}
            <motion.div 
              variants={itemFadeUp}
              className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400"
            >
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider mr-1">Core Mastery:</span>
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
              {/* Top View Mode Switcher */}
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Viewport Dimension</span>
                </span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setHeroMode('portrait')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      heroMode === 'portrait'
                        ? 'bg-white/15 text-white font-semibold shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3 h-3 text-cyan-400" />
                    <span>Portrait</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroMode('monolith3d')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                      heroMode === 'monolith3d'
                        ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3 h-3 text-cyan-400" />
                    <span>3D Core</span>
                  </button>
                </div>
              </div>

              {/* Viewport Frame with Soft 3D Perspective */}
              <Card3D maxTilt={6} glowColor="rgba(56, 189, 248, 0.2)">
                {heroMode === 'portrait' ? (
                  <PhotoPlaceholder
                    id="executive-hero-portrait"
                    variant="hero"
                    label="Muhammad Mujahid - Executive Portrait"
                    defaultPhoto="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                  />
                ) : (
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel-glow border border-cyan-500/20 flex flex-col justify-between p-6 bg-gradient-to-b from-cyan-950/20 via-zinc-950 to-indigo-950/20">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        THREE.JS ENGINE: ACTIVE
                      </span>
                      <span>60 FPS GYRO</span>
                    </div>

                    <div className="w-full h-full flex items-center justify-center">
                      <FloatingMonolith3D />
                    </div>

                    <div className="text-center z-10">
                      <div className="text-xs font-mono text-cyan-400">Interactive Spatial Geometry</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Move cursor to distort gyroscopic orbit</div>
                    </div>
                  </div>
                )}
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

        {/* Executive Metrics Bar with 3D Soft Tilt Cards & Staggered Scroll Animation */}
        <motion.div 
          variants={metricsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {EXECUTIVE_METRICS.map((metric, idx) => (
            <motion.div key={idx} variants={metricCardVariants}>
              <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.12)">
                <div className="glass-panel p-5 rounded-2xl border border-white/[0.06] relative overflow-hidden group hover:border-white/20 transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {metric.value}
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
