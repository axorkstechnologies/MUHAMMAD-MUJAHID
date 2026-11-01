import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  Lock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData.ts';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Custom Web Platform & Business System'
}) => {
  const [topic, setTopic] = useState<string>(defaultTopic);
  const [timeline, setTimeline] = useState<string>('Immediate (within 2-3 weeks)');
  const [budgetTier, setBudgetTier] = useState<string>('$900 - $1,750 (Custom Web App / MVP)');
  const [clientName, setClientName] = useState<string>('');
  const [contactHandle, setContactHandle] = useState<string>('');
  const [preferredSlot, setPreferredSlot] = useState<string>('Morning (PKT / EU friendly)');
  const [projectBrief, setProjectBrief] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi Muhammad,
I would like to book a 20-minute Technical Strategy Call.
- Stakeholder: ${clientName || 'Prospective Client'}
- Contact: ${contactHandle || 'Not specified'}
- Focus Area: ${topic}
- Target Timeline: ${timeline}
- Target Budget: ${budgetTier}
- Preferred Meeting Slot: ${preferredSlot}
${projectBrief ? `- Context / Objectives: ${projectBrief.trim()}` : ''}`;

    const url = `https://wa.me/923082789210?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#07070e] border border-white/15 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-8"
          >
            {/* Subtle glow header */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>DIRECT ARCHITECT CONSULTATION • 20 MIN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                Book a Technical Strategy Call
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Direct dialogue with Muhammad Mujahid. We review your architecture, evaluate scope feasibility, and provide honest ballpark budgets—zero sales pitches.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name / Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Lee (Founder & CEO)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Work Email / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. jordan@scaleup.com or +1..."
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Project / Focus Area
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer transition"
                  >
                    <option value="Custom Web Platform & Strategic MVP (From $900 - $1,750)">Custom Web Platform & MVP ($900 - $1,750)</option>
                    <option value="Flagship Digital Product Sprint ($3,750)">Flagship Digital Product ($3,750)</option>
                    <option value="Professional Web Presence & Landing Asset ($450)">Professional Web Presence & Landing Asset ($450)</option>
                    <option value="Intelligent Visibility Suite: SEO + AEO + GEO ($475/mo)">All-In Visibility Suite: SEO + AEO + GEO ($475/mo)</option>
                    <option value="AI Visibility Foundation Setup ($300 one-time / $99/mo)">Visibility Foundation Setup ($300 / $99/mo)</option>
                    <option value="Campus / School ERP Platform (Turnkey from $4,000)">Campus / School ERP Platform (From $4,000)</option>
                    <option value="Clinical Healthcare EHR Platform (Turnkey from $5,000)">Clinical Healthcare EHR (From $5,000)</option>
                    <option value="Fractional Systems Architect Retainer ($2,100/mo)">Fractional Systems Architect ($2,100/mo)</option>
                    <option value="Technical Architecture Review & Feasibility Audit">Architecture Review & Feasibility Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Target Budget Allocation
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer transition"
                  >
                    <option value="$450 - $800 (Entry Web Presence / Landing Asset)">$450 - $800 (Entry Web Presence / Landing Asset)</option>
                    <option value="$900 - $1,750 (Custom Web App / Strategic MVP)">$900 - $1,750 (Custom Web App / MVP)</option>
                    <option value="$3,750 - $7,500 (Flagship Product / Scaled Platform)">$3,750 - $7,500 (Flagship Product / Scaled Platform)</option>
                    <option value="$300 setup or $99/mo - $475/mo (Intelligent Visibility Suite)">$300 or $99/mo - $475/mo (AI Visibility Retainer)</option>
                    <option value="$4,000 - $10,000+ (Institutional Campus ERP / Clinical EHR)">$4,000 - $10,000+ (Institutional ERP / EHR)</option>
                    <option value="$2,100 / month (Fractional Systems Architect Retainer)">$2,100 / month (Fractional CTO Retainer)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Target Kickoff Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer transition"
                  >
                    <option value="Immediate (Within 1-2 weeks)">Immediate (Within 1-2 weeks)</option>
                    <option value="Next 3-4 weeks">Next 3-4 weeks</option>
                    <option value="Planning for next quarter">Planning for next quarter</option>
                    <option value="Exploratory technical consultation">Exploratory consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer transition"
                  >
                    <option value="Morning PKT (UTC+5) / EU Morning">Morning PKT (10 AM - 1 PM PKT / EU Morning)</option>
                    <option value="Afternoon PKT (2 PM - 6 PM PKT / UK Noon)">Afternoon PKT (2 PM - 6 PM PKT / UK Noon)</option>
                    <option value="Evening PKT (7 PM - 11 PM PKT / US EST Morning)">Evening PKT (7 PM - 11 PM PKT / US EST Morning)</option>
                    <option value="Asynchronous WhatsApp Voice Exchange First">Asynchronous WhatsApp Voice Exchange First</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Brief System Context or Pain Points (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="What are you building or replacing? Any reference apps or technical requirements..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* Guarantees */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Direct reply &lt; 2 hrs</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Strict NDA &amp; Privacy Ready</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>100% IP Ownership Guarantee</span>
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm &amp; Send Strategy Call Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
