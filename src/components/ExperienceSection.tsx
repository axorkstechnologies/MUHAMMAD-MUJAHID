import React from 'react';
import { Sparkles, Briefcase, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA, CONTACT_INFO } from '../data/portfolioData.ts';
import { PhotoPlaceholder } from './PhotoPlaceholder.tsx';
import { Card3D } from './Card3D.tsx';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Photo & Biography with 3D Depth */}
          <div className="lg:col-span-5 space-y-6">
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

            {/* Photo Placeholder in About section with 3D tilt */}
            <div className="w-full max-w-sm pt-2">
              <Card3D maxTilt={6} glowColor="rgba(56, 189, 248, 0.2)">
                <PhotoPlaceholder
                  id="executive-about-portrait"
                  variant="hero"
                  label="Executive Headshot Placeholder"
                />
              </Card3D>
            </div>

            {/* LinkedIn Verification Link */}
            <div className="pt-2">
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition cursor-pointer"
              >
                <span>View Full Career on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Career Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Chronological Track Record
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <Card3D key={exp.id} maxTilt={4} glowColor="rgba(255, 255, 255, 0.08)">
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
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
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
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
