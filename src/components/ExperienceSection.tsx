import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA, CONTACT_INFO } from '../data/portfolioData.ts';
import { Card3D } from './Card3D.tsx';

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} id="experience" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Photo & Biography with Scroll-triggered Slide In from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ARCHITECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Engineering Leadership & Background
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              {CONTACT_INFO.bio}
            </p>

            {/* Executive Portrait with 3D Depth using actual photo */}
            <div className="w-full max-w-sm pt-2">
              <Card3D maxTilt={6} glowColor="rgba(56, 189, 248, 0.25)">
                <div className="relative group">
                  {/* Outer Liquid Glow Halo */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/25 via-indigo-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                  {/* Main Container */}
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
                    <img
                      src="/Images/Focused Work in a Moody Tech Office.png"
                      alt="Muhammad Mujahid - Executive Portrait"
                      className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Ambient Dark Bottom Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/20 to-transparent opacity-85 pointer-events-none" />

                    {/* Top status indicator */}
                    <div className="absolute top-4 left-4 z-10 pointer-events-none">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>ARCHITECT HQ</span>
                      </div>
                    </div>

                    {/* Caption on Photo */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs z-10 pointer-events-none">
                      <div>
                        <div className="font-bold text-white font-display text-base tracking-tight">Muhammad Mujahid</div>
                        <div className="text-[11px] font-mono text-cyan-300">Founder • Axorks</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Active Lead
                      </span>
                    </div>

                    {/* Specular Liquid Border Sheen */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/[0.08]" />
                  </div>
                </div>
              </Card3D>
            </div>

            {/* LinkedIn Verification Link */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition cursor-pointer"
              >
                <span>View Full Career on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Career Timeline with Slide In from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Chronological Track Record
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, expIdx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                  transition={{ duration: 0.6, delay: 0.2 + expIdx * 0.15, ease: 'easeOut' }}
                >
                  <Card3D maxTilt={4} glowColor="rgba(255, 255, 255, 0.08)">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-4 hover:border-white/15 transition-all shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                        <div>
                          <h3 className="text-xl font-bold text-white font-display">
                            {exp.role}
                          </h3>
                          <div className="text-xs font-mono text-cyan-300 mt-0.5">
                            {exp.organization}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.period}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        {exp.summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.3, delay: 0.35 + sIdx * 0.04 }}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
