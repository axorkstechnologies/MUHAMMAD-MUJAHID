import React from 'react';
import { motion, useInView } from 'motion/react';
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
  Workflow,
  Star,
  Quote,
  BadgeCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection.tsx';
import { Card3D } from '../components/Card3D.tsx';
import { AeoGeoSection } from '../components/AeoGeoSection.tsx';
import { CONTACT_INFO, PROJECTS_DATA, TESTIMONIALS_DATA } from '../data/portfolioData.ts';
import { RollingCounter } from '../components/motion/RollingCounter.tsx';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const testimonialsRef = React.useRef<HTMLDivElement>(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' });

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
      {/* 1. Hero Section */}
      <HeroSection onNavigate={handleHeroNavigate} />

      {/* 2. Services Bento Grid — Elevated Surface Rhythm */}
      <section className="py-28 sm:py-36 surface-elevated relative overflow-hidden">
        {/* Ultra-subtle ambient depth */}
        <div className="absolute top-1/4 left-1/5 w-[700px] h-[400px] bg-cyan-500/[0.04] blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/3 right-1/5 w-[600px] h-[400px] bg-indigo-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header — Refined */}
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-px bg-cyan-400/60" />
              <span className="text-[11px] font-mono text-cyan-400 font-medium tracking-widest uppercase">
                How We Work Together
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white font-display tracking-tight leading-[1.15]">
              Choose your engagement model.
              <br />
              <span className="text-zinc-400 font-normal">Direct specialist work, or turnkey studio systems.</span>
            </h2>
          </div>

          {/* Asymmetric 7-Col vs 5-Col Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Primary: Custom Platforms (7 Cols) */}
            <div className="lg:col-span-7">
              <Card3D maxTilt={3} glowColor="rgba(56, 189, 248, 0.15)" className="h-full">
                <div className="rounded-[1.75rem] p-8 sm:p-10 bg-gradient-to-b from-cyan-950/20 via-[#07070f] to-[#07070f] border border-white/[0.08] hover:border-cyan-500/25 flex flex-col justify-between h-full transition-all duration-500 relative overflow-hidden group">
                  
                  <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/[0.1] transition-colors duration-700" />

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-cyan-300/80 font-medium uppercase tracking-wider block">
                            Direct with Muhammad Mujahid
                          </span>
                          <span className="text-[11px] font-mono text-zinc-500">Fixed-scope · 3–6 weeks</span>
                        </div>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                        From $3,500
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-[1.75rem] font-bold text-white font-display tracking-tight leading-tight">
                        Custom Web Platforms &amp; Intelligent Software Systems
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                        Purpose-built web applications and internal operating systems for businesses that have outgrown off-the-shelf tools. Strict TypeScript, clean architecture, rapid deployment.
                      </p>
                    </div>

                    {/* Performance Standards — Quieter */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono">
                      <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                        <div className="text-[9px] text-zinc-500 mb-1">CAPACITY</div>
                        <div className="font-semibold text-white">10K+ Users</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                        <div className="text-[9px] text-zinc-500 mb-1">SPEED</div>
                        <div className="font-semibold text-cyan-400">&lt; 40ms</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                        <div className="text-[9px] text-zinc-500 mb-1">INTEGRITY</div>
                        <div className="font-semibold text-emerald-400">Zero Loss</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                        <div className="text-[9px] text-zinc-500 mb-1">STACK</div>
                        <div className="font-semibold text-zinc-300">TS / Postgres</div>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[13px] text-zinc-300">
                      {[
                        'Custom Web Applications & Portals',
                        'SaaS Platforms & Internal Ops',
                        'Strict TypeScript & Modular Tests',
                        '100% Repository & IP Ownership'
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/70 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                      to="/services"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 transition shadow-sm cursor-pointer"
                    >
                      <span>Explore Custom Platforms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Founder-led · Zero handoffs
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Secondary Stacked Modules (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* AI Visibility Suite */}
              <Card3D maxTilt={4} glowColor="rgba(16, 185, 129, 0.15)" className="flex-1">
                <div className="rounded-[1.75rem] p-7 sm:p-8 bg-gradient-to-b from-emerald-950/15 via-[#07070f] to-[#07070f] border border-white/[0.08] hover:border-emerald-500/25 h-full flex flex-col justify-between transition-all duration-500">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-emerald-300/80 font-medium uppercase tracking-wider">
                          Search &amp; AI Discovery
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300/80 border border-emerald-500/20">
                        Save $300/mo
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white font-display tracking-tight">
                        Intelligent Visibility Suite
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Make sure AI assistants (ChatGPT, Perplexity, Gemini) actively recommend your company by name to prospective buyers.
                      </p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-4 gap-1.5 text-center font-mono py-2">
                      {[
                        { label: 'SEO', price: '$250', accent: false },
                        { label: 'AEO', price: '$450', accent: false },
                        { label: 'GEO', price: '$550', accent: false },
                        { label: 'ALL-IN', price: '$950', accent: true }
                      ].map((tier) => (
                        <div key={tier.label} className={`p-2.5 rounded-xl ${tier.accent ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-white/[0.02] border border-white/[0.04]'}`}>
                          <div className={`text-[9px] ${tier.accent ? 'text-emerald-300 font-bold' : 'text-zinc-500'}`}>{tier.label}</div>
                          <div className={`text-xs font-bold ${tier.accent ? 'text-emerald-400' : 'text-white'}`}>{tier.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>See How AI Search Works</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-500">Monthly retainer</span>
                  </div>
                </div>
              </Card3D>

              {/* Axorks Studio Systems */}
              <Card3D maxTilt={4} glowColor="rgba(99, 102, 241, 0.12)" className="flex-1">
                <div className="rounded-[1.75rem] p-7 sm:p-8 bg-[#07070f] border border-white/[0.08] hover:border-indigo-500/20 h-full flex flex-col justify-between transition-all duration-500">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-indigo-300/80 font-medium uppercase tracking-wider">
                          Axorks Studio Systems
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300/80 border border-indigo-500/20">
                        Turnkey
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white font-display tracking-tight">
                        Proven Vertical Platforms
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Turnkey systems for schools, clinics, and commerce — deployed through Axorks Studio.
                      </p>
                    </div>

                    <div className="space-y-0 text-xs font-mono">
                      {[
                        { label: 'School & Campus ERPs', price: 'From $8,000' },
                        { label: 'Clinical Healthcare EHRs', price: 'From $10,000' },
                        { label: 'IoT & Commerce Platforms', price: 'From $5,000' }
                      ].map((item, i) => (
                        <div key={item.label} className={`flex items-center justify-between py-3 ${i < 2 ? 'border-b border-white/[0.04]' : ''}`}>
                          <span className="text-zinc-400">{item.label}</span>
                          <span className="text-indigo-300/80 font-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-[10px] font-mono text-zinc-500">
                      <span className="text-cyan-400/70">Architected by Muhammad Mujahid</span> · Delivered through Axorks Studio
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Studio Platforms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-500">Institutional SLA</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Case Studies — Editorial Rhythm */}
      <section className="py-28 sm:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-px bg-cyan-400/60" />
                <span className="text-[11px] font-mono text-cyan-400 font-medium uppercase tracking-widest">
                  Case Studies
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white font-display tracking-tight leading-[1.15]">
                Real systems. Real outcomes.
                <br />
                <span className="text-zinc-400 font-normal">Tested under daily production load.</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-white text-xs font-mono transition group cursor-pointer"
            >
              <span>All Case Studies ({PROJECTS_DATA.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* SPOTLIGHT: AgroTrace — Panoramic */}
          <Card3D maxTilt={2.5} glowColor="rgba(16, 185, 129, 0.12)">
            <article className="rounded-[1.75rem] p-8 sm:p-10 bg-gradient-to-b from-emerald-950/10 via-[#050508] to-[#050508] border border-white/[0.08] hover:border-emerald-500/20 relative overflow-hidden group transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Narrative */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300/80 text-[11px] font-mono">
                      Flagship · AI Agronomy
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                      {agrotrace.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mt-1.5">
                      {agrotrace.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-500 mt-3">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>Architected by Muhammad Mujahid · Axorks Studio</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {agrotrace.description}
                  </p>

                  {/* Challenge → System → Impact */}
                  <div className="space-y-3 py-4 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[13px]">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-2 shrink-0" />
                      <span className="text-zinc-400"><span className="text-amber-300/80 font-medium">Challenge:</span> 28% post-harvest spoilage from silent cold-chain failure.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-2 shrink-0" />
                      <span className="text-zinc-400"><span className="text-cyan-300/80 font-medium">System:</span> Edge IoT telemetry processing 12,500+ events/sec with offline-first buffering.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-2 shrink-0" />
                      <span className="text-zinc-400"><span className="text-emerald-300/80 font-medium">Impact:</span> 34% spoilage reduction · $380K+ perishable inventory saved annually.</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 font-mono">
                    {agrotrace.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                        <div className="text-base font-bold text-white">
                          <RollingCounter value={m.value} />
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/projects"
                      className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs flex items-center gap-2 hover:bg-zinc-100 transition cursor-pointer"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-zinc-500">140+ Distributed Clusters</span>
                  </div>
                </div>

                {/* Right: Browser Chrome Frame */}
                <div className="lg:col-span-7">
                  <div className="browser-frame relative aspect-[16/10] flex flex-col">
                    <div className="h-9 bg-[#0a0b14] border-b border-white/[0.06] px-4 flex items-center justify-between text-xs font-mono shrink-0 select-none">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="text-zinc-600 text-[10px] ml-2 hidden sm:inline">agrotrace.network/monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400/70 text-[10px]">Live</span>
                      </div>
                    </div>

                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src="/Images/Agrotrace.jpeg"
                        alt="AgroTrace AI Agricultural Platform"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Card3D>

          {/* SECONDARY: MediVerse + PHSS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* MediVerse */}
            <Card3D maxTilt={3} glowColor="rgba(99, 102, 241, 0.12)">
              <article className="rounded-[1.75rem] p-7 sm:p-8 bg-[#07070f] border border-white/[0.08] hover:border-indigo-500/20 flex flex-col justify-between h-full group transition-all duration-500">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/15 text-indigo-300/70 text-[11px] font-mono">
                      {mediverse.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/70">{mediverse.status}</span>
                  </div>

                  {/* Browser Frame */}
                  <div className="browser-frame relative aspect-[16/9] flex flex-col">
                    <div className="h-8 bg-[#0a0b14] border-b border-white/[0.06] px-3 flex items-center gap-1.5 shrink-0 select-none">
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="text-zinc-600 text-[9px] font-mono ml-1.5 hidden sm:inline">mediverse.health/triage</span>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src="/Images/Mediverse.jpeg"
                        alt={mediverse.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent opacity-50" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                      {mediverse.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{mediverse.subtitle}</p>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-zinc-500 mt-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400" />
                      <span>Architected by Muhammad Mujahid · Axorks Studio</span>
                    </div>
                  </div>

                  {/* Challenge → System → Impact */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono">
                    <div className="text-zinc-400"><span className="text-amber-300/70 font-medium">Challenge:</span> 18-min manual lookup delay per patient visit</div>
                    <div className="text-zinc-400"><span className="text-indigo-300/70 font-medium">System:</span> FHIR R4 encrypted event bus & 0.2s ER queue</div>
                    <div className="text-emerald-400/80"><span className="font-medium">Impact:</span> 1.8 hrs/shift saved · 100% security audit pass</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.04] text-center font-mono">
                    {mediverse.metrics.map((m, idx) => (
                      <div key={idx} className="p-1.5">
                        <div className="text-xs font-bold text-white">{m.value}</div>
                        <div className="text-[9px] text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-xs font-mono text-indigo-400/80 hover:text-indigo-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Healthcare Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-zinc-600">180K+ Encounters</span>
                </div>
              </article>
            </Card3D>

            {/* PHSS */}
            <Card3D maxTilt={3} glowColor="rgba(56, 189, 248, 0.12)">
              <article className="rounded-[1.75rem] p-7 sm:p-8 bg-[#07070f] border border-white/[0.08] hover:border-cyan-500/20 flex flex-col justify-between h-full group transition-all duration-500">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/15 text-cyan-300/70 text-[11px] font-mono">
                      {phss.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400/70">{phss.status}</span>
                  </div>

                  {/* Browser Frame */}
                  <div className="browser-frame relative aspect-[16/9] flex flex-col">
                    <div className="h-8 bg-[#0a0b14] border-b border-white/[0.06] px-3 flex items-center gap-1.5 shrink-0 select-none">
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="text-zinc-600 text-[9px] font-mono ml-1.5 hidden sm:inline">campus.phss.edu.pk/portal</span>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src="/Images/PHSS Homepage.jpg"
                        alt={phss.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent opacity-50" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {phss.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{phss.subtitle}</p>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-zinc-500 mt-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>Architected by Muhammad Mujahid · Axorks Studio</span>
                    </div>
                  </div>

                  {/* Challenge → System → Impact */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono">
                    <div className="text-zinc-400"><span className="text-amber-300/70 font-medium">Challenge:</span> 3 weeks overtime on manual report cards & fee loss</div>
                    <div className="text-zinc-400"><span className="text-cyan-300/70 font-medium">System:</span> Instant GPA engine + biometric WhatsApp alerts</div>
                    <div className="text-emerald-400/80"><span className="font-medium">Impact:</span> 92% faster grading · 99.4% fee recovery</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.04] text-center font-mono">
                    {phss.metrics.map((m, idx) => (
                      <div key={idx} className="p-1.5">
                        <div className="text-xs font-bold text-white">{m.value}</div>
                        <div className="text-[9px] text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="text-xs font-mono text-cyan-400/80 hover:text-cyan-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Campus ERP Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-zinc-600">3,200+ Active Seats</span>
                </div>
              </article>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 4. Executive Proof & Testimonials — Elevated Surface */}
      <section ref={testimonialsRef} className="py-28 sm:py-36 surface-elevated relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-indigo-500/[0.03] blur-[180px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-px bg-emerald-400/60" />
              <span className="text-[11px] font-mono text-emerald-400 font-medium uppercase tracking-widest">
                Client Proof
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-[1.15]">
              What clients say after launch.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-[1.75rem] p-7 sm:p-8 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] h-full flex flex-col justify-between transition-all duration-500 group">
                  <div className="space-y-5">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm text-zinc-300 leading-relaxed font-light italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">{testimonial.clientName}</div>
                      <div className="text-[11px] text-zinc-500">{testimonial.clientRole}, {testimonial.company}</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/70 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15">
                      {testimonial.verifiedMetric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: '100% IP Ownership', detail: 'Every repo, every asset' },
              { icon: ShieldCheck, label: '30-Day Hypercare', detail: 'Post-launch stability' },
              { icon: Terminal, label: 'Strict TypeScript', detail: 'Zero any, zero runtime errors' },
              { icon: MessageSquare, label: '< 2h Response', detail: 'Direct founder access' }
            ].map((guarantee) => (
              <div key={guarantee.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-center space-y-2.5">
                <guarantee.icon className="w-5 h-5 text-cyan-400/60 mx-auto" />
                <div className="text-xs font-semibold text-white">{guarantee.label}</div>
                <div className="text-[10px] text-zinc-500 font-mono">{guarantee.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO & GEO Section */}
      <AeoGeoSection />

      {/* 6. Final Conversion — Calm Close */}
      <section className="py-28 sm:py-36 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/[0.04] blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center space-y-8 relative z-10">
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-8 h-px bg-emerald-400/60" />
              <span className="text-[11px] font-mono text-emerald-400 font-medium uppercase tracking-widest">
                Start a conversation
              </span>
              <span className="w-8 h-px bg-emerald-400/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-[1.15]">
              Have a project in mind?
              <br />
              <span className="text-zinc-400 font-normal">Let's discuss it directly.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              No sales reps, no discovery decks. Send a quick WhatsApp message to discuss timeline, scope, and ballpark budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] text-white font-medium text-sm flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4 text-cyan-400/70" />
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/70">Response within 2 hours</span>
            </span>
            <span className="text-zinc-700">·</span>
            <span>100% Code & IP Ownership</span>
            <span className="text-zinc-700">·</span>
            <span>Milestone-Based Billing</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
