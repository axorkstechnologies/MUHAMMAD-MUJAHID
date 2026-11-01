export interface PricingAddon {
  id: string;
  name: string;
  price: number;
  weeks: number;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  basePrice: number;
  baseWeeks: number;
  isPopular?: boolean;
  badge?: string;
  deliverables: string[];
  idealFor: string;
  notFor?: string;
  scopeCategory: 'entry' | 'core_app' | 'flagship' | 'retainer';
}

export interface VisibilityTier {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  billingType: 'one-time' | 'subscription' | 'flexible';
  numericPrice: number;
  isPopular?: boolean;
  badge?: string;
  deliverables: string[];
  idealFor: string;
  tradeOffs: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'entry_web',
    name: 'Professional Web Presence',
    tagline: 'High-conversion founder portfolio, brand marketing site, or brochure conversion asset',
    basePrice: 199,
    baseWeeks: 1,
    scopeCategory: 'entry',
    badge: 'Entry Web Presence',
    deliverables: [
      '100% Custom Responsive Interface (React 19 / Modern Tailwind CSS)',
      'Lighthouse 95+ Performance, Speed & Core Web Vitals Optimization',
      'Polished Micro-Interactions & Refined Typographic Craft',
      'Direct Lead Capture Form & Pre-Filled WhatsApp Hook Integration',
      '100% Source Code Repository & Intellectual Property Ownership',
      '14-Day Post-Launch Hypercare Support'
    ],
    idealFor: 'Founders, consultants, boutiques & agencies needing an authoritative digital presence without custom backend databases',
    notFor: 'Multi-tenant database systems, complex user auth/RBAC, or custom backend API workflows (see Custom Web Platform)'
  },
  {
    id: 'mvp',
    name: 'Custom Web Platform & Strategic MVP',
    tagline: 'Bespoke full-stack web application engineered for rapid market traction and operational scale',
    basePrice: 499,
    baseWeeks: 3,
    scopeCategory: 'core_app',
    deliverables: [
      'Full-Stack Architecture (React/Next.js + Node.js / PostgreSQL)',
      'User Authentication, Role-Based Access Control (RBAC) & Secure Sessions',
      'Relational Database Modeling, Indexing & Automated Schema Migrations',
      'Custom Internal Dashboards, Operational Workflows & Webhooks',
      'Third-Party API Integrations (Stripe / Twilio / SendGrid / Custom APIs)',
      'Automated CI/CD Pipeline & Production Cloud Deployment',
      '30-Day Post-Launch Hypercare Support with 100% IP Transfer'
    ],
    idealFor: 'Funded founders, startups & growing SMEs replacing fragmented spreadsheets or off-the-shelf software limitations',
    notFor: 'Simple 3-page brochure sites (see Professional Web Presence) or high-frequency banking cores'
  },
  {
    id: 'flagship',
    name: 'Flagship Digital Product System',
    tagline: 'End-to-end custom operating system engineered for enterprise performance, scale, and high conversion',
    basePrice: 1499,
    baseWeeks: 5,
    isPopular: true,
    badge: 'Starting from $1,499',
    scopeCategory: 'flagship',
    deliverables: [
      'Bespoke Enterprise UI/UX Design System with 60fps Micro-interactions',
      'Enterprise-Grade Modular Architecture & Strict TypeScript Typing',
      'Custom AI/LLM Workflow, RAG Pipeline or Real-Time WebSocket Engine',
      'Comprehensive Data Layer, Redis Caching & Search Engine Indexing',
      'Automated Test Suite (Unit & E2E) & 95+ Lighthouse Performance Guarantee',
      'Zero-Downtime Deployment Pipeline & Cloud Infrastructure Hardening',
      '30-Day SLA & Production Guarantee with Full Code Ownership Handover'
    ],
    idealFor: 'Scale-ups, established enterprises & high-tier direct-to-consumer brands scaling past 10,000+ active users',
    notFor: 'Early exploratory landing tests with unverified product-market fit'
  },
  {
    id: 'retainer',
    name: 'Fractional Systems Architect Retainer',
    tagline: 'Continuous elite technical direction and high-velocity sprint delivery directly with Muhammad',
    basePrice: 2100,
    baseWeeks: 4,
    scopeCategory: 'retainer',
    badge: 'Direct Founder Partnership',
    deliverables: [
      'Dedicated Weekly Engineering Sprints & Direct WhatsApp/Slack Access',
      'Continuous Feature Velocity, Code Profiling & Architecture Reviews',
      'Performance Optimization & Cloud Infrastructure Cost Rationalization',
      'Tech Debt Remediation, Automated Testing & Security Hardening',
      'Direct Stakeholder Alignment & Priority Roadmap Execution',
      'Cancel or Pause Anytime with 14-Day Notice'
    ],
    idealFor: 'Organizations needing executive-level execution and architectural guidance without full-time CTO overhead'
  }
];

