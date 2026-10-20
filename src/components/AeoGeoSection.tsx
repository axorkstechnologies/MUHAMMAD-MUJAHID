import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Bot, 
  Search, 
  ChevronDown, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { Card3D } from './Card3D.tsx';
import { CONTACT_INFO } from '../data/portfolioData.ts';
import { AiConnectivityMesh } from './motion/AiConnectivityMesh.tsx';

interface FaqItem {
  question: string;
  answer: string;
  category: 'AEO' | 'GEO' | 'SEO' | 'Pricing';
}

export const AeoGeoSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is Answer Engine Optimization (AEO) and how does it work?',
      answer: 'Answer Engine Optimization (AEO) is the engineering discipline of structuring your digital content and schema markup so that AI answer engines (Perplexity AI, Google AI Overviews / SGE, and voice assistants) cite your business as the definitive, verified answer to user queries rather than merely listing a blue link.',
      category: 'AEO'
    },
    {
      question: 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      answer: 'While traditional SEO optimizes for page rank and keyword density on Google and Bing, Generative Engine Optimization (GEO) optimizes for generative AI platform citations (ChatGPT, Google Gemini, Anthropic Claude). GEO ensures your brand entity, case studies, and service offerings are deeply integrated into the knowledge retrieval and RAG pipelines of large language models.',
      category: 'GEO'
    },
    {
      question: 'What is included in the Full Visibility Package ($950 / month)?',
      answer: 'The Full Visibility Package unites traditional SEO ($250/mo), Answer Engine Optimization ($450/mo), and Generative Engine Optimization ($550/mo) into an all-in-one monthly plan for $950/month (saving $300/month). It provides complete cross-platform authority across Google Search, Perplexity AI, ChatGPT, Gemini, and Claude with monthly ranking and AI citation reporting.',
      category: 'Pricing'
    },
    {
      question: 'Why do modern businesses need AEO and GEO in 2026?',
      answer: 'Over 40% of commercial intent queries now occur directly inside conversational AI platforms and search engines with synthesized AI summaries. If your website only has traditional SEO, you are invisible to prospective clients asking AI assistants for vendor recommendations.',
      category: 'GEO'
    },
    {
      question: 'Who delivers these visibility services?',
      answer: 'All visibility strategies and implementations are delivered directly by Muhammad Mujahid, Founder & Principal Systems Architect. Clients receive direct founder execution, verified JSON-LD schema implementation, entity graph registration, and bi-weekly performance reports with zero junior handoffs.',
      category: 'AEO'
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 surface-elevated" aria-labelledby="aeo-geo-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-px bg-emerald-400/60" />
            <span className="text-[11px] font-mono text-emerald-400 font-medium uppercase tracking-widest">
              Intelligent Visibility
            </span>
            <span className="w-8 h-px bg-emerald-400/60" />
          </div>

          <h2 id="aeo-geo-heading" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white font-display tracking-tight leading-[1.15]">
            How your customers find you in 2026.
            <br />
            <span className="text-zinc-400 font-normal">Search engines meet modern AI.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Over 40% of buying decisions now happen inside AI summaries and conversational assistants. Here's how we ensure your business gets recommended.
          </p>
        </div>

        {/* 3 Pillars Comparison Grid (SEO vs AEO vs GEO) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: SEO */}
          <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.15)">
            <article className="p-7 rounded-[1.75rem] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] h-full flex flex-col justify-between space-y-5 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/8 border border-cyan-500/15 text-cyan-400/80">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-300">$250 / mo</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">1. SEO (Search Engine)</h3>
                <div className="text-[11px] font-mono text-zinc-400">Target: Google & Bing Search</div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Captures prospects actively typing queries into traditional search bars. Focuses on keyword rankings, technical speed, crawl budgets, and backlink authority.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400 space-y-1">
                <div>Primary Metric: SERP Rank #1-#3</div>
                <div>Format: Organic Blue Link + Snippet</div>
              </div>
            </article>
          </Card3D>

          {/* Pillar 2: AEO */}
          <Card3D maxTilt={4} glowColor="rgba(129, 140, 248, 0.15)">
            <article className="p-7 rounded-[1.75rem] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] h-full flex flex-col justify-between space-y-5 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-indigo-500/8 border border-indigo-500/15 text-indigo-400/80">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-300">$450 / mo</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">2. AEO (Answer Engine)</h3>
                <div className="text-[11px] font-mono text-zinc-400">Target: Perplexity & AI Overviews</div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Structures facts, Q&A schemas, and entity graphs so AI answer engines present your brand as the direct authoritative answer instead of competing links.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400 space-y-1">
                <div>Primary Metric: Direct Citation & Source Box</div>
                <div>Format: Synthesized Consensus Answer</div>
              </div>
            </article>
          </Card3D>

          {/* Pillar 3: GEO */}
          <Card3D maxTilt={4} glowColor="rgba(16, 185, 129, 0.2)">
            <article className="p-7 rounded-[1.75rem] bg-emerald-950/[0.06] border border-emerald-500/15 hover:border-emerald-500/25 h-full flex flex-col justify-between space-y-5 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300/80">$550 / mo</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">3. GEO (Generative Engine)</h3>
                <div className="text-[11px] font-mono text-emerald-300/80">Target: ChatGPT, Gemini & Claude</div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Builds semantic entity recognition across conversational LLMs so your business is recommended whenever prospects ask AI for solutions in your domain.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90 space-y-1">
                <div>Primary Metric: Conversational Recommendation</div>
                <div>Format: Natural Language AI Endorsement</div>
              </div>
            </article>
          </Card3D>
        </div>

        {/* All-In Full Visibility Suite Callout Banner */}
        <div className="p-8 sm:p-10 rounded-[1.75rem] bg-gradient-to-r from-emerald-950/10 via-[#07070f] to-cyan-950/10 border border-emerald-500/15 hover:border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-bold">
              <span>ALL-IN BUNDLE • SAVE $300/MONTH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              The Full Cross-Platform Visibility Suite (SEO + AEO + GEO)
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-2xl">
              Complete organic domination across traditional search (Google/Bing) and conversational AI platforms (ChatGPT, Perplexity, Gemini, Claude). Includes continuous JSON-LD schema engineering, entity citation tracking, and monthly AI visibility audits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <div className="text-center md:text-right">
              <div className="text-3xl font-black text-white font-display">$950<span className="text-sm text-zinc-400 font-normal"> / mo</span></div>
              <div className="text-[11px] font-mono text-zinc-400 line-through">Value: $1,250 / mo</div>
            </div>
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Muhammad, I want to discuss the All-In Visibility Suite ($950/mo) for my company.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enroll in Full Suite</span>
            </a>
          </div>
        </div>

        {/* Interactive 5-Engine AI Connectivity Mesh */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono text-emerald-400/70 uppercase tracking-widest">
              How It Works
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Your brand, recommended by AI.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We connect your brand into the knowledge and reasoning systems of all major AI platforms — so they recommend you by name.
            </p>
          </div>

          <AiConnectivityMesh />
        </div>

        {/* Structured Q&A Accordion (AEO Direct Answers) */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-2 mb-8">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
              Common Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Frequently asked questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/[0.015] border border-white/[0.05] overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-white/[0.04]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Hook */}
        <div className="p-7 sm:p-9 rounded-[1.75rem] bg-emerald-950/[0.06] border border-emerald-500/12 hover:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto transition-all duration-500">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Ready to Audit Your Brand's AI & Google Visibility?
            </h4>
            <p className="text-xs text-zinc-400 font-light">
              We analyze your current citation footprint on ChatGPT, Perplexity, and Google within 24 hours.
            </p>
          </div>
          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Muhammad, I would like to request an AI & Google Visibility Audit for my business.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0 transition-all duration-300"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Request Visibility Audit</span>
          </a>
        </div>
      </div>
    </section>
  );
};
