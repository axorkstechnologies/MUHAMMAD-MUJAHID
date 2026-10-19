import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Clock, ShieldCheck, Mail, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactSection } from '../components/ContactSection.tsx';
import { CONTACT_INFO } from '../data/portfolioData.ts';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pt-24 pb-20"
    >
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Executive Communication</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Initiate Direct <span className="text-gradient">Dialogue</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Skip the agency middlemen. Speak directly with Muhammad Mujahid to evaluate system requirements, timeline projections, or architectural feasibility.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Response Under 2 Hours
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Confidentiality / NDA Ready
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              100% IP Ownership
            </span>
          </div>
        </div>
      </div>

      {/* Main Contact Section with WhatsApp, Form, and Channels */}
      <ContactSection />
    </motion.div>
  );
};
