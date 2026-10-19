import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectsSection } from '../components/ProjectsSection.tsx';
import { CONTACT_INFO } from '../data/portfolioData.ts';

export const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pt-24 pb-20"
    >
      {/* Page Title & Context Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CASE STUDIES & PRODUCTION SYSTEMS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Flagship Engineering <span className="text-gradient">Portfolio</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Explore live production architectures, mission-critical healthcare engines, agricultural telemetry pipelines, and luxury digital flagship stores designed and built by Muhammad Mujahid.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> 100% Production Tested
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Real Verifiable Metrics
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" /> Zero Boilerplate
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Projects Suite */}
      <ProjectsSection />

      {/* Conversion Banner: Custom Build Inquiry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                BESPOKE SYSTEM DEVELOPMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                Have a Complex Technical Project in Mind?
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl font-light">
                Whether you need a custom AI telemetry platform, high-concurrency healthcare EHR, or luxury commercial storefront, we provide architecture proposals and fixed milestone estimates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss On WhatsApp</span>
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Check Services & Pricing</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
