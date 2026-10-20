import React from 'react';
import { motion } from 'motion/react';
import { Bot, Sparkles, Brain, Search, Layers, ShieldCheck } from 'lucide-react';

export const AiConnectivityMesh: React.FC = () => {
  const nodes = [
    {
      id: 'google',
      label: 'Google Search',
      tag: 'SEO Core Engine',
      x: 50,
      y: 14,
      color: '#38bdf8',
      status: 'Rank #1 Focus',
      icon: Search
    },
    {
      id: 'chatgpt',
      label: 'ChatGPT & OpenAI',
      tag: 'GEO Discovery',
      x: 84,
      y: 32,
      color: '#10b981',
      status: 'Directly Cited',
      icon: Bot
    },
    {
      id: 'gemini',
      label: 'Google Gemini',
      tag: 'Multimodal Vector',
      x: 74,
      y: 74,
      color: '#c084fc',
      status: 'Entity Graph',
      icon: Sparkles
    },
    {
      id: 'claude',
      label: 'Anthropic Claude',
      tag: 'Deep Reasoning',
      x: 26,
      y: 74,
      color: '#f97316',
      status: 'Context Cited',
      icon: Layers
    },
    {
      id: 'perplexity',
      label: 'Perplexity AI',
      tag: 'AEO Direct Answer',
      x: 16,
      y: 32,
      color: '#818cf8',
      status: 'Source Verified',
      icon: Brain
    }
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-emerald-500/25 bg-gradient-to-b from-emerald-950/20 via-zinc-950/90 to-cyan-950/20 p-4 sm:p-8 select-none shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
      {/* Background Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
      />

      {/* ------------------------------------------------------------- */}
      {/* MOBILE VIEW (sm:hidden) — Completely Unclipped, Clean List     */}
      {/* ------------------------------------------------------------- */}
      <div className="sm:hidden flex flex-col items-center space-y-4 relative z-10 py-1">
        {/* Central Core */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full text-center p-4 rounded-2xl glass-panel border border-emerald-400/40 bg-zinc-950/95 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
              Visibility Hub
            </span>
          </div>
          <div className="text-base font-extrabold text-white font-display">
            Your Brand Platform
          </div>
          <p className="text-[11px] font-mono text-zinc-400 mt-1">
            Single Source of Truth for Google & Modern AI
          </p>
        </motion.div>

        {/* 5 Full Unclipped Node Cards */}
        <div className="grid grid-cols-1 gap-2.5 w-full">
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.id}
                className="p-3 rounded-2xl glass-panel border border-white/10 bg-zinc-950/85 flex items-center justify-between gap-3 shadow-md"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${node.color}15`, color: node.color, border: `1px solid ${node.color}35` }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white font-display leading-snug">
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {node.tag}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                  <span className="text-zinc-300">{node.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP & TABLET VIEW (hidden sm:flex) — 5-Node Constellation   */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden sm:flex relative w-full h-[470px] lg:h-[490px] items-center justify-center">
        {/* SVG Connecting Vector Paths & Radar Circles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="beamGoogle" x1="50%" y1="50%" x2="50%" y2="14%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="beamChatGPT" x1="50%" y1="50%" x2="84%" y2="32%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="beamGemini" x1="50%" y1="50%" x2="74%" y2="74%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="beamClaude" x1="50%" y1="50%" x2="26%" y2="74%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="beamPerplexity" x1="50%" y1="50%" x2="16%" y2="32%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Primary Connecting Vector Paths */}
          <line x1="50" y1="50" x2="50" y2="14" stroke="url(#beamGoogle)" strokeWidth="0.4" strokeDasharray="2 1.5" />
          <line x1="50" y1="50" x2="84" y2="32" stroke="url(#beamChatGPT)" strokeWidth="0.4" strokeDasharray="2 1.5" />
          <line x1="50" y1="50" x2="74" y2="74" stroke="url(#beamGemini)" strokeWidth="0.4" strokeDasharray="2 1.5" />
          <line x1="50" y1="50" x2="26" y2="74" stroke="url(#beamClaude)" strokeWidth="0.4" strokeDasharray="2 1.5" />
          <line x1="50" y1="50" x2="16" y2="32" stroke="url(#beamPerplexity)" strokeWidth="0.4" strokeDasharray="2 1.5" />

          {/* Concentric Radar Rings */}
          <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(16, 185, 129, 0.22)" strokeWidth="0.3" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(129, 140, 248, 0.12)" strokeWidth="0.2" strokeDasharray="3 3" />
        </svg>

        {/* Central Core: The Visibility Hub */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-5 rounded-2xl glass-panel border border-emerald-400/40 bg-zinc-950/95 shadow-[0_0_50px_rgba(16,185,129,0.3)] max-w-xs"
        >
          {/* Pulsing Core Ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 blur-md pointer-events-none" />

          <div className="relative flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
              Visibility Hub
            </span>
          </div>
          <div className="text-base font-extrabold text-white font-display">
            Your Brand Platform
          </div>
          <div className="text-[10px] font-mono text-zinc-400 mt-1">
            Omni-Channel Discovery Core
          </div>
        </motion.div>

        {/* Outer 5 AI & Search Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className="absolute z-10 px-3.5 py-3 rounded-2xl glass-panel border border-white/10 hover:border-white/30 backdrop-blur-xl bg-zinc-950/90 transition-all duration-300 group hover:scale-105 shadow-xl min-w-[170px]"
            >
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                  style={{ backgroundColor: `${node.color}15`, color: node.color, border: `1px solid ${node.color}35` }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-display leading-tight">
                    {node.label}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 mt-0.5">
                    {node.tag}
                  </div>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-[9px] font-mono">
                <span className="text-zinc-400">{node.status}</span>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: node.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
