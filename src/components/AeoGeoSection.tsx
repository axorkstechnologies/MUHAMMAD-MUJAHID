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
      answer: 'The Full Visibility Package unites traditional SEO ($250/mo), Answer Engine Optimization ($450/mo), and Generative Engine Optimization ($550/mo) into an all-in-one monthly plan for $950/month (saving $300/month). It provides complete cross-platform authority across Google Search, Perplexity AI, ChatGPT, Gemini, and Claude with monthly rank and citation telemetry.',
      category: 'Pricing'
    },
    {
      question: 'Why do modern businesses need AEO and GEO in 2026?',
      answer: 'Over 40% of commercial intent queries now occur directly inside conversational AI platforms and search engines with synthesized AI summaries. If your website only has traditional SEO, you are invisible to prospective clients asking AI assistants for vendor recommendations.',
      category: 'GEO'
    },
    {
      question: 'Who delivers these services at Axorks Studio?',
      answer: 'All visibility architectures are engineered directly by Muhammad Mujahid, Founder & Principal Software Architect at Axorks. Clients receive direct technical execution, verified JSON-LD schema implementation, entity graph registration, and bi-weekly performance telemetry with zero junior handoffs.',
      category: 'AEO'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 border-t border-white/[0.08]" aria-labelledby="aeo-geo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Brain className="w-3.5 h-3.5" />
            <span>AI Discovery & Search Intelligence</span>
          </div>

          <h2 id="aeo-geo-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            How Your Business Gets Discovered on <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Google and Modern AI Platforms</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Direct answer definitions, entity structuring, and generative citations. Understand the modern multi-engine visibility framework.
          </p>
        </div>

        {/* 3 Pillars Comparison Grid (SEO vs AEO vs GEO) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: SEO */}
          <Card3D maxTilt={4} glowColor="rgba(56, 189, 248, 0.15)">
            <article className="p-6 rounded-3xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">$250 / mo</span>
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
            <article className="p-6 rounded-3xl glass-panel border border-white/10 h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-bold">$450 / mo</span>
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
            <article className="p-6 rounded-3xl glass-panel border border-emerald-500/25 bg-emerald-950/10 h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">$550 / mo</span>
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

        {/* Structured Q&A Accordion (AEO Direct Answers) */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              AUTHORITATIVE DIRECT ANSWERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Frequently Asked Questions (AEO & GEO Reference)
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-300"
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
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-emerald-950/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
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
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] shrink-0 transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Request Visibility Audit</span>
          </a>
        </div>
      </div>
    </section>
  );
};
