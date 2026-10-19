import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, Cpu, ShieldCheck, MessageSquare, CheckCircle2, Globe, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection.tsx';
import { Card3D } from '../components/Card3D.tsx';
import { CONTACT_INFO, PROJECTS_DATA, EXECUTIVE_METRICS } from '../data/portfolioData.ts';

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

      {/* 2. Direct Value Propositions Strip with 3D Tilt Cards */}
      <section className="py-12 border-y border-white/[0.08] bg-white/[0.01] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.15)">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Intelligent Systems</h3>
                    <p className="text-[11px] font-mono text-zinc-400">Custom LMS & Banking Cores</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Sovereign digital platforms engineered for extreme concurrency, zero drift, and full code ownership. Built from \$8,000.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
                >
                  <span>Explore Intelligent Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card3D>

            <Card3D maxTilt={4} glowColor="rgba(16, 185, 129, 0.2)">
              <div className="p-6 rounded-2xl glass-panel border border-emerald-500/25 bg-emerald-950/10 h-full flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-white font-display">AI & Search Visibility</h3>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[9px] font-mono text-emerald-400 font-bold uppercase">High ROI</span>
                    </div>
                    <p className="text-[11px] font-mono text-emerald-300/80">SEO • AEO • GEO ($950/mo)</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Get found on Google and get recommended whenever prospects ask ChatGPT, Perplexity, Claude, or Gemini.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors pt-2 font-semibold"
                >
                  <span>View Visibility Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card3D>

            <Card3D maxTilt={4} glowColor="rgba(129, 140, 248, 0.15)">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Axorks Product Studio</h3>
                    <p className="text-[11px] font-mono text-zinc-400">Principal Technical Lead</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Elite boutique delivery: direct access to leadership, zero bureaucracy, and weekly deployment cycles.
                </p>
                <Link
                  to="/axorks"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors pt-2"
                >
                  <span>Learn About Axorks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship Projects Preview Strip */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>FEATURED CASE STUDIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Architectural Milestones & Flagships
              </h2>
              <p className="text-sm text-zinc-400 max-w-xl font-light">
                Production-grade enterprise architectures powering healthcare telemetry, agricultural intelligence, and luxury commerce.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-mono transition"
            >
              <span>Explore All Projects ({PROJECTS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.slice(0, 2).map((project) => (
              <Card3D key={project.id} maxTilt={4} glowColor="rgba(56, 189, 248, 0.2)">
                <div className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-400/30 transition-all duration-500 flex flex-col justify-between h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <img
                      src={project.id === 'agrotrace' ? '/Images/Agrotrace.jpeg' : '/Images/Mediverse.jpeg'}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent opacity-90" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
                        <p className="text-xs text-zinc-300 line-clamp-1">{project.subtitle}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 font-light">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06]">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                          <div className="text-[10px] text-zinc-500 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 4. High-Priority AI Visibility (SEO/AEO/GEO) Callout Strip */}
      <section className="py-16 bg-gradient-to-b from-emerald-950/20 to-transparent border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>HIGH-IMPACT VISIBILITY SUITE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                  Get Found on Google. Get Recommended by AI Platforms.
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl">
                  Modern search has shifted. Customers no longer just browse links—they ask ChatGPT, Perplexity, and Gemini for direct recommendations. Our visibility stack secures your authority everywhere.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-mono text-zinc-400">SEO</div>
                    <div className="text-base font-bold text-white font-display">$250/mo</div>
                    <div className="text-[10px] text-zinc-500">Google Dominance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-mono text-zinc-400">AEO</div>
                    <div className="text-base font-bold text-white font-display">$450/mo</div>
                    <div className="text-[10px] text-zinc-500">Answer Engines</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-mono text-zinc-400">GEO</div>
                    <div className="text-base font-bold text-white font-display">$550/mo</div>
                    <div className="text-[10px] text-zinc-500">Generative AI</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                    <div className="text-xs font-mono text-emerald-300 font-bold">ALL-IN-ONE</div>
                    <div className="text-base font-bold text-emerald-400 font-display">$950/mo</div>
                    <div className="text-[10px] text-emerald-300/80">Save $300/mo</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <Link
                  to="/services"
                  className="px-6 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105"
                >
                  <span>Explore Visibility Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Muhammad, I want to discuss the Full Visibility Package (SEO+AEO+GEO).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Conversion Dialogue Hook */}
      <section className="py-20 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Ready to Build With Direct Founder Accountability?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-light">
            We are actively onboarding select projects for Q2/Q3. Get an architectural assessment and fixed timeline estimate within 2 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp: {CONTACT_INFO.whatsapp}</span>
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
      </section>
    </motion.div>
  );
};
