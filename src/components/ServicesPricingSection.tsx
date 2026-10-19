import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Code, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  FileCheck, 
  Lock, 
  Award,
  Sliders,
  CheckCircle2,
  Layers,
  Layers3
} from 'lucide-react';
import { PRICING_PLANS, PRICING_ADDONS, calculateCustomEstimate, formatWhatsAppQuoteMessage } from '../utils/pricing.ts';
import { CONTACT_INFO, TESTIMONIALS_DATA } from '../data/portfolioData.ts';
import { Card3D } from './Card3D.tsx';

export const ServicesPricingSection: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('flagship');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['ai_engine']);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [engagementModel, setEngagementModel] = useState<'all' | 'sprint' | 'retainer'>('all');

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const estimate = calculateCustomEstimate(selectedPlanId, selectedAddons);
  const whatsAppQuoteUrl = `https://wa.me/923082789210?text=${formatWhatsAppQuoteMessage(
    clientName,
    clientEmail,
    selectedPlanId,
    selectedAddons,
    clientNotes
  )}`;

  const getTierRoiBadge = (id: string) => {
    switch (id) {
      case 'mvp':
        return 'Accelerates Launch by 6-8 Weeks';
      case 'flagship':
        return 'Highest Commercial Conversion & Speed';
      case 'retainer':
        return '70% Savings vs. In-House Lead';
      default:
        return 'Guaranteed SLA';
    }
  };

  const visiblePlans = engagementModel === 'all'
    ? PRICING_PLANS
    : engagementModel === 'sprint'
    ? PRICING_PLANS.filter((p) => p.id !== 'retainer')
    : PRICING_PLANS.filter((p) => p.id === 'retainer');

  return (
    <section id="services" className="relative py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Executive Engineering & Investment
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Predictable delivery cycles, full intellectual property transfer, and uncompromising software craftsmanship. Select a core package or construct a tailored scope.
          </p>

          {/* Model Switcher Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Models' },
              { id: 'sprint', label: 'Fixed Sprints (MVP & Flagship)' },
              { id: 'retainer', label: 'Ongoing Leadership (Retainer)' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setEngagementModel(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  engagementModel === tab.id
                    ? 'bg-white text-zinc-950 font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* High-Trust Guarantees Ribbon with 3D Depth */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              icon: <Lock className="w-4 h-4 text-cyan-400" />,
              title: '100% IP Ownership',
              desc: 'Complete code repository & license handover on delivery'
            },
            {
              icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
              title: '30-Day SLA Warranty',
              desc: 'Complimentary bug resolution & runtime stabilization'
            },
            {
              icon: <Code className="w-4 h-4 text-indigo-400" />,
              title: 'Zero Slop Codebase',
              desc: 'Strict TypeScript typing, modular tests & 95+ performance'
            },
            {
              icon: <FileCheck className="w-4 h-4 text-amber-400" />,
              title: 'Milestone Escrow',
              desc: 'Progress-gated deliverables with direct executive sign-off'
            }
          ].map((item, idx) => (
            <Card3D key={idx} maxTilt={4} glowColor="rgba(255,255,255,0.08)">
              <div className="p-4 rounded-2xl glass-panel border border-white/[0.08] flex items-start gap-3 h-full shadow-lg">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-display">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Executive Pricing Packages with 3D Depth & Glare */}
        <div className={`grid grid-cols-1 ${visiblePlans.length === 1 ? 'max-w-md mx-auto' : 'lg:grid-cols-3'} gap-8 mb-20 items-stretch`}>
          {visiblePlans.map((plan) => {
            const isFeatured = plan.isPopular;
            const isSelectedInCalc = selectedPlanId === plan.id;

            return (
              <Card3D
                key={plan.id}
                maxTilt={isFeatured ? 7 : 5}
                glowColor={isFeatured ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.1)'}
                className="h-full"
              >
                <div
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-500 ${
                    isFeatured
                      ? 'glass-panel-glow border-cyan-400/40 bg-zinc-950/85 shadow-[0_24px_60px_rgba(14,165,233,0.18)] ring-1 ring-cyan-400/35'
                      : 'glass-panel border-white/[0.08] bg-zinc-950/60 hover:border-white/20'
                  }`}
                >
                  {/* Popular Badge */}
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-black text-xs font-bold font-mono tracking-wider uppercase shadow-xl flex items-center gap-1.5 z-20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Selected by Founders</span>
                    </div>
                  )}

                  <div>
                    {/* Title & Tagline */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-300 px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                        ~{plan.baseWeeks} {plan.id === 'retainer' ? 'sprints/mo' : 'weeks'}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 mt-2 min-h-[36px] leading-relaxed font-light">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="my-6 pb-6 border-b border-white/[0.08]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                          ${plan.basePrice.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {plan.id === 'retainer' ? '/ month' : 'flat investment'}
                        </span>
                      </div>

                      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{getTierRoiBadge(plan.id)}</span>
                      </div>
                    </div>

                    {/* Ideal For callout */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 text-xs text-zinc-300">
                      <span className="text-cyan-400 font-mono font-medium">Target Fit:</span> {plan.idealFor}
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Included Deliverables:
                      </div>
                      {plan.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-snug">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                    <a
                      href={`https://wa.me/923082789210?text=${encodeURIComponent(
                        `Hi Muhammad, I would like to reserve the ${plan.name} package for our product ($${plan.basePrice.toLocaleString()}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                        isFeatured
                          ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(56,189,248,0.4)]'
                          : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Engage on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPlanId(plan.id);
                        const calcElem = document.getElementById('pricing-calculator');
                        calcElem?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-center text-[11px] font-mono text-zinc-400 hover:text-cyan-300 py-1 cursor-pointer transition-colors"
                    >
                      {isSelectedInCalc ? '✓ Active in Scope Estimator below' : 'Customize with Add-ons ↓'}
                    </button>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Interactive Scope & Investment Estimator with 3D Depth */}
        <Card3D maxTilt={3} glowColor="rgba(56, 189, 248, 0.12)">
          <div id="pricing-calculator" className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/12 relative overflow-hidden mb-20 scroll-mt-24 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <Sliders className="w-4 h-4" />
                  <span>Interactive Scope Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                  Configure Your Custom Build
                </h3>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Instant quote with pre-formatted WhatsApp brief
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              {/* Left Options */}
              <div className="lg:col-span-7 space-y-6">
                {/* Select Plan Switcher */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    1. Select Base Architecture Plan
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PRICING_PLANS.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          selectedPlanId === plan.id
                            ? 'bg-cyan-500/10 border-cyan-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{plan.name}</div>
                        <div className="text-xs font-mono text-cyan-300 mt-1">${plan.basePrice.toLocaleString()}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add-ons selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    2. Select Modular Capabilities (Add-ons)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRICING_ADDONS.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                            isChecked
                              ? 'bg-indigo-500/10 border-indigo-400/40 text-white shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                              : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          <div className={`mt-0.5 w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-zinc-600'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white">{addon.name}</span>
                              <span className="text-xs font-mono text-indigo-300">+${addon.price}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{addon.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Client Brief Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Henderson"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Your Work Email</label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Brief Project Notes (Optional)</label>
                    <input
                      type="text"
                      placeholder="Briefly describe your product goals, timeline, or reference ideas..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Summary Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/85 border border-cyan-500/25 flex flex-col justify-between space-y-6 shadow-xl">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    Estimated Architecture Scope
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {estimate.selectedPlan.name}
                  </h4>

                  <div className="mt-4 space-y-2 py-3 border-y border-white/10 text-xs">
                    <div className="flex justify-between text-zinc-300">
                      <span>Base Architecture:</span>
                      <span className="font-mono text-white">${estimate.selectedPlan.basePrice.toLocaleString()}</span>
                    </div>
                    {estimate.addonsList.map((addon) => (
                      <div key={addon.id} className="flex justify-between text-zinc-400">
                        <span className="truncate pr-2">+ {addon.name}:</span>
                        <span className="font-mono text-indigo-300">${addon.price.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-zinc-300 pt-2 border-t border-white/[0.06]">
                      <span>Estimated Timeline:</span>
                      <span className="font-mono text-cyan-300">~{estimate.totalWeeks} Weeks</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="text-xs font-mono text-zinc-400 uppercase">Total Estimated Value</span>
                    <div className="text-3xl font-black font-display text-white text-gradient-cyan">
                      ${estimate.totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={whatsAppQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Configured Scope to WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="text-center text-[11px] font-mono text-zinc-500">
                    Direct connection with Muhammad Mujahid • +92 308 2789210
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card3D>

        {/* Client Testimonials */}
        <div className="mt-16">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider text-center mb-6">
            Verified Partner Endorsements
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <Card3D key={t.id} maxTilt={4} glowColor="rgba(255,255,255,0.06)">
                <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] flex flex-col justify-between h-full shadow-lg">
                  <p className="text-xs sm:text-sm text-zinc-300/90 italic leading-relaxed mb-6 font-light">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-display">{t.clientName}</div>
                      <div className="text-[11px] text-zinc-400 font-mono">{t.clientRole}, {t.company}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                      {t.verifiedMetric}
                    </span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
