import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServicesPricingSection } from '../components/ServicesPricingSection.tsx';
import { AeoGeoSection } from '../components/AeoGeoSection.tsx';
import { CONTACT_INFO } from '../data/portfolioData.ts';

export const ServicesPage: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Executive Services & Commercial Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Transparent Pricing. <span className="text-gradient">Sovereign Results.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Fixed milestone pricing, zero hidden scope creep, and direct founder leadership. From custom enterprise LMS and banking cores to high-ROI AI Visibility (SEO + AEO + GEO).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Code Ownership
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Weekly Deployments
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              Direct Founder Access
            </span>
          </div>
        </div>
      </div>

      {/* Main Services, AI Visibility, and Estimator Component */}
      <ServicesPricingSection />

      {/* AEO & GEO Deep Knowledge & Entity FAQ Section */}
      <AeoGeoSection />

      {/* Bottom Conversion Action Hook */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-emerald-500/30 bg-emerald-950/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                CUSTOM CONTRACTS AVAILABLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                Need a Bespoke Engagement or Architecture Retainer?
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl font-light">
                We craft tailored engineering agreements, fractional CTO arrangements, and phased system rollouts adapted to your capital allocation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Muhammad, I reviewed your Services page and would like to request a custom proposal.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Custom Proposal</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Go to Contact Page</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
