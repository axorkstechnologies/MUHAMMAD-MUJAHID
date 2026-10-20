import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  Code, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  FileCheck, 
  Lock, 
  Award,
  Sliders,
  CheckCircle2,
  Layers,
  Cpu,
  Search,
  Eye,
  Brain,
  Globe,
  Bot,
  TrendingUp,
  Landmark,
  GraduationCap,
  Server,
  Rocket,
  ChevronRight,
  Shield,
  CheckCheck,
  DollarSign,
  Quote
} from 'lucide-react';
import { PRICING_PLANS, PRICING_ADDONS, calculateCustomEstimate, formatWhatsAppQuoteMessage } from '../utils/pricing.ts';
import { CONTACT_INFO, TESTIMONIALS_DATA } from '../data/portfolioData.ts';
import { Card3D } from './Card3D.tsx';
import { AiConnectivityMesh } from './motion/AiConnectivityMesh.tsx';

// Reusable scroll-triggered animated section wrapper
const MotionSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ServicesPricingSection: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('flagship');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['ai_engine']);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [engagementModel, setEngagementModel] = useState<'all' | 'sprint' | 'retainer'>('all');

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const estimate = calculateCustomEstimate(selectedPlanId, selectedAddons);
  const whatsAppQuoteUrl = `https://wa.me/923082789210?text=${formatWhatsAppQuoteMessage(
    clientName,
    clientEmail,
    selectedPlanId,
    selectedAddons,
    clientNotes
  )}`;

  const getTierRoiBadge = (id: string) => {
    switch (id) {
      case 'mvp':
        return 'Accelerates Launch by 6-8 Weeks';
      case 'flagship':
        return 'Highest Commercial Conversion & Speed';
      case 'retainer':
        return '70% Savings vs. In-House Lead';
      default:
        return 'Guaranteed SLA';
    }
  };

  const visiblePlans = engagementModel === 'all'
    ? PRICING_PLANS
    : engagementModel === 'sprint'
    ? PRICING_PLANS.filter((p) => p.id !== 'retainer')
    : PRICING_PLANS.filter((p) => p.id === 'retainer');

  return (
    <section id="services" className="relative py-28 scroll-mt-20 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-[-10%] w-[550px] h-[550px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <MotionSection className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>DIRECT SPECIALIST & STUDIO ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Custom Web Platforms & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Intelligent Visibility</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            Direct founder execution with Muhammad Mujahid for custom software platforms and modern AI search visibility (SEO, AEO, GEO from $250 – $950/mo), supported by enterprise-grade vertical platforms deployed through Axorks Studio.
          </p>
        </MotionSection>

        {/* HIGH-TRUST GUARANTEES RIBBON */}
        <MotionSection delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            {
              icon: <Lock className="w-4 h-4 text-cyan-400" />,
              code: 'IP.100',
              title: '100% IP & Repo Ownership',
              desc: 'Complete code repository, licenses & database schema handover upon delivery'
            },
            {
              icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
              code: 'SLA.30D',
              title: '30-Day SLA Warranty',
              desc: 'Complimentary hypercare bug resolution & runtime stabilization'
            },
            {
              icon: <Code className="w-4 h-4 text-indigo-400" />,
              code: 'TYPE.STRICT',
              title: 'Strict TypeScript Core',
              desc: 'Strictly typed codebase, modular tests & 95+ Lighthouse performance'
            },
            {
              icon: <FileCheck className="w-4 h-4 text-amber-400" />,
              code: 'ESCROW.GOV',
              title: 'Milestone Escrow',
              desc: 'Progress-gated deliverables with direct executive sign-off & transparency'
            }
          ].map((item, idx) => (
            <Card3D key={idx} maxTilt={4} glowColor="rgba(255,255,255,0.08)">
              <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/[0.08] flex flex-col justify-between h-full shadow-lg hover:border-white/20 transition-all duration-300 relative">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-3">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 font-semibold">{item.code}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-display">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug font-light">{item.desc}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </MotionSection>

        {/* Quick Jump Service Navigator for Instant Conversion */}
        <MotionSection delay={0.12} className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 sm:mx-0 px-4 sm:px-0 mb-16 sm:mb-20 scroll-smooth">
          <a
            href="#category-web-apps"
            className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/35 transition cursor-pointer flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
            <span>1. Custom Web Platforms (Direct)</span>
          </a>
          <a
            href="#category-ai-visibility"
            className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 transition cursor-pointer flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(16,185,129,0.25)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span>2. AI & Search Visibility (SEO/AEO/GEO)</span>
          </a>
          <a
            href="#category-intelligent-systems"
            className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/35 transition cursor-pointer flex items-center gap-2 font-bold"
          >
            <span>3. Axorks Studio Systems ($8k+)</span>
          </a>
          <a
            href="#pricing-calculator"
            className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/10 transition cursor-pointer"
          >
            <span>4. Scope Estimator ↓</span>
          </a>
        </MotionSection>

        {/* ========================================================================= */}
        {/* 1. CUSTOM WEB PLATFORMS & SAAS APPLICATIONS (DIRECT SPECIALIST) */}
        {/* ========================================================================= */}
        <MotionSection delay={0.15} className="mb-28 scroll-mt-24">
          <div id="category-web-apps">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
                  <Code className="w-3.5 h-3.5" />
                  <span>DIRECT SPECIALIST OFFER • FOUNDER-LED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
                  Custom Web Platforms & SaaS Applications
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  Founder-led custom development for serious businesses, funded startups, and leadership teams. 100% direct founder execution, strict TypeScript, and complete code ownership.
                </p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="text-xs font-mono text-cyan-400/90 block">Strict Typing & Zero Junior Handoffs</span>
                <span className="text-[11px] text-zinc-500 font-mono">From $1,200 to $7,500+</span>
              </div>
            </div>

            {/* Asymmetric Grid: 7-col Web App vs 5-col Professional Site */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* 3. Custom Web Application Development (7 cols) */}
              <div className="lg:col-span-7 h-full">
                <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.2)" className="h-full">
                  <div className="relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full glass-panel border border-cyan-500/25 bg-gradient-to-b from-cyan-950/20 via-zinc-950/80 to-zinc-950 shadow-[0_20px_50px_rgba(6,182,212,0.12)] hover:border-cyan-400/40 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                          <Code className="w-3.5 h-3.5 text-cyan-400" />
                          <span>CATEGORY 03 // FULL-STACK</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-400">~4-6 Weeks</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        Custom Web Application Development
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                        Custom SaaS platforms, real-time analytics dashboards, and multi-tenant operational applications built on modern typed architectures with high-velocity deployment.
                      </p>

                      <div className="my-6 p-4 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/20 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider block">Custom Application Scope</span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-3xl sm:text-4xl font-black font-display text-white">From $3,500</span>
                            <span className="text-xs font-mono text-zinc-400">fixed sprint delivery</span>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                          React + Node/Postgres
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Engineering Inclusions:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            'Modern interactive UI with smooth animations and responsive design',
                            'Full-Stack API architecture (Node.js/Express, REST/GraphQL, WebSockets)',
                            'Robust PostgreSQL database schema design with automated migrations',
                            'Authentication with Role-Based Access Control (RBAC) & session security',
                            'Automated CI/CD deployment pipelines & cloud hosting configuration',
                            '100% intellectual property transfer & complete clean repository'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.08]">
                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20am%20interested%20in%20Custom%20Web%20Application%20Development%20(From%20%243%2C500)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Discuss Web Application Build</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* 4. Professional Website Development (5 cols) */}
              <div className="lg:col-span-5 h-full">
                <Card3D maxTilt={5} glowColor="rgba(244, 114, 182, 0.2)" className="h-full">
                  <div className="relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full glass-panel border border-pink-500/25 bg-gradient-to-b from-pink-950/20 via-zinc-950/80 to-zinc-950 shadow-[0_20px_50px_rgba(244,114,182,0.12)] hover:border-pink-400/40 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono">
                          <Globe className="w-3.5 h-3.5 text-pink-400" />
                          <span>CATEGORY 04 // WEB PRESENCE</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-400">~2-3 Weeks</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        Professional Website Development
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                        High-conversion corporate websites, portfolio showcases, and brand platforms crafted with polished visual design, 60fps micro-interactions, and 95+ Lighthouse speed.
                      </p>

                      <div className="my-6 p-4 rounded-2xl bg-pink-500/[0.06] border border-pink-500/20 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] font-mono text-pink-300 uppercase tracking-wider block">Professional Web Build</span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-3xl sm:text-4xl font-black font-display text-white">From $1,200</span>
                            <span className="text-xs font-mono text-zinc-400">rapid turnaround</span>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[10px] font-mono">
                          Lighthouse 95+
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Engineering Inclusions:</div>
                        {[
                          '100% custom UI/UX design (zero boilerplate or cookie-cutter templates)',
                          'Fluid micro-interactions and smooth scroll motion physics',
                          'Lighthouse 95+ performance, mobile responsiveness & accessibility tuning',
                          'On-page technical SEO & OpenGraph social preview configuration',
                          'Integrated contact forms, WhatsApp lead hooks & analytics setup',
                          'Domain routing, SSL certificate setup & 30 days post-launch support'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.08]">
                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20am%20interested%20in%20Professional%20Website%20Development%20(From%20%241%2C200)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-2xl bg-pink-500 hover:bg-pink-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(244,114,182,0.35)] transition-all duration-300 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Discuss Website Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </div>

            </div>
          </div>
        </MotionSection>


        {/* ========================================================================= */}
        {/* 2. HIGH-PRIORITY: AI & SEARCH VISIBILITY SERVICES (SEO / AEO / GEO) */}
        {/* ========================================================================= */}
        <MotionSection delay={0.2} className="mb-28 scroll-mt-24">
          <div id="category-ai-visibility">
            {/* Dominant Hero Banner Showcase Container */}
            <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-500/35 bg-gradient-to-b from-emerald-950/30 via-zinc-950/90 to-cyan-950/20 shadow-[0_24px_80px_rgba(16,185,129,0.18)] overflow-hidden">
              
              {/* Ambient Lighting Orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

              {/* Header Content */}
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Google • ChatGPT • Perplexity • Claude • Gemini</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
                  Modern Search Has Evolved. <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Get Found on Google AND Across AI Platforms.
                  </span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                  Your customers no longer just type into Google — they ask AI for recommendations. 
                  <span className="text-white font-medium"> Are you visible when ChatGPT, Perplexity, Gemini, and Claude answer questions about your industry?</span>
                </p>

                {/* Multi-Platform Badges */}
                <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  {[
                    { name: 'Google Search', icon: <Search className="w-3.5 h-3.5 text-amber-400" />, type: 'SEO Core' },
                    { name: 'ChatGPT Search', icon: <Bot className="w-3.5 h-3.5 text-emerald-400" />, type: 'GEO / LLM' },
                    { name: 'Perplexity AI', icon: <Brain className="w-3.5 h-3.5 text-cyan-400" />, type: 'AEO Engine' },
                    { name: 'Google Gemini', icon: <Cpu className="w-3.5 h-3.5 text-blue-400" />, type: 'GEO Engine' },
                    { name: 'Anthropic Claude', icon: <Layers className="w-3.5 h-3.5 text-orange-400" />, type: 'GEO Engine' }
                  ].map((plat, pIdx) => (
                    <div
                      key={pIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md hover:border-emerald-400/40 hover:bg-white/[0.07] transition-all"
                    >
                      {plat.icon}
                      <span className="font-semibold text-white">{plat.name}</span>
                      <span className="text-[10px] text-zinc-400 border-l border-white/15 pl-1.5">{plat.type}</span>
                    </div>
                  ))}
                </div>

                {/* 2026 Interactive AI & Search Engine Connectivity Motion Graphics Mesh */}
                <div className="my-8 max-w-4xl mx-auto">
                  <AiConnectivityMesh />
                </div>

                {/* Explainer Glossary Card */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-white/10 text-left">
                  <div className="p-3 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                      <Search className="w-3.5 h-3.5" />
                      <span>SEO (Search Engine)</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      Dominating traditional Google & Bing page-one rankings, organic keywords, and technical indexing.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                      <Bot className="w-3.5 h-3.5" />
                      <span>AEO (Answer Engine)</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      Optimizing for direct answer engines (Perplexity, voice assistants, and Google SGE / AI Overviews).
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold">
                      <Brain className="w-3.5 h-3.5" />
                      <span>GEO (Generative Engine)</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      Engineering your brand authority so LLMs (ChatGPT, Gemini, Claude) recommend you in synthesized responses.
                    </p>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* FEATURED POWERHOUSE CARD: Full Visibility Package ($950/mo) */}
              {/* ========================================================= */}
              <div className="relative mb-12">
                <Card3D maxTilt={5} glowColor="rgba(16, 185, 129, 0.35)">
                  <div className="relative rounded-3xl p-7 sm:p-10 bg-gradient-to-b from-emerald-950/50 via-zinc-950/95 to-zinc-950 border-2 border-emerald-400/60 ring-4 ring-emerald-400/15 shadow-[0_0_60px_rgba(16,185,129,0.3)] overflow-hidden">
                    
                    {/* Glowing Top Banner Pill */}
                    <div className="absolute top-0 right-0 sm:right-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black px-5 py-1.5 rounded-b-2xl font-mono text-xs font-black tracking-wider uppercase flex items-center gap-2 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-black fill-current" />
                      <span>FLAGSHIP HERO PACKAGE • SAVE $300/MONTH</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-0">
                      {/* Left Details (7 cols) */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                          <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>UNIFIED OMNICHANNEL VISIBILITY SUITE</span>
                        </div>
                        
                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display">
                          Full Visibility Package (SEO + AEO + GEO)
                        </h4>

                        <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                          The ultimate omni-channel search dominance machine. We ensure your business is discovered, cited, and recommended whenever high-intent prospects search on Google, query Perplexity, or prompt ChatGPT, Claude, and Gemini.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {[
                            'Full Technical SEO + Core Web Vitals 95+',
                            'AEO Answer Snippets & Perplexity Citations',
                            'GEO LLM Training & RAG Index Optimization',
                            'Knowledge Graph & Wikidata Entity Mapping',
                            'Monthly Executive AI Citation Scorecard',
                            'Direct WhatsApp Priority Strategy Channel'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Price & Call-to-action (5 cols) */}
                      <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/80 border border-emerald-500/30 flex flex-col justify-between space-y-6 shadow-2xl">
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">All-Inclusive Retainer</span>
                            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 font-mono text-[11px] line-through">
                              $1,250 / month
                            </span>
                          </div>

                          <div className="mt-3 flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-black font-display text-white text-gradient-cyan">
                              $950
                            </span>
                            <span className="text-xs font-mono text-zinc-400">/ month retainer</span>
                          </div>

                          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Includes Complete SEO ($250) + AEO ($450) + GEO ($550)</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <a
                            href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20want%20to%20enroll%20in%20the%20Full%20Visibility%20Package%20(SEO%20%2B%20AEO%20%2B%20GEO)%20for%20%24950%2Fmonth."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 cursor-pointer"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>Lock In Full Visibility Package ($950/mo)</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>

                          <div className="text-center text-[11px] font-mono text-zinc-400">
                            Month-to-month retainer • Cancel or upgrade anytime with 14-day notice
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* Individual AI & Search Services Grid (Asymmetric 3-col / 4-col / 5-col split) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Service 1: SEO (3 cols) */}
                <div className="lg:col-span-3 h-full">
                  <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.15)" className="h-full">
                    <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full glass-panel border border-cyan-500/20 bg-zinc-950/70 hover:border-cyan-400/40 transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                            <Search className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                            Google & Bing
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white font-display">
                          SEO (Search Engine)
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 min-h-[36px] font-light">
                          Dominate traditional Google page-one search results with technical rigor and authority.
                        </p>

                        <div className="my-5 pb-5 border-b border-white/[0.08]">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black font-display text-white">$250</span>
                            <span className="text-xs font-mono text-zinc-400">/ month</span>
                          </div>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">What it covers:</div>
                          {[
                            'Core Web Vitals & technical crawl audit',
                            'On-page Schema.org semantic tagging',
                            'Keyword research & topical clustering',
                            'High-authority backlink profiling',
                            'Google Search Console & analytics tracking'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20am%20interested%20in%20the%20SEO%20Service%20(%24250%2Fmonth)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition cursor-pointer"
                      >
                        <span>Start SEO ($250/mo)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card3D>
                </div>

                {/* Service 2: AEO (4 cols) */}
                <div className="lg:col-span-4 h-full">
                  <Card3D maxTilt={5} glowColor="rgba(16, 185, 129, 0.15)" className="h-full">
                    <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full glass-panel border border-emerald-500/20 bg-zinc-950/70 hover:border-emerald-400/40 transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            <Bot className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                            Perplexity & SGE
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white font-display">
                          AEO (Answer Engine)
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 min-h-[36px] font-light">
                          Capture featured snippet answers on voice assistants, Perplexity, and AI Overviews.
                        </p>

                        <div className="my-5 pb-5 border-b border-white/[0.08]">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black font-display text-white">$450</span>
                            <span className="text-xs font-mono text-zinc-400">/ month</span>
                          </div>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">What it covers:</div>
                          {[
                            'Perplexity & Google AI Overview citation targeting',
                            'Direct-answer syntax & structured Q&A schemas',
                            'Knowledge graph node creation & entity link',
                            'Conversational query & voice snippet capture',
                            'Real-time answer engine citation scoring'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20am%20interested%20in%20the%20AEO%20(Answer%20Engine%20Optimization)%20Service%20(%24450%2Fmonth)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition cursor-pointer"
                      >
                        <span>Start AEO ($450/mo)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card3D>
                </div>

                {/* Service 3: GEO (5 cols - High Demand AI Paradigm) */}
                <div className="lg:col-span-5 h-full">
                  <Card3D maxTilt={5} glowColor="rgba(168, 85, 247, 0.2)" className="h-full">
                    <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full glass-panel-glow border border-purple-500/30 bg-zinc-950/80 hover:border-purple-400/50 transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-400">
                            <Brain className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono text-purple-300 px-2.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 font-semibold">
                            ChatGPT • Claude • Gemini
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                            GEO (Generative Engine Optimization)
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 min-h-[36px] font-light">
                          Position your business inside LLM synthesis so AI chatbots directly recommend you in generated responses.
                        </p>

                        <div className="my-5 pb-5 border-b border-white/[0.08] flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black font-display text-white">$550</span>
                            <span className="text-xs font-mono text-zinc-400">/ month</span>
                          </div>
                          <span className="text-[10px] font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                            HIGH-GROWTH DEMAND
                          </span>
                        </div>

                        <div className="space-y-2.5 mb-6">
                          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">What it covers:</div>
                          {[
                            'LLM citation insertion & RAG corpus indexing',
                            'Multi-modal authority signals in AI datasets',
                            'Consensus prompt testing across ChatGPT, Claude & Gemini',
                            'Synthetic brand sentiment & entity calibration',
                            'Competitive AI recommendation positioning'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                              <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20am%20interested%20in%20the%20GEO%20(Generative%20Engine%20Optimization)%20Service%20(%24550%2Fmonth)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/40 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                      >
                        <span>Start GEO ($550/mo)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card3D>
                </div>

              </div>
            </div>
          </div>
        </MotionSection>


        {/* ========================================================================= */}
        {/* 3. AXORKS STUDIO VERTICAL SYSTEMS (ERP, Clinical, Banking)               */}
        {/* ========================================================================= */}
        <MotionSection delay={0.25} className="mb-28 scroll-mt-24">
          <div id="category-intelligent-systems">
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Axorks Studio Vertical Systems</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
                  Turnkey Production Platforms & Institutional ERPs
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  Pre-architected operating systems deployed under Muhammad Mujahid's direct architectural oversight with institutional SLAs, full staff onboarding, and complete code ownership.
                </p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="text-xs font-mono text-cyan-400/90 block">Architected by Muhammad Mujahid</span>
                <span className="text-[11px] text-zinc-500 font-mono">Delivered via Axorks Studio</span>
              </div>
            </div>

            {/* Asymmetric Cards Grid (5-col LMS vs 7-col Banking Core) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LMS System Card (5 cols) */}
              <div className="lg:col-span-5 h-full">
                <Card3D maxTilt={6} glowColor="rgba(99, 102, 241, 0.2)" className="h-full">
                  <div className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full glass-panel-glow border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 via-zinc-950/80 to-zinc-950/90 shadow-[0_20px_50px_rgba(79,70,229,0.15)] group hover:border-indigo-400/50 transition-all duration-500">
                    
                    {/* Accent Header Ribbon */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] font-mono text-indigo-300 font-medium">
                            Schools & Universities
                          </span>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-zinc-500" />
                          ~6-10 Weeks
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                        Custom LMS & Academic Campus ERP
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                        End-to-end academic operating ecosystem unifying multi-role student progression, faculty administration, biometric RFID attendance, and automated financial reconciliations.
                      </p>

                      {/* Price Banner */}
                      <div className="my-6 p-4 rounded-2xl bg-indigo-500/[0.06] border border-indigo-500/20 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider block">Institutional Package</span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-3xl sm:text-4xl font-black font-display text-white">From $8,000</span>
                            <span className="text-xs font-mono text-zinc-400">turnkey build</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                            <Check className="w-3 h-3" />
                            10,000+ Concurrency
                          </span>
                        </div>
                      </div>

                      {/* Capabilities List */}
                      <div className="space-y-3 mb-8">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                          Architectural Capabilities Included:
                        </div>
                        {[
                          'Multi-Tier Portals: Dedicated dashboards for Chancellor, Faculty, Student, and Parent',
                          'Automated Grading Engine: Continuous GPA computation & instant digital report cards',
                          'Biometric & RFID Ingestion: Campus entry logs with automated SMS/WhatsApp alerts',
                          'Fee Challan & Billing Automation: Dynamic barcode vouchers & online bank reconciliation',
                          'Digital Course Repositories: Syllabus distribution, assignment submissions & forums',
                          'Fault-Tolerant Infrastructure: PostgreSQL cluster, Redis caching & 99.9% uptime SLA'
                        ].map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div className="pt-6 border-t border-white/[0.08]">
                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20would%20like%20to%20discuss%20a%20Custom%20LMS%20for%20our%20School%20%2F%20University%20(Starting%20at%20%248%2C000)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-300 cursor-pointer group-hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Request LMS Architecture Scope</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <p className="text-[11px] font-mono text-center text-zinc-500 mt-2">
                        Verified architecture referenced from PHSS Institutional deployment
                      </p>
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* Banking System Card (7 cols - Dominant Enterprise Flagship) */}
              <div className="lg:col-span-7 h-full">
                <Card3D maxTilt={6} glowColor="rgba(16, 185, 129, 0.25)" className="h-full">
                  <div className="relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full glass-panel-glow border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/25 via-zinc-950/85 to-zinc-950 shadow-[0_24px_60px_rgba(16,185,129,0.2)] group hover:border-emerald-400/60 transition-all duration-500">
                    
                    {/* Enterprise Ribbon */}
                    <div className="absolute top-0 right-6 sm:right-10 px-4 py-1 rounded-b-xl bg-emerald-500/20 border-b border-x border-emerald-500/40 text-[10px] font-mono text-emerald-300 uppercase tracking-widest font-bold">
                      ENTERPRISE CORE // TIER-0
                    </div>

                    {/* Accent Header Ribbon */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4 pt-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                            <Landmark className="w-5 h-5" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-300 font-medium">
                            Fintech & Financial Institutions
                          </span>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-zinc-500" />
                          ~8-14 Weeks
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display">
                        Banking & Financial Management Core
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-light leading-relaxed">
                        Fault-tolerant core financial orchestration engineered with cryptographic double-entry ledger integrity, real-time settlement, automated KYC/AML, and multi-tenant compliance.
                      </p>

                      {/* Price Banner */}
                      <div className="my-6 p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/25 flex items-baseline justify-between">
                        <div>
                          <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider block">Enterprise Financial Core</span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-3xl sm:text-4xl font-black font-display text-white">From $12,000</span>
                            <span className="text-xs font-mono text-zinc-400">custom architecture</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-medium">
                            <Shield className="w-3 h-3" />
                            Zero-Drift Ledger
                          </span>
                        </div>
                      </div>

                      {/* Capabilities List (2-column layout for rich dominant space) */}
                      <div className="mb-8">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-3">
                          Architectural Capabilities Included:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Immutable Double-Entry Ledger: Mathematically verified debit/credit reconciliation engine',
                            'Multi-Currency & FX Layer: Dynamic currency wallets, real-time rates & spread margins',
                            'KYC & AML Automation: Customer verification pipelines & automated fraud detection',
                            'Bank-Grade Encryption: AES-256-GCM data layer, HSM key vaults & SOC2 audit compliance',
                            'Multi-Signature Approvals: Maker-Checker transaction workflows & non-repudiation audit trails',
                            'High-Throughput Clearing Layer: Sub-400ms transaction dispatch & automated webhooks'
                          ].map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div className="pt-6 border-t border-white/[0.08]">
                      <a
                        href="https://wa.me/923082789210?text=Hi%20Muhammad%2C%20I%20would%20like%20to%20discuss%20a%20Banking%20%2F%20Financial%20Management%20System%20(Starting%20at%20%2412%2C000)."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300 cursor-pointer group-hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Request Financial System Scope</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <p className="text-[11px] font-mono text-center text-zinc-500 mt-2">
                        Direct executive consultation under NDA with full IP transfer
                      </p>
                    </div>
                  </div>
                </Card3D>
              </div>

            </div>
          </div>
        </MotionSection>


        {/* ========================================================================= */}
        {/* EXISTING PRICING PACKAGES (MVP $3,500, Flagship $7,500, Retainer $4,200/mo) */}
        {/* ========================================================================= */}
        <MotionSection delay={0.3} className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Sliders className="w-3.5 h-3.5" />
              <span>CORE PRODUCT PACKAGES & RETAINERS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
              Predictable Sprints & Fractional Leadership
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
              Choose from standardized delivery packages or ongoing executive engineering leadership.
            </p>

            {/* Model Switcher Filter Pills */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {[
                { id: 'all', label: 'All Models' },
                { id: 'sprint', label: 'Fixed Sprints (MVP & Flagship)' },
                { id: 'retainer', label: 'Ongoing Leadership (Retainer)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setEngagementModel(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                    engagementModel === tab.id
                      ? 'bg-white text-zinc-950 font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-1 ${visiblePlans.length === 1 ? 'max-w-xl mx-auto' : 'lg:grid-cols-12'} gap-8 items-stretch`}>
            {visiblePlans.map((plan) => {
              const isFeatured = plan.isPopular;
              const isSelectedInCalc = selectedPlanId === plan.id;

              const colSpanClass = visiblePlans.length === 1
                ? 'w-full'
                : visiblePlans.length === 2
                ? (plan.id === 'mvp' ? 'lg:col-span-5' : 'lg:col-span-7')
                : (plan.id === 'mvp' ? 'lg:col-span-3' : plan.id === 'flagship' ? 'lg:col-span-5' : 'lg:col-span-4');

              return (
                <div key={plan.id} className={`${colSpanClass} h-full`}>
                  <Card3D
                    maxTilt={isFeatured ? 7 : 5}
                    glowColor={isFeatured ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.1)'}
                    className="h-full"
                  >
                    <div
                      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-500 ${
                        isFeatured
                          ? 'glass-panel-glow border-cyan-400/40 bg-zinc-950/85 shadow-[0_24px_60px_rgba(14,165,233,0.18)] ring-1 ring-cyan-400/35 lg:-translate-y-2'
                          : 'glass-panel border-white/[0.08] bg-zinc-950/60 hover:border-white/20'
                      }`}
                    >
                      {/* Popular Badge */}
                      {isFeatured && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-black text-xs font-bold font-mono tracking-wider uppercase shadow-xl flex items-center gap-1.5 z-20">
                          <Zap className="w-3.5 h-3.5 text-black fill-current" />
                          <span>Most Selected by Founders</span>
                        </div>
                      )}

                      <div>
                        {/* Title & Tagline */}
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                            {plan.name}
                          </h4>
                          <span className="text-xs font-mono text-zinc-300 px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                            ~{plan.baseWeeks} {plan.id === 'retainer' ? 'sprints/mo' : 'weeks'}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 mt-2 min-h-[36px] leading-relaxed font-light">
                          {plan.tagline}
                        </p>

                        {/* Price */}
                        <div className="my-6 pb-6 border-b border-white/[0.08]">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                              ${plan.basePrice.toLocaleString()}
                            </span>
                            <span className="text-xs font-mono text-zinc-400">
                              {plan.id === 'retainer' ? '/ month' : 'flat investment'}
                            </span>
                          </div>

                          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>{getTierRoiBadge(plan.id)}</span>
                          </div>
                        </div>

                        {/* Ideal For callout */}
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 text-xs text-zinc-300">
                          <span className="text-cyan-400 font-mono font-medium">Target Fit:</span> {plan.idealFor}
                        </div>

                        {/* Deliverables List */}
                        <div className="space-y-3 mb-8">
                          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                            Included Deliverables:
                          </div>
                          {plan.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                              <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card CTA */}
                      <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                        <a
                          href={`https://wa.me/923082789210?text=${encodeURIComponent(
                            `Hi Muhammad, I would like to reserve the ${plan.name} package for our product ($${plan.basePrice.toLocaleString()}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                            isFeatured
                              ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(56,189,248,0.4)]'
                              : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Engage on WhatsApp</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPlanId(plan.id);
                            const calcElem = document.getElementById('pricing-calculator');
                            calcElem?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-center text-[11px] font-mono text-zinc-400 hover:text-cyan-300 py-1 cursor-pointer transition-colors"
                        >
                          {isSelectedInCalc ? '✓ Active in Scope Estimator below' : 'Customize with Add-ons ↓'}
                        </button>
                      </div>
                    </div>
                  </Card3D>
                </div>
              );
            })}
          </div>
        </MotionSection>


        {/* ========================================================================= */}
        {/* INTERACTIVE SCOPE & INVESTMENT ESTIMATOR */}
        {/* ========================================================================= */}
        <MotionSection delay={0.35} className="mb-24">
          <Card3D maxTilt={3} glowColor="rgba(56, 189, 248, 0.12)">
            <div id="pricing-calculator" className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/12 relative overflow-hidden scroll-mt-24 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <Sliders className="w-4 h-4" />
                    <span>Interactive Scope Estimator</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                    Configure Your Custom Build
                  </h3>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  Instant quote with pre-formatted WhatsApp brief
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                {/* Left Options (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Select Plan Switcher */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      1. Select Base Architecture Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {PRICING_PLANS.map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                            selectedPlanId === plan.id
                              ? 'bg-cyan-500/10 border-cyan-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                              : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          <div className="text-xs font-bold text-white">{plan.name}</div>
                          <div className="text-xs font-mono text-cyan-300 mt-1">${plan.basePrice.toLocaleString()}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons selection */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      2. Select Modular Capabilities (Add-ons)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PRICING_ADDONS.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id);
                        return (
                          <button
                            key={addon.id}
                            type="button"
                            onClick={() => toggleAddon(addon.id)}
                            className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                              isChecked
                                ? 'bg-indigo-500/10 border-indigo-400/40 text-white shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                                : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20'
                            }`}
                          >
                            <div className={`mt-0.5 w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                              isChecked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-zinc-600'
                            }`}>
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-white">{addon.name}</span>
                                <span className="text-xs font-mono text-indigo-300">+${addon.price}</span>
                              </div>
                              <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{addon.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Client Brief Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Henderson"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Your Work Email</label>
                      <input
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Brief Project Notes (Optional)</label>
                      <input
                        type="text"
                        placeholder="Briefly describe your product goals, timeline, or reference ideas..."
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Summary Box (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/85 border border-cyan-500/25 flex flex-col justify-between space-y-6 shadow-xl">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                      Estimated Architecture Scope
                    </div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {estimate.selectedPlan.name}
                    </h4>

                    <div className="mt-4 space-y-2 py-3 border-y border-white/10 text-xs">
                      <div className="flex justify-between text-zinc-300">
                        <span>Base Architecture:</span>
                        <span className="font-mono text-white">${estimate.selectedPlan.basePrice.toLocaleString()}</span>
                      </div>
                      {estimate.addonsList.map((addon) => (
                        <div key={addon.id} className="flex justify-between text-zinc-400">
                          <span className="truncate pr-2">+ {addon.name}:</span>
                          <span className="font-mono text-indigo-300">${addon.price.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-zinc-300 pt-2 border-t border-white/[0.06]">
                        <span>Estimated Timeline:</span>
                        <span className="font-mono text-cyan-300">~{estimate.totalWeeks} Weeks</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="text-xs font-mono text-zinc-400 uppercase">Total Estimated Value</span>
                      <div className="text-3xl font-black font-display text-white text-gradient-cyan">
                        ${estimate.totalPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={whatsAppQuoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Configured Scope to WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <div className="text-center text-[11px] font-mono text-zinc-500">
                      Direct connection with Muhammad Mujahid • +92 308 2789210
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </MotionSection>


        {/* ========================================================================= */}
        {/* CLIENT TESTIMONIALS (Asymmetric Editorial Showcase) */}
        {/* ========================================================================= */}
        <MotionSection delay={0.4}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Client Endorsements</span>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display text-center mb-8">
            Executive Partner Endorsements
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Dominant Hero Testimonial: Elena Rostova (7 cols) */}
            <div className="lg:col-span-7 h-full">
              <Card3D maxTilt={4} glowColor="rgba(244, 114, 182, 0.15)" className="h-full">
                <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-pink-500/25 bg-gradient-to-br from-pink-950/20 via-zinc-950/90 to-zinc-950 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-2.5 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                        <Quote className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                        {TESTIMONIALS_DATA[1].verifiedMetric}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-zinc-200 italic leading-relaxed font-light mb-8">
                      "{TESTIMONIALS_DATA[1].quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white font-display">{TESTIMONIALS_DATA[1].clientName}</div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">{TESTIMONIALS_DATA[1].clientRole}, {TESTIMONIALS_DATA[1].company}</div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Haute Parfumerie Flagship
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Supporting Testimonials Stacked (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between h-full">
              {/* Testimonial 0: Tariq H. (AgroTrace) */}
              <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.12)" className="h-full">
                <div className="p-6 rounded-2xl glass-panel border border-cyan-500/20 bg-zinc-950/70 flex flex-col justify-between h-full shadow-lg">
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-4 font-light">
                    "{TESTIMONIALS_DATA[0].quote}"
                  </p>
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-display">{TESTIMONIALS_DATA[0].clientName}</div>
                      <div className="text-[11px] text-zinc-400 font-mono">{TESTIMONIALS_DATA[0].clientRole}, {TESTIMONIALS_DATA[0].company}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400">
                      {TESTIMONIALS_DATA[0].verifiedMetric}
                    </span>
                  </div>
                </div>
              </Card3D>

              {/* Testimonial 2: Dr. K. Malik (MediVerse) */}
              <Card3D maxTilt={4} glowColor="rgba(16, 185, 129, 0.12)" className="h-full">
                <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 bg-zinc-950/70 flex flex-col justify-between h-full shadow-lg">
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-4 font-light">
                    "{TESTIMONIALS_DATA[2].quote}"
                  </p>
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-display">{TESTIMONIALS_DATA[2].clientName}</div>
                      <div className="text-[11px] text-zinc-400 font-mono">{TESTIMONIALS_DATA[2].clientRole}, {TESTIMONIALS_DATA[2].company}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                      {TESTIMONIALS_DATA[2].verifiedMetric}
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </MotionSection>

      </div>
    </section>
  );
};
