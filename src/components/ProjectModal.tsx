import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, MessageSquare, ArrowRight, ShieldCheck, Zap, AlertTriangle, Layers, TrendingUp } from 'lucide-react';
import { Project } from '../types.ts';
import { CONTACT_INFO } from '../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Map project IDs to real screenshot images
const PROJECT_IMAGES: Record<string, string> = {
  agrotrace: '/Images/Agrotrace.jpeg',
  mediverse: '/Images/Mediverse.jpeg',
  fume: '/Images/Fume prints-04.png',
  phss: '/Images/PHSS Homepage.jpg'
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const inquiryUrl = `https://wa.me/923082789210?text=${encodeURIComponent(
    `Hi Muhammad, I was reviewing your case study on ${project.title} and would like to explore a similar architecture for our product.`
  )}`;

  const imageSrc = PROJECT_IMAGES[project.id];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-5 sm:p-8 space-y-6 sm:space-y-8 text-zinc-100">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">Deployed {project.year}</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light">{project.subtitle}</p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{project.architectTag || 'Architected by Muhammad Mujahid · Delivered through Axorks Studio'}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Architecture Banner with Real System Image */}
        <div className="relative aspect-[16/8] rounded-2xl overflow-hidden glass-panel border border-white/10 flex flex-col justify-end p-5 sm:p-6 bg-zinc-950">
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />

          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-black/75 border border-white/20 text-[11px] font-mono text-zinc-200 backdrop-blur-md">
              ROLE: {project.role}
            </span>
          </div>

          <div className="space-y-2 relative z-10">
            <span className="text-[11px] font-mono text-cyan-300 tracking-wider uppercase font-semibold">
              Engineered Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/15 text-xs font-mono text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* High-Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black font-display text-cyan-300">{metric.value}</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 3-PART HIGH-STAKES SYSTEM NARRATIVE MONOGRAPH */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Architectural Monograph & Impact Deconstruction
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. The Operational Challenge */}
            <div className="p-5 rounded-2xl bg-amber-950/10 border border-amber-500/20 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>1. Operational Challenge</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">{project.problem}</p>
              </div>

              {project.challengePoints && (
                <div className="space-y-2 pt-2 border-t border-amber-500/15">
                  {project.challengePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. The Engineered Architecture */}
            <div className="p-5 rounded-2xl bg-cyan-950/10 border border-cyan-500/20 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>2. Engineered System</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">{project.solution}</p>
              </div>

              {project.architecturePoints && (
                <div className="space-y-2 pt-2 border-t border-cyan-500/15">
                  {project.architecturePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Verifiable Business Impact */}
            <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3. Verifiable Impact</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Production telemetry and commercial gains verified in live deployment.
                </p>
              </div>

              {project.impactPoints && (
                <div className="space-y-2 pt-2 border-t border-emerald-500/15">
                  {project.impactPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Footer with Conversion Hook */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-400 text-center sm:text-left">
            <span className="text-cyan-300 font-medium">Architected by Muhammad Mujahid</span> · Delivered through Axorks Studio
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Similar Architecture</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-zinc-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};