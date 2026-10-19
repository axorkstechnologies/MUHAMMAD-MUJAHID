import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Terminal, 
  Activity, 
  ShoppingBag, 
  GraduationCap, 
  Cpu, 
  TrendingUp, 
  Wifi, 
  HeartPulse, 
  Flame, 
  BookOpen 
} from 'lucide-react';
import { PROJECTS_DATA, CONTACT_INFO } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { Card3D } from './Card3D.tsx';
import { HudCorners, ScanlineOverlay } from './motion/HudElements.tsx';
import { RollingCounter } from './motion/RollingCounter.tsx';

// Map project IDs to real screenshot images
const PROJECT_IMAGES: Record<string, string> = {
  agrotrace: '/Images/Agrotrace.jpeg',
  mediverse: '/Images/Mediverse.jpeg',
  fume: '/Images/Fume prints-04.png',
  phss: '/Images/PHSS Homepage.jpg'
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const categories = ['All', 'AI Systems', 'Enterprise Platform', 'Luxury E-Commerce', 'Institutional EdTech'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const renderProjectVisual = (projectId: string) => {
    const imageSrc = PROJECT_IMAGES[projectId];

    // Overlay data for each project type
    const overlays: Record<string, React.ReactNode> = {
      agrotrace: (
        <>
          <div className="absolute inset-0 z-0">
            {imageSrc && <img src={imageSrc} alt="AgroTrace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
          </div>
          <div className="relative z-10 w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Wifi className="w-3.5 h-3.5 animate-pulse" />
                <span>AGRI-TELEMETRY STREAM: ACTIVE</span>
              </span>
              <span className="text-zinc-400">12.5K EVT/SEC</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[10px] font-mono text-zinc-400">SOIL MOISTURE</div>
                <div className="text-lg font-bold font-mono text-emerald-400">42.8%</div>
                <div className="text-[9px] text-zinc-400">Optimal Range</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[10px] font-mono text-zinc-400">CANOPY TEMP</div>
                <div className="text-lg font-bold font-mono text-cyan-400">24.2°C</div>
                <div className="text-[9px] text-zinc-400">Zero Heat Stress</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[10px] font-mono text-zinc-400">AI HARVEST</div>
                <div className="text-lg font-bold font-mono text-amber-400">98.4%</div>
                <div className="text-[9px] text-zinc-400">Confidence Score</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                Predictive Yield Engine
              </span>
              <span className="text-zinc-400">140+ Distributed Clusters</span>
            </div>
          </div>
        </>
      ),

      mediverse: (
        <>
          <div className="absolute inset-0 z-0">
            {imageSrc && <img src={imageSrc} alt="MediVerse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
          </div>
          <div className="relative z-10 w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <HeartPulse className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>FHIR R4 CLINICAL ORCHESTRATION</span>
              </span>
              <span className="text-zinc-400">180K+ ENCOUNTERS</span>
            </div>
            <div className="my-2 p-3 rounded-xl bg-black/60 border border-white/10 space-y-2 shadow-inner backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-300 font-mono">Triage Dispatch Queue:</span>
                <span className="text-indigo-300 font-mono font-bold">Priority 1 (0.2s dispatch)</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-indigo-500 w-[65%]" />
                <div className="h-full bg-cyan-400 w-[25%]" />
                <div className="h-full bg-emerald-400 w-[10%]" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                <span>EHR ENCRYPTION: AES-256</span>
                <span className="text-emerald-400">HIPAA PASS 100%</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/25 text-indigo-300">
                Sub-Second Diagnostic Delivery
              </span>
              <span className="text-zinc-400">-1.8 hrs / Shift</span>
            </div>
          </div>
        </>
      ),

      fume: (
        <>
          <div className="absolute inset-0 z-0">
            {imageSrc && <img src={imageSrc} alt="FUME Fragrances" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
          </div>
          <div className="relative z-10 w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>HAUTE PARFUMERIE • SENSORY ENGINE</span>
              </span>
              <span className="text-zinc-400">BOUTIQUE EDITION</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[9px] font-mono text-zinc-400">TOP NOTE</div>
                <div className="text-xs font-semibold text-amber-200 mt-0.5">Bergamot & Iris</div>
                <div className="text-[8px] text-zinc-400">0 - 15m</div>
              </div>
              <div className="p-2 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[9px] font-mono text-zinc-400">HEART NOTE</div>
                <div className="text-xs font-semibold text-purple-200 mt-0.5">Smoked Oud & Rose</div>
                <div className="text-[8px] text-zinc-400">15m - 4h</div>
              </div>
              <div className="p-2 rounded-xl bg-black/60 border border-white/10 text-center shadow-inner backdrop-blur-sm">
                <div className="text-[9px] font-mono text-zinc-400">BASE NOTE</div>
                <div className="text-xs font-semibold text-zinc-200 mt-0.5">Amber & Cedar</div>
                <div className="text-[8px] text-zinc-400">4h - 24h</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/25 text-amber-300">
                WebGL Olfactory Experience
              </span>
              <span className="text-emerald-400 font-semibold">+42% Conversion</span>
            </div>
          </div>
        </>
      ),

      phss: (
        <>
          <div className="absolute inset-0 z-0">
            {imageSrc && <img src={imageSrc} alt="PHSS School" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
          </div>
          <div className="relative z-10 w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-teal-300">
                <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                <span>INSTITUTIONAL ERP • CAMPUS PORTAL</span>
              </span>
              <span className="text-zinc-400">3,200+ ACTIVE SEATS</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 shadow-inner backdrop-blur-sm">
                <div className="text-[10px] font-mono text-zinc-400">FEE RECONCILIATION</div>
                <div className="text-base font-bold font-mono text-emerald-400">99.4% Cleared</div>
                <div className="text-[9px] text-zinc-400">Automated Challans</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 shadow-inner backdrop-blur-sm">
                <div className="text-[10px] font-mono text-zinc-400">EXAM GRADING SPEED</div>
                <div className="text-base font-bold font-mono text-teal-300">92% Faster</div>
                <div className="text-[9px] text-zinc-400">Direct Parent Portal</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
              <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/25 text-teal-300">
                Enterprise Academic Suite
              </span>
              <span className="text-zinc-400">Zero-Lag Concurrent Portal</span>
            </div>
          </div>
        </>
      )
    };

    return overlays[projectId] || null;
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
              Selected Engineered Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Explore the four flagship systems engineered under Axorks and client partnerships. Each represents rigorous software design, performance optimization, and concrete commercial outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-zinc-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Cards Grid with Staggered Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card3D maxTilt={6} glowColor="rgba(56, 189, 248, 0.16)">
                <article className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group border border-white/[0.08] h-full shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                  {/* Top Meta */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{project.category}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Interactive Simulated Visual Preview Banner with Real Screenshot & 2026 HUD */}
                    <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-6 border border-white/12 shadow-inner group-hover:border-cyan-500/40 transition-all duration-500">
                      <HudCorners color="rgba(56, 189, 248, 0.45)" size={12} className="z-30" />
                      <ScanlineOverlay className="z-20" />
                      {renderProjectVisual(project.id)}
                    </div>

                    {/* Metrics Highlights with 2026 Rolling Counter */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-base sm:text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                            <RollingCounter value={m.value} />
                          </div>
                          <div className="text-[10px] font-mono text-zinc-400 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-xs font-semibold text-zinc-200 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Deconstruct Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <a
                      href={`https://wa.me/923082789210?text=${encodeURIComponent(
                        `Hi Muhammad, I want to discuss a system with similar scale and architecture to ${project.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                    >
                      <span>WhatsApp Inquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
