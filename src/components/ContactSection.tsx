import React, { useState } from 'react';
import { 
  MessageSquare, 
  Linkedin, 
  Globe, 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData.ts';
import { Card3D } from './Card3D.tsx';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Flagship Digital Product',
    budget: '$5,000 - $10,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi Muhammad,
I would like to initiate an engineering consultation.
- Name: ${formData.name || 'Anonymous Client'}
- Email: ${formData.email || 'Not specified'}
- Scope Type: ${formData.projectType}
- Target Budget: ${formData.budget}
- Notes: ${formData.message || 'Ready to discuss roadmap.'}`;

    const url = `https://wa.me/923082789210?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INITIATE COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Direct Executive Channel
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Reach Muhammad Mujahid directly for architecture consultation, product builds under Axorks, or fractional technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards with 3D Depth */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <Card3D maxTilt={5} glowColor="rgba(16, 185, 129, 0.25)">
              <div className="p-6 rounded-3xl glass-panel border border-emerald-500/25 bg-emerald-950/15 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                        Fastest Response (Avg &lt; 2 hrs)
                      </div>
                      <div className="text-base font-bold text-white font-display">
                        Direct WhatsApp
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-black/50 border border-white/10 text-xs font-mono">
                  <span className="text-zinc-200">{CONTACT_INFO.whatsapp}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_INFO.whatsapp, 'whatsapp')}
                    className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copiedField === 'whatsapp' ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
                >
                  <span>Launch WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Card3D>

            {/* LinkedIn Card */}
            <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.15)">
              <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">Professional Network</div>
                      <div className="text-base font-bold text-white font-display">LinkedIn</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Connect with Muhammad Mujahid for background vetting and recommendations.
                </p>
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>linkedin.com/in/muhammad-mujahid-dev</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </Card3D>

            {/* Axorks Studio Card */}
            <Card3D maxTilt={4} glowColor="rgba(129, 140, 248, 0.15)">
              <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/[0.04] text-white">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">Engineering Agency</div>
                      <div className="text-base font-bold text-white font-display">Axorks</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Official venture portal for institutional and enterprise software contracts.
                </p>
                <a
                  href={CONTACT_INFO.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Visit axorks.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Direct Consultation Inquiry Form with 3D Depth */}
          <div className="lg:col-span-7">
            <Card3D maxTilt={3} glowColor="rgba(255, 255, 255, 0.08)">
              <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 bg-zinc-950/70 shadow-2xl">
                <div className="pb-6 border-b border-white/10">
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    Send Project Brief
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Submissions automatically compile into a high-priority direct WhatsApp consultation message.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Your Name / Stakeholder
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Work Email / Organization
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Engagement Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Strategic MVP Build ($3,500)">Strategic MVP Build ($3,500)</option>
                        <option value="Flagship Digital Product ($7,500)">Flagship Digital Product ($7,500)</option>
                        <option value="Fractional Engineering Retainer ($4,200/mo)">Fractional Retainer ($4,200/mo)</option>
                        <option value="Custom Enterprise Architecture">Custom Enterprise Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="$3,500 - $5,000">$3,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+ Enterprise">$25,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                      Project Scope & Objectives
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline key milestones, existing tech stack if any, and target timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Project Brief to Muhammad Mujahid</span>
                  </button>

                  {submitted && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center">
                      Brief formatted and forwarded to WhatsApp! We will respond within 2 hours.
                    </div>
                  )}
                </form>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
