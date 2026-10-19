import React from 'react';
import { motion } from 'motion/react';
import { Bot, Sparkles, Brain, Search } from 'lucide-react';

export const AiConnectivityMesh: React.FC = () => {
  const nodes = [
    {
      id: 'google',
      label: 'Google Search',
      tag: 'SEO Engine',
      x: 14,
      y: 18,
      color: '#38bdf8',
      status: 'Rank #1 Focus',
      icon: Search
    },
    {
      id: 'chatgpt',
      label: 'ChatGPT & OpenAI',
      tag: 'GEO Pipeline',
      x: 86,
      y: 18,
      color: '#10b981',
      status: 'Context Cited',
      icon: Bot
    },
    {
      id: 'perplexity',
      label: 'Perplexity Engine',
      tag: 'AEO Direct Answer',
      x: 16,
      y: 82,
      color: '#818cf8',
      status: 'Source Verified',
      icon: Brain
    },
    {
      id: 'gemini',
      label: 'Google Gemini',
      tag: 'Multimodal Vector',
      x: 84,
      y: 82,
      color: '#c084fc',
      status: 'Knowledge Graph',
      icon: Sparkles
    }
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-emerald-500/25 bg-gradient-to-b from-emerald-950/20 via-zinc-950/80 to-cyan-950/20 p-4 sm:p-6 select-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Background Cybernetic Grid & Radar Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" 
      />

      {/* ------------------------------------------------------------- */}
      {/* MOBILE-FIRST VIEW (sm:hidden) — Clean, Touch-Friendly Topology */}
      {/* ------------------------------------------------------------- */}
      <div className="sm:hidden flex flex-col items-center space-y-4 relative z-10 py-2">
        {/* Central Core */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full text-center p-3.5 rounded-2xl glass-panel border border-emerald-400/40 bg-zinc-950/90 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
              Central Visibility Core
            </span>
          </div>
          <div className="text-sm font-extrabold text-white font-display">
            Your Brand Platform
          </div>
          <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
            Omni-Channel Engine • Google & AI Synergy
          </p>
        </motion.div>

        {/* 2x2 Clean Grid of Connected AI Engines */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.id}
                className="p-2.5 rounded-xl glass-panel border border-white/10 bg-zinc-950/80 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${node.color}15`, color: node.color, border: `1px solid ${node.color}35` }}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white font-display truncate">
                      {node.label}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400">
                      {node.tag}
                    </div>
                  </div>
                </div>
                <div className="pt-1 border-t border-white/[0.06] flex items-center justify-between text-[8px] font-mono">
                  <span className="text-zinc-500 truncate">{node.status}</span>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: node.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP & TABLET VIEW (hidden sm:flex) — Panoramic Constellation */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden sm:flex relative w-full aspect-[2/1] items-center justify-center">
        {/* SVG Connecting Light Beams & Data Pulses */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="beamGrad1" x1="50%" y1="50%" x2="14%" y2="18%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beamGrad2" x1="50%" y1="50%" x2="86%" y2="18%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beamGrad3" x1="50%" y1="50%" x2="16%" y2="82%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beamGrad4" x1="50%" y1="50%" x2="84%" y2="82%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Primary Connecting Vector Paths */}
          <line x1="50" y1="50" x2="14" y2="18" stroke="url(#beamGrad1)" strokeWidth="0.4" strokeDasharray="1.5 1" />
          <line x1="50" y1="50" x2="86" y2="18" stroke="url(#beamGrad2)" strokeWidth="0.4" strokeDasharray="1.5 1" />
          <line x1="50" y1="50" x2="16" y2="82" stroke="url(#beamGrad3)" strokeWidth="0.4" strokeDasharray="1.5 1" />
          <line x1="50" y1="50" x2="84" y2="82" stroke="url(#beamGrad4)" strokeWidth="0.4" strokeDasharray="1.5 1" />

          {/* Concentric Radar Rings */}
          <circle cx="50" cy="50" r="14" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.3" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="0.2" strokeDasharray="3 3" />
        </svg>

        {/* Central Core: The Sovereign Visibility Hub */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 flex flex-col items-center justify-center text-center p-4 rounded-2xl glass-panel border border-emerald-400/40 bg-zinc-950/90 shadow-[0_0_40px_rgba(16,185,129,0.35)]"
        >
          {/* Pulsing Core Ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 blur-md pointer-events-none" />

          <div className="relative flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
              Visibility Hub
            </span>
          </div>
          <div className="text-sm sm:text-base font-extrabold text-white font-display">
            Your Brand Platform
          </div>
          <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
            Omni-Channel Visibility Core
          </div>
        </motion.div>

        {/* Outer AI & Search Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className="absolute z-10 p-2.5 sm:p-3 rounded-xl glass-panel border border-white/10 hover:border-white/30 backdrop-blur-xl bg-zinc-950/85 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${node.color}15`, color: node.color, border: `1px solid ${node.color}35` }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white font-display leading-tight whitespace-nowrap">
                    {node.label}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 whitespace-nowrap">
                    {node.tag}
                  </div>
                </div>
              </div>
              <div className="mt-1 pt-1 border-t border-white/[0.06] flex items-center justify-between text-[8px] sm:text-[9px] font-mono">
                <span className="text-zinc-500">{node.status}</span>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: node.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
