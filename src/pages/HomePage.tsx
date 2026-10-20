import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  Globe, 
  Layers,
  ArrowUpRight,
  Database,
  Terminal,
  Activity,
  Bot,
  Search,
  Brain,
  Shield,
  Workflow
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection.tsx';
import { Card3D } from '../components/Card3D.tsx';
import { AeoGeoSection } from '../components/AeoGeoSection.tsx';
import { CONTACT_INFO, PROJECTS_DATA } from '../data/portfolioData.ts';
import { TelemetryBadge, TechCrosshair, HairlineRuler, HudCorners, ScanlineOverlay } from '../components/motion/HudElements.tsx';
import { RollingCounter } from '../components/motion/RollingCounter.tsx';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleHeroNavigate = (sectionId: string) => {
    switch (sectionId) {
      case 'projects':
        navigate('/projects');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'axorks':
        navigate('/axorks');
        break;
      case 'experience':
        navigate('/experience');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const agrotrace = PROJECTS_DATA.find((p) => p.id === 'agrotrace') || PROJECTS_DATA[0];
  const mediverse = PROJECTS_DATA.find((p) => p.id === 'mediverse') || PROJECTS_DATA[1];
  const phss = PROJECTS_DATA.find((p) => p.id === 'phss') || PROJECTS_DATA[3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative"
    >
      {/* 1. Cinematic Hero Section */}
      <HeroSection onNavigate={handleHeroNavigate} />

      {/* 2. Asymmetric Architectural Bento System ($10k+ Bespoke Tier) */}
      <section className="py-20 border-y border-white/[0.08] bg-[#050508]/80 relative overflow-hidden">
        {/* Subtle Engineering Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Section Engineering Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  Services & Transparent Pricing
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
                What I Build & Transparent Pricing
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACCEPTING Q2 CLIENTS
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">FOUNDER-DIRECT</span>
            </div>
          </div>

          {/* Asymmetric 7-Col vs 5-Col Bento Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Primary Focal Anchor (7 Cols): Custom Intelligent Systems */}
            <div className="lg:col-span-7">
              <Card3D maxTilt={3} glowColor="rgba(99, 102, 241, 0.2)" className="h-full">
                <div className="rounded-3xl p-7 sm:p-9 glass-panel-glow border border-indigo-500/30 bg-gradient-to-b from-indigo-950/25 via-zinc-950/90 to-zinc-950 flex flex-col justify-between h-full shadow-[0_20px_60px_rgba(79,70,229,0.15)] group hover:border-indigo-400/50 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Subtle Background Circuit Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-indigo-300 font-semibold uppercase tracking-wider block">
                            Custom Business Platforms & ERPs
                          </span>
                          <span className="text-xs font-mono text-zinc-400">Fixed-Scope Delivery • 6-10 Weeks</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                        From $8,000
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-indigo-200 transition-colors">
                        Custom Business Platforms & Institutional ERPs
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        Complete, tailor-made software systems that replace messy spreadsheets, fragmented tools, and slow manual paperwork with one unified, secure platform built specifically for your operations.
                      </p>
                    </div>

                    {/* Architectural Specifications Readout */}
                    <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3 font-mono">
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-white/[0.06] pb-2">
                        <span className="text-indigo-300 font-semibold">System Performance Standards</span>
                        <span className="text-emerald-400">100% Code Ownership</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-white/[0.02]">
                          <div className="text-[9px] text-zinc-500">CAPACITY</div>
                          <div className="font-bold text-white">10K+ Seats</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02]">
                          <div className="text-[9px] text-zinc-500">SPEED</div>
                          <div className="font-bold text-cyan-400">&lt; 40ms RPC</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02]">
                          <div className="text-[9px] text-zinc-500">INTEGRITY</div>
                          <div className="font-bold text-emerald-400">Zero Loss</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02]">
                          <div className="text-[9px] text-zinc-500">STACK</div>
                          <div className="font-bold text-indigo-300">TypeScript / Postgres</div>
                        </div>
                      </div>
                    </div>

                    {/* Systems Included List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Academic Campus ERPs (From $8,000)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Clinical & Healthcare Platforms (From $10,000)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Biometric Attendance & Telemetry Bridges</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Automated Billing, Fees & WhatsApp Alerts</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                      to="/services"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.35)] transition-all cursor-pointer"
                    >
                      <span>Explore Custom Systems Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[11px] font-mono text-zinc-400 text-center sm:text-right">
                      Turnkey delivery: 6 - 10 weeks
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Secondary Staggered Modules (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Module 1: AI Search & Answer Visibility (SEO/AEO/GEO) */}
              <Card3D maxTilt={4} glowColor="rgba(16, 185, 129, 0.25)" className="flex-1">
                <div className="rounded-3xl p-6 sm:p-7 glass-panel-glow border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-zinc-950/90 to-zinc-950 h-full flex flex-col justify-between shadow-[0_16px_40px_rgba(16,185,129,0.12)] hover:border-emerald-400/50 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                          Search & AI Discovery
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        SAVE $300/MO
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white font-display">
                        Search Engine & AI Discovery Suite
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light">
                        Don't just rank on Google. Make sure modern AI assistants (ChatGPT, Perplexity, Gemini, Claude) actively recommend your company by name to prospective buyers.
                      </p>
                    </div>

                    {/* Micro Pricing Tiers */}
                    <div className="grid grid-cols-4 gap-2 text-center font-mono py-2 bg-black/40 rounded-xl border border-white/[0.06]">
                      <div className="p-1.5">
                        <div className="text-[9px] text-zinc-500">SEO</div>
                        <div className="text-xs font-bold text-white">$250</div>
                      </div>
                      <div className="p-1.5">
                        <div className="text-[9px] text-zinc-500">AEO</div>
                        <div className="text-xs font-bold text-white">$450</div>
                      </div>
                      <div className="p-1.5">
                        <div className="text-[9px] text-zinc-500">GEO</div>
                        <div className="text-xs font-bold text-white">$550</div>
                      </div>
                      <div className="p-1.5 bg-emerald-500/15 rounded-lg border border-emerald-500/30">
                        <div className="text-[9px] text-emerald-300 font-bold">ALL-IN</div>
                        <div className="text-xs font-black text-emerald-400">$950</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>See How AI Search Works</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-500">Monthly Retainer</span>
                  </div>
                </div>
              </Card3D>

              {/* Module 2: Axorks Studio & Direct Technical Leadership */}
              <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.18)" className="flex-1">
                <div className="rounded-3xl p-6 sm:p-7 glass-panel border border-white/10 bg-zinc-950/80 h-full flex flex-col justify-between shadow-lg hover:border-cyan-400/40 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                          Product Studio & Fractional CTO
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">Founder-Direct</span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white font-display">
                        Axorks Web Apps & Fractional Tech Lead
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light">
                        High-velocity development for ambitious products. We build fast, modern web applications that look and feel like $50k products. MVPs from $3,500 and Fractional CTO at $4,200/mo.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                      <span className="flex items-center gap-1 text-cyan-300">
                        <Terminal className="w-3.5 h-3.5" /> Strict TypeScript
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-emerald-300">
                        <Shield className="w-3.5 h-3.5" /> 30-Day SLA Warranty
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to="/axorks"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Axorks Philosophy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-500">axorks.com</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship Projects Monograph (Asymmetric Editorial Rhythm) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Production Case Studies
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
                Production Systems & Proven Case Studies
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl font-light">
                Real platforms solving real operational problems across agriculture, healthcare, and education. Tested under daily production load.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-mono transition group cursor-pointer"
            >
              <span>Explore All Case Studies ({PROJECTS_DATA.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* SPOTLIGHT 01: Panoramic Flagship System (AgroTrace) */}
          <Card3D maxTilt={3} glowColor="rgba(16, 185, 129, 0.2)">
            <article className="glass-panel glass-panel-glow rounded-3xl p-7 sm:p-10 border border-emerald-500/25 relative overflow-hidden group shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: System Monograph */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                      Flagship Case Study • AI Agronomy
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE IN PRODUCTION
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                      {agrotrace.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                      {agrotrace.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {agrotrace.description}
                  </p>

                  {/* Telemetry Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 font-mono">
                    {agrotrace.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/[0.02] text-center">
                        <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          <RollingCounter value={m.value} />
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      to="/projects"
                      className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-zinc-100 transition shadow cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs font-mono text-zinc-500">140+ Distributed IoT Clusters</span>
                  </div>
                </div>

                {/* Right: Panoramic Interactive Visual */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950">
                    <HudCorners color="rgba(16, 185, 129, 0.4)" size={14} className="z-30" />
                    <ScanlineOverlay className="z-20" />
                    
                    <img
                      src="/Images/Agrotrace.jpeg"
                      alt="AgroTrace AI Telemetry Engine"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                    {/* Live Telemetry Overlay */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2.5 py-1 rounded bg-black/70 border border-white/15 text-emerald-400 backdrop-blur-md flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        STREAM: 12.5K EVT/SEC
                      </span>
                      <span className="px-2.5 py-1 rounded bg-black/70 border border-white/15 text-zinc-300 backdrop-blur-md">
                        LATENCY: &lt; 24MS
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase">SYSTEM DOMAIN</div>
                        <div className="text-sm font-bold text-white font-mono">IoT Agronomy Telemetry & Yield AI</div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-1 rounded-lg bg-black/60 border border-emerald-500/30">
                        98.4% Confidence Score
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Card3D>

          {/* SECONDARY SYSTEMS: Asymmetric 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* MediVerse */}
            <Card3D maxTilt={4} glowColor="rgba(99, 102, 241, 0.2)">
              <article className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between h-full group hover:border-indigo-400/40 transition-all shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono">
                      {mediverse.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">{mediverse.status}</span>
                  </div>

                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
                    <img
                      src="/Images/Mediverse.jpeg"
                      alt={mediverse.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                      <span>{mediverse.title}</span>
                      <span className="text-indigo-400">FHIR R4 Compliant</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                      {mediverse.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">{mediverse.subtitle}</p>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 line-clamp-2">
                      {mediverse.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06] text-center font-mono">
                    {mediverse.metrics.map((m, idx) => (
                      <div key={idx} className="p-1.5">
                        <div className="text-xs font-bold text-white">{m.value}</div>
                        <div className="text-[9px] text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
                  >
                    <span>Explore Healthcare Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-zinc-500">180K+ Encounters</span>
                </div>
              </article>
            </Card3D>

            {/* PHSS School ERP */}
            <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.2)">
              <article className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between h-full group hover:border-cyan-400/40 transition-all shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                      {phss.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">{phss.status}</span>
                  </div>

                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
                    <img
                      src="/Images/PHSS Homepage.jpg"
                      alt={phss.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                      <span>{phss.title}</span>
                      <span className="text-cyan-400">Institutional ERP</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {phss.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">{phss.subtitle}</p>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 line-clamp-2">
                      {phss.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06] text-center font-mono">
                    {phss.metrics.map((m, idx) => (
                      <div key={idx} className="p-1.5">
                        <div className="text-xs font-bold text-white">{m.value}</div>
                        <div className="text-[9px] text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                  >
                    <span>Explore Campus ERP Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-zinc-500">3,200+ Active Seats</span>
                </div>
              </article>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 4. AEO & GEO Direct Knowledge & FAQ Section */}
      <AeoGeoSection />

      {/* 5. Direct Executive Technical Consultation Hook */}
      <section className="py-24 border-t border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Founder Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight max-w-3xl mx-auto">
            Have a project in mind? Let's discuss it directly.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
            No sales reps, no discovery decks. Send me a quick WhatsApp message to discuss your timeline, scope, and ballpark budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Muhammad on WhatsApp: {CONTACT_INFO.whatsapp}</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Guaranteed Response &lt; 2h
            </span>
            <span>•</span>
            <span>100% Code & Repository Handover</span>
            <span>•</span>
            <span>Milestone-Based Escrow</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
