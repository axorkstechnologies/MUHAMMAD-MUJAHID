import React from 'react';
import { ExternalLink, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap, ArrowRight, Box } from 'lucide-react';
import { AXORKS_DATA, CONTACT_INFO } from '../data/portfolioData.ts';
import { Card3D } from './Card3D.tsx';

export const AxorksSection: React.FC = () => {
  return (
    <section id="axorks" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Box with 3D Depth */}
        <Card3D maxTilt={2.5} glowColor="rgba(56, 189, 248, 0.15)">
          <div className="glass-panel glass-panel-glow rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STUDIO FLAGSHIP</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
                    Axorks
                  </h2>
                  <p className="text-base sm:text-lg font-mono text-cyan-300">
                    {AXORKS_DATA.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  {AXORKS_DATA.summary}
                </p>

                {/* Core Principles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {AXORKS_DATA.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1.5 shadow-sm"
                    >
                      <div className="text-xs font-bold text-white font-display">
                        {principle.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed font-light">
                        {principle.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={AXORKS_DATA.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-2xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition flex items-center gap-2 group shadow-xl cursor-pointer"
                  >
                    <span>Explore axorks.com</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={`https://wa.me/923082789210?text=${encodeURIComponent(
                      'Hi Muhammad, I want to discuss engaging Axorks Studio for our engineering roadmap.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Direct WhatsApp Inquiries</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Right Capability Matrix Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-950/85 border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Axorks Capability Matrix
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Active Deployments
                  </span>
                </div>

                <div className="space-y-3">
                  {AXORKS_DATA.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-3 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Principal: Muhammad Mujahid</span>
                  <span>Karachi, PK • Global Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};