export const VISIBILITY_TIERS: VisibilityTier[] = [
  {
    id: 'foundation_audit',
    name: 'Foundation Audit & Setup',
    tagline: 'Complete technical SEO, schema architecture, and AI readiness audit',
    priceDisplay: '$99 / month (or single month)',
    billingType: 'flexible',
    numericPrice: 99,
    badge: 'Zero-Risk Entry',
    deliverables: [
      'Comprehensive Technical SEO & Web Vitals Audit',
      'JSON-LD Schema Markup Architecture (Person, Org, Service, FAQ)',
      'Entity Graph Alignment for LLM Knowledge Retrieval',
      'Search Console & Indexation Pipeline Optimization',
      'Actionable Remediation Blueprint & AI Citation Roadmap'
    ],
    idealFor: 'Businesses wanting a rapid one-time foundation fix or low-friction entry point',
    tradeOffs: 'One-time setup fixes the foundation; ongoing monthly citation tracking & new model prompt tuning require the monthly retainer.'
  },
  {
    id: 'growth_aeo_geo',
    name: 'AEO + GEO Growth Engine',
    tagline: 'Targeted Answer & Generative Engine optimization for Perplexity & ChatGPT',
    priceDisplay: '$199 / month',
    billingType: 'subscription',
    numericPrice: 199,
    badge: 'Modern AI Search',
    deliverables: [
      'Everything in Foundation Setup plus continuous monthly optimization',
      'Perplexity AI & Google AI Overviews (SGE) Answer Engine Optimization',
      'ChatGPT, Gemini & Claude Semantic Citation Engineering',
      'Monthly Entity Authority & AI Citation Footprint Reports',
      'Bi-weekly schema updates & entity graph expansion'
    ],
    idealFor: 'High-growth brands looking to capture modern conversational search buyers',
    tradeOffs: 'Focuses heavily on conversational AI discovery; traditional Google SERP backlink building is secondary.'
  },
  {
    id: 'all_in_suite',
    name: 'All-In Visibility Engine',
    tagline: 'Complete omni-channel dominance across Google, ChatGPT, Perplexity, Gemini & Claude',
    priceDisplay: '$299 / month',
    billingType: 'subscription',
    numericPrice: 299,
    isPopular: true,
    badge: 'Recommended',
    deliverables: [
      'Omni-Channel Coverage: Traditional SEO + AEO + GEO',
      'Page-One Google/Bing Organic Rank Engineering',
      'Direct-Answer Consensus Citation in Perplexity & Google SGE',
      'Brand Entity Recommended by ChatGPT, Gemini & Claude by Name',
      'Bi-weekly Telemetry Reports & Knowledge Graph Synchronizations',
      'Direct WhatsApp Advisory Channel with Muhammad Mujahid'
    ],
    idealFor: 'Enterprises and funded founders demanding total brand dominance across both search engines and AI models',
    tradeOffs: 'Complete cross-platform coverage across Google and top AI reasoning engines.'
  }
];

export const PRICING_ADDONS: PricingAddon[] = [
  {
    id: 'ai_visibility_suite',
    name: 'All-In AI Visibility Suite (SEO + AEO + GEO)',
    price: 299,
    weeks: 1,
    description: 'Knowledge Graph integration, Schema JSON-LD markup, and ChatGPT/Perplexity citation pipeline'
  },
  {
    id: 'ai_engine',
    name: 'Proprietary AI / LLM Workflows',
    price: 499,
    weeks: 1,
    description: 'Custom embeddings, automated agents, or RAG pipeline integration'
  },
  {
    id: 'realtime_sync',
    name: 'Real-Time Sync & WebSocket Layer',
    price: 350,
    weeks: 1,
    description: 'Instant collaborative state, live data dashboards or streaming notifications'
  },
  {
    id: 'pwa_offline',
    name: 'Offline-First PWA & Mobile Web',
    price: 250,
    weeks: 0.5,
    description: 'Service workers, offline caching and app-store-ready installability'
  },
  {
    id: 'enterprise_security',
    name: 'Enterprise Security & Compliance',
    price: 400,
    weeks: 1,
    description: 'SOC2 readiness, audit logging, rate-limiting & automated penetration audits'
  }
];

export function calculateCustomEstimate(
  planId: string,
  selectedAddonIds: string[]
): {
  totalPrice: number;
  totalWeeks: number;
  selectedPlan: PricingPlan;
  addonsList: PricingAddon[];
} {
  const plan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[2]; // Default to flagship if not found
  const addons = PRICING_ADDONS.filter((addon) => selectedAddonIds.includes(addon.id));

  const addonPrice = addons.reduce((sum, item) => sum + item.price, 0);
  const addonWeeks = addons.reduce((sum, item) => sum + item.weeks, 0);

  return {
    totalPrice: plan.basePrice + addonPrice,
    totalWeeks: Math.ceil(plan.baseWeeks + addonWeeks),
    selectedPlan: plan,
    addonsList: addons
  };
}

export function formatWhatsAppQuoteMessage(
  name: string,
  email: string,
  planId: string,
  selectedAddonIds: string[],
  notes: string = ''
): string {
  const estimate = calculateCustomEstimate(planId, selectedAddonIds);
  const addonsText = estimate.addonsList.length > 0
    ? `\n- Add-ons: ${estimate.addonsList.map((a) => a.name).join(', ')}`
    : '';

  const cleanNotes = notes.trim() ? `\n- Project Notes: ${notes.trim()}` : '';

  const msg = `Hi Muhammad, I am interested in discussing a project via your portfolio.
- Name: ${name || 'Prospective Client'}
- Email: ${email || 'Not provided'}
- Package: ${estimate.selectedPlan.name} ($${estimate.totalPrice.toLocaleString()})${addonsText}
- Estimated Timeline: ~${estimate.totalWeeks} weeks${cleanNotes}

Looking forward to your reply.`;

  return encodeURIComponent(msg);
}
