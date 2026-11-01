import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Users, Clock, Award, CheckCircle2 } from 'lucide-react';
import { CLIENT_TRUST_MARKS } from '../data/portfolioData.ts';

export const TrustBar: React.FC = () => {
  return (
    <div className="w-full py-8 border-y border-white/[0.06] bg-[#06060c]/80 backdrop-blur-md relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-cyan-500/[0.03] blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Top Proof Ribbon */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold">
              Verified Production Track Record
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-400 font-light hidden sm:inline">
              Engineered with founder-direct precision &amp; zero agency middlemen
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <strong className="text-white font-semibold">40,000+</strong> End Users
            </span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-white font-semibold">99.9%</strong> Uptime SLA
            </span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <strong className="text-white font-semibold">100%</strong> IP Ownership
            </span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <strong className="text-white font-semibold">&lt; 2h</strong> WhatsApp Reply
            </span>
          </div>
        </div>

        {/* Institutional Production Badges Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {CLIENT_TRUST_MARKS.map((mark, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2, borderColor: 'rgba(255, 255, 255, 0.15)' }}
              className="p-3.5 rounded-2xl bg-white/[0.015] border border-white/[0.05] flex flex-col justify-between space-y-1.5 group transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {mark.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="text-[10px] text-zinc-400 font-mono leading-none">
                {mark.sector}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-white/[0.04]">
                <span className="text-zinc-500 truncate">{mark.scale}</span>
                <span className="text-emerald-400/90 font-medium ml-1 shrink-0">{mark.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
