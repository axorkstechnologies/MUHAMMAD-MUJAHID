import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, MessageSquare, ArrowRight } from 'lucide-react';
import { Project } from '../types.ts';
import { CONTACT_INFO } from '../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const inquiryUrl = `https://wa.me/923082789210?text=${encodeURIComponent(
    `Hi Muhammad, I was reviewing your case study on ${project.title} and would like to explore a similar architecture for our product.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl p-6 sm:p-8 space-y-8 text-zinc-100">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">Deployed {project.year}</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-1">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Architecture Banner Placeholder with Liquid Accents */}
        <div className="relative aspect-[16/7] rounded-2xl overflow-hidden glass-panel border border-white/10 flex flex-col justify-end p-6 bg-gradient-to-tr from-cyan-950/40 via-zinc-900 to-indigo-950/40">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
              ROLE: {project.role}
            </span>
          </div>

          <div className="space-y-1 relative z-10">
            <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">System Architecture Highlights</span>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-black/70 border border-white/15 text-xs font-mono text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Specular sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black font-display text-cyan-300">{metric.value}</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-red-950/10 border border-red-500/20 space-y-2">
            <div className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Core Architectural Challenge</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-950/10 border border-cyan-500/20 space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Engineered Solution & Impact</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-400">
            Engineered by <span className="text-white font-medium">Muhammad Mujahid</span> at Axorks
          </div>

          <div className="flex items-center gap-3">
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire About Similar Architecture</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs text-zinc-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
