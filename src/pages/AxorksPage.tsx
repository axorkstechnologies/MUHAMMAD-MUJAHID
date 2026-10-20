import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Zap, ArrowRight, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AxorksSection } from '../components/AxorksSection.tsx';
import { AXORKS_DATA, CONTACT_INFO } from '../data/portfolioData.ts';
import { Card3D } from '../components/Card3D.tsx';
import { TechCrosshair, TelemetryBadge } from '../components/motion/HudElements.tsx';

export const AxorksPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pt-24 pb-20"
    >
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Digital Engineering Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Axorks <span className="text-gradient">Studio</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            High-Impact Software Engineering & Product Studio. Founded by Muhammad Mujahid to build reliable web applications, institutional ERPs, and search visibility with direct founder delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Founder-Led Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Zap className="w-3.5 h-3.5" /> Zero Bureaucracy
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Globe className="w-3.5 h-3.5" /> Global Remote Operations
            </span>
          </div>
        </div>
      </div>

      {/* Main Axorks Section with 3D Monolith */}
      <AxorksSection />

      {/* Studio Space & Culture Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Studio Workspace & Culture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Where Precision Engineering Happens
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Axorks was built from the ground up to solve the friction inherent in large agencies. We maintain a hyper-focused engineering footprint, investing our energy into deep architectural research, code profiling, and bespoke UI interactions.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Direct Slack/WhatsApp channel with the lead architect—no intermediaries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Sprint reviews delivered with staging URLs every 7 days.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Full automated CI/CD pipeline and automated test coverage.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={AXORKS_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-mono transition"
              >
                <span>Visit Axorks.com</span>
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.2)">
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl aspect-[16/10]">
                <img
                  src="/Images/Axorks_Office.jpeg"
                  alt="Axorks Studio Headquarters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                  <div className="font-mono text-white text-xs">Axorks Headquarters</div>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    High-Tech Office
                  </span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>

      {/* Bottom Conversion Action Hook */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                PARTNER WITH AXORKS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                Partner with an Elite Digital Product Studio
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl font-light">
                Whether launching a greenfield product or revamping legacy institutional systems, Axorks delivers speed, polish, and commercial resilience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Muhammad, I would like to partner with Axorks Studio.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Initiate Studio Talk</span>
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
