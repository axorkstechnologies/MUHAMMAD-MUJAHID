import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  ExternalLink, 
  Calendar,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_INFO, EXECUTIVE_METRICS } from '../data/portfolioData.ts';
import { PhotoPlaceholder } from './PhotoPlaceholder.tsx';
import { Card3D } from './Card3D.tsx';
import { KineticText } from './motion/KineticText.tsx';
import { RollingCounter } from './motion/RollingCounter.tsx';
import { MagneticWrapper } from './motion/MagneticWrapper.tsx';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  onOpenStrategyCall?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenStrategyCall }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const headlineLineVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, scale: 0.96, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const metricsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const metricCardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-[90vh] pt-32 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden surface-base"
    >
      {/* Ambient Parallax Glows */}
      <motion.div 
        style={{ y: parallaxBg1, opacity: parallaxOpacity }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        style={{ y: parallaxBg2, opacity: parallaxOpacity }}
        className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/[0.05] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Sharp Executive Copy & Actions */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col items-start space-y-5"
          >
            {/* Status Pill */}
            <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-200 font-semibold">Muhammad Mujahid</span>
                <span className="text-zinc-600">•</span>
                <span className="text-cyan-400">Systems Architect</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-300">40K+ Production Users</span>
                <span className="text-zinc-600">|</span>
                <span className="text-emerald-400 font-medium">Direct Delivery</span>
              </div>
            </motion.div>

            {/* Headline — High-Impact & Concise */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] font-display break-words">
                <KineticText
                  text="Custom Web Platforms & Business Systems."
                  className="block text-white"
                  highlightWords={['Custom', 'Web', 'Platforms', 'Business', 'Systems.']}
                  highlightClassName="text-white block"
                  delay={0.08}
                />
                <motion.span 
                  variants={headlineLineVariants} 
                  className="text-zinc-400 font-normal text-lg sm:text-2xl block mt-2.5"
                >
                  Architected with founder-direct precision. Zero junior handoffs.
                </motion.span>
              </h1>
            </div>

            {/* Subtext — Radical reduction, punchy outcome */}
            <motion.p 
              variants={itemFadeUp}
              className="text-sm sm:text-base text-zinc-300 max-w-xl font-light leading-relaxed"
            >
              I build bespoke web applications, SaaS operating engines, and AI discovery systems for founders ready to scale. You get 100% repository ownership, strict TypeScript, and weekly live deployments.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full"
            >
              {/* Primary: WhatsApp Direct */}
              <MagneticWrapper strength={0.2} className="w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>Message on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </MagneticWrapper>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2.5 w-full sm:w-auto">
                {/* Secondary: Book Strategy Call */}
                <MagneticWrapper strength={0.15} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onOpenStrategyCall ? onOpenStrategyCall() : onNavigate('contact')}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5 text-zinc-900" />
                    <span>Book Strategy Call</span>
                  </motion.button>
                </MagneticWrapper>

                {/* Tertiary: Case Studies */}
                <MagneticWrapper strength={0.15} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>Case Studies</span>
                  </motion.button>
                </MagneticWrapper>
              </div>
            </motion.div>

            {/* Verified Trust Strip */}
            <motion.div 
              variants={itemFadeUp}
              className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-zinc-400"
            >
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Reply &lt; 2 hours</span>
              </div>
              <span className="text-zinc-700">·</span>
              <span className="text-zinc-300">100% Code &amp; IP Ownership</span>
              <span className="text-zinc-700">·</span>
              <span className="text-zinc-300">Weekly Deploys</span>
            </motion.div>

            {/* Pricing Anchors — Updated to New Rules */}
            <motion.div
              variants={itemFadeUp}
              className="pt-0.5 text-[11px] font-mono text-zinc-500 flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span className="text-zinc-400 font-medium">Custom Platforms from $900</span>
              <span>•</span>
              <span className="text-zinc-400">Web Presence from $450</span>
              <span>•</span>
              <span className="text-emerald-400/90 font-medium">AI Visibility setup $300 or $99/mo</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Static Executive Founder Portrait (No Toggle, No 3D Switcher) */}
          <motion.div 
            variants={rightColumnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.2)">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                  <PhotoPlaceholder
                    id="executive-hero-portrait"
                    variant="hero"
                    label="Muhammad Mujahid - Systems Architect"
                    defaultPhoto="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                  />
                  
                  {/* Subtle Founder Identity Badge on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs z-20 shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <div className="text-white font-semibold text-xs leading-none">Muhammad Mujahid</div>
                        <div className="text-[10px] font-mono text-cyan-300 mt-1">Founder &amp; Principal Architect</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      Direct Delivery
                    </span>
                  </div>
                </div>
              </Card3D>
              
              {/* Quick Info Under Portrait */}
              <div className="mt-3.5 px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-zinc-400">Karachi (UTC+5) • Global Remote</span>
                </span>
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Metrics Bar — High Impact Scannable Counters */}
        <motion.div 
          variants={metricsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-white/[0.06] grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {EXECUTIVE_METRICS.map((metric, idx) => (
            <motion.div key={idx} variants={metricCardVariants}>
              <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.12)">
                <div className="surface-card surface-card-hover p-4 sm:p-5 rounded-2xl relative overflow-hidden group h-full">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    <RollingCounter value={metric.value} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 font-mono mt-0.5 leading-snug">
                    {metric.caption}
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
