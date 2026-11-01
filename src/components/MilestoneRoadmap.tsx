import React from 'react';
import { motion } from 'motion/react';
import { 
  GitBranch, 
  Database, 
  Terminal, 
  Rocket, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Lock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData.ts';

interface MilestoneRoadmapProps {
  onOpenStrategyCall?: () => void;
}

export const MilestoneRoadmap: React.FC<MilestoneRoadmapProps> = ({ onOpenStrategyCall }) => {
  const steps = [
    {
      phase: 'Phase 01',
      timeline: 'Week 1',
      title: 'Architecture Blueprint & Schema Design',
      objective: 'Eliminate technical ambiguity before writing a single line of production code.',
      deliverables: [
        'Direct founder deep dive on business logic & user flows',
        'Relational PostgreSQL schema & data model ERD design',
        'API contracts, security vectors & third-party integrations mapped',
        'Milestone-based escrow agreement & private GitHub repo initialized'
      ],
      checkpoint: 'Founder Architectural Sign-off & Project Charter'
    },
    {
      phase: 'Phase 02',
      timeline: 'Weeks 2–3',
      title: 'Typed Foundations & Core Engineering',
      objective: 'Stand up the core database, authentication, and primary platform workflows.',
      deliverables: [
        'Strict TypeScript architecture with modular components',
        'Authentication & Role-Based Access Control (RBAC) implementation',
        'Database migrations, indexing & high-throughput API endpoints',
        'Initial responsive layout with mobile-first usability standards'
      ],
      checkpoint: 'Live Staging URL v1.0 — Testable every Friday'
    },
    {
      phase: 'Phase 03',
      timeline: 'Weeks 3–4',
      title: 'Interactive Polish & Feature Velocity',
      objective: 'Complete core features, micro-interactions, and AI/real-time integrations.',
      deliverables: [
        'Smooth 60fps micro-interactions, state handling & empty states',
        'Payment gateway / third-party webhooks & email pipelines',
        'AI / RAG pipeline or real-time WebSocket state management',
        'Automated test suite (unit + integration endpoints)'
      ],
      checkpoint: 'Feature-Complete Staging Review & User Acceptance Test'
    },
    {
      phase: 'Phase 04',
      timeline: 'Weeks 5–6',
      title: 'Hardening, CI/CD & Production Launch',
      objective: 'Optimize for speed, audit security, and execute zero-downtime go-live.',
      deliverables: [
        'Lighthouse 95+ performance tuning & Core Web Vitals optimization',
        'Automated CI/CD deployment pipelines & SSL/custom domain routing',
        'Comprehensive security checklist & rate-limiting audit',
        '100% intellectual property, design assets & repository handover'
      ],
      checkpoint: 'Production Go-Live & 100% IP Handover'
    }
  ];

  return (
    <section id="process" className="py-28 sm:py-36 relative overflow-hidden surface-elevated">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-cyan-500/[0.03] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[350px] bg-indigo-500/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-px bg-cyan-400/60" />
              <span className="text-[11px] font-mono text-cyan-400 font-medium tracking-widest uppercase">
                Engineering Process &amp; Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white font-display tracking-tight leading-[1.15]">
              Predictable 4–6 week delivery.
              <br />
              <span className="text-zinc-400 font-normal">Working software you can verify every Friday.</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              No black-box development or radio silence. Every engagement follows a disciplined, milestone-gated cadence with direct founder checkpoints and transparent progress.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-zinc-300 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Weekly Staging Deploys</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-zinc-300 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>30-Day Hypercare Included</span>
            </span>
          </div>
        </div>

        {/* 4-Step Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 sm:p-7 rounded-[1.75rem] bg-white/[0.02] border border-white/[0.07] hover:border-cyan-500/25 flex flex-col justify-between h-full transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    {step.phase}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    {step.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 font-light leading-relaxed">
                    {step.objective}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Milestone Scope:</div>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkpoint Badge */}
              <div className="pt-5 mt-6 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Checkpoint: {step.checkpoint}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hypercare & Escrow Banner */}
        <div className="p-7 sm:p-9 rounded-[1.75rem] bg-gradient-to-r from-cyan-950/20 via-[#07070f] to-emerald-950/20 border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>POST-LAUNCH GUARANTEE</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              Complimentary 30-Day Hypercare on Every Production Deployment
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-2xl leading-relaxed">
              We don't vanish after deployment. Every custom web platform includes 30 days of proactive bug resolution, performance monitoring, and direct founder WhatsApp support at zero additional charge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            {onOpenStrategyCall && (
              <button
                type="button"
                onClick={onOpenStrategyCall}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition cursor-pointer"
              >
                <span>Discuss Your Timeline</span>
              </button>
            )}
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Muhammad, I am interested in understanding your 4-6 week sprint delivery process.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
