import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  MessageSquare,
  ExternalLink,
  Code2,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3D } from '../components/Card3D.tsx';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder.tsx';
import { CONTACT_INFO, EXECUTIVE_METRICS } from '../data/portfolioData.ts';
import { RollingCounter } from '../components/motion/RollingCounter.tsx';
import { MagneticWrapper } from '../components/motion/MagneticWrapper.tsx';
import { HudCorners } from '../components/motion/HudElements.tsx';

export const AboutPage: React.FC = () => {
  const coreCompetencies = [
    {
      title: 'High-Concurrency Distributed Systems',
      description: 'Engineering fault-tolerant backend architectures capable of handling tens of thousands of real-time transactions without degradation.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Microservices']
    },
    {
      title: 'Cinematic Modern Web Interfaces',
      description: 'Crafting 60fps liquid-glass interfaces with bespoke 3D physics, deliberate typographic hierarchy, and zero performance drag.',
      tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion']
    },
    {
      title: 'AI Workflows & Generative Integration',
      description: 'Integrating state-of-the-art LLMs, automated agent workflows, and search/answer visibility optimization (SEO, AEO, GEO).',
      tags: ['Google Gemini API', 'LLM Agents', 'AEO / GEO Engine', 'Vector Embeddings']
    },
    {
      title: 'Mission-Critical Institutional Platforms',
      description: 'Architecting custom LMS and banking/financial software with institutional-grade data privacy, RBAC security, and audit trails.',
      tags: ['FinTech Cores', 'Institutional LMS', 'HIPAA/FHIR Compliance', 'Zero-Trust']
    }
  ];

  const architecturalPrinciples = [
    {
      step: '01',
      title: 'Zero-Slop Engineering',
      desc: 'No generic boilerplate or unvetted dependencies. Every line of code is deliberate, typed, and battle-tested for high reliability.'
    },
    {
      step: '02',
      title: '100% IP & Source Ownership',
      desc: 'You own every repository, migration script, and asset from day one. No vendor lock-in, no hidden proprietary licensing.'
    },
    {
      step: '03',
      title: 'Direct Principal Access',
      desc: 'No junior handoffs or account managers. You work directly with the founder and principal architect from kickoff to deployment.'
    },
    {
      step: '04',
      title: 'Predictable Rapid Cadence',
      desc: 'Weekly deployable increments, continuous integration, and transparent milestones. Real progress you can click and test every Friday.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative pt-28 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Top Header & Executive Portrait Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRINCIPAL ARCHITECT & FOUNDER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.08]">
              Architecting Sovereign Software for <span className="text-gradient">Visionary Ventures</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              I am <span className="text-white font-medium">Muhammad Mujahid</span>, Founder of Axorks and Principal Full-Stack Software Architect. Over the past several years, I have engineered mission-critical digital systems, scalable enterprise backends, and cinematic web products that serve over 40,000 active users globally.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Unlike traditional agencies where your requirements get passed down to juniors, I operate with founder-level accountability: direct technical leadership, rigorous architectural standards, and rapid execution.
            </p>

            {/* Quick Metrics Bar with 2026 Rolling Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {EXECUTIVE_METRICS.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl glass-panel border border-white/10 bg-white/[0.02]">
                  <div className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    <RollingCounter value={metric.value} />
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold">{metric.label}</div>
                  <div className="text-[10px] text-zinc-400 truncate">{metric.caption}</div>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons with Magnetic Physics */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticWrapper strength={0.22}>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </MagneticWrapper>

              <MagneticWrapper strength={0.18}>
                <Link
                  to="/projects"
                  className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition-all duration-300"
                >
                  <span>View Flagship Projects</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </MagneticWrapper>
            </div>
          </div>

          {/* Right Column: Fixed 3D Portrait with Cybernetic Reticle */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <Card3D maxTilt={5} glowColor="rgba(56, 189, 248, 0.25)">
                <div className="relative rounded-3xl overflow-hidden">
                  <HudCorners color="rgba(56, 189, 248, 0.45)" size={14} className="z-30" />
                  <PhotoPlaceholder
                    variant="hero"
                    defaultPhoto="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                  />
                </div>
              </Card3D>
            </div>
          </div>
        </section>

        {/* Technical Mastery & Core Capabilities */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Engineering Disciplines & System Mastery
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light">
              Precision execution across the modern technology spectrum—from hardware telemetry to responsive user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCompetencies.map((comp, idx) => (
              <Card3D key={idx} maxTilt={3} glowColor="rgba(56, 189, 248, 0.15)">
                <div className="p-8 rounded-3xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">{comp.title}</h3>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                      {comp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                    {comp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Architectural Principles */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Workflow className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Why High-Growth Founders Partner With Us
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light">
              Engineering without compromise. We protect your product timeline, data sovereignty, and technical sanity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturalPrinciples.map((item, idx) => (
              <Card3D key={idx} maxTilt={4} glowColor="rgba(16, 185, 129, 0.15)">
                <div className="p-6 rounded-2xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold">{item.step}</span>
                    <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed SLA</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Bottom High-Converting Action Card */}
        <section>
          <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-500/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                  FOUNDER AVAILABILITY: ACTIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                  Ready to Architect Your Next Flagship Product?
                </h3>
                <p className="text-sm text-zinc-300 max-w-xl font-light">
                  Book a direct technical architecture call with Muhammad Mujahid. Get strategic answers regarding scope, timeline, and modern system design within 2 hours.
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
                  <span>Start WhatsApp Dialogue</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
                >
                  <span>Submit Project Brief</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
