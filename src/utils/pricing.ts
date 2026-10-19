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
  deliverables: string[];
  idealFor: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'mvp',
    name: 'Strategic MVP',
    tagline: 'Rapid market validation with robust engineering fundamentals',
    basePrice: 3500,
    baseWeeks: 3,
    deliverables: [
      'Full-Stack Architecture (React/Next.js + Node/Postgres)',
      'Responsive Liquid Glass UI with Micro-interactions',
      'Core Authentication, Roles & RBAC',
      'Essential API Integrations & Database Schema',
      'Production Deployment with CI/CD Pipeline',
      '14-Day Post-Launch Hypercare Support'
    ],
    idealFor: 'Funded founders & startups seeking immediate market entry'
  },
  {
    id: 'flagship',
    name: 'Flagship Digital Product',
    tagline: 'End-to-end bespoke system engineered for performance and scale',
    basePrice: 7500,
    baseWeeks: 5,
    isPopular: true,
    deliverables: [
      'Bespoke Cinematic UI/UX with Custom Motion & Micro-interactions',
      'Enterprise-Grade Modular Architecture & Strict Typing',
      'Custom AI/LLM Workflow or Real-Time Engine Integration',
      'Comprehensive Data Layer, Caching & Search Engine Indexing',
      'Automated Test Suite & Lighthouse 95+ Performance Tuning',
      '30-Day SLA & Production Guarantee with Full Code Ownership'
    ],
    idealFor: 'Scale-ups, established enterprises & high-tier direct-to-consumer brands'
  },
  {
    id: 'retainer',
    name: 'Fractional Engineering Lead',
    tagline: 'Continuous elite technical direction and high-velocity delivery',
    basePrice: 4200,
    baseWeeks: 4,
    deliverables: [
      'Dedicated Weekly Engineering Sprints & Direct WhatsApp Access',
      'Continuous Feature Velocity & Architecture Reviews',
      'Performance Optimization & Cloud Cost Rationalization',
      'Tech Debt Remediation & Security Hardening',
      'Direct Stakeholder Alignment & Priority Roadmap Execution',
      'Cancel or Pause Anytime with 14-Day Notice'
    ],
    idealFor: 'Organizations needing executive-level execution without full-time overhead'
  }
];

export const PRICING_ADDONS: PricingAddon[] = [
  {
    id: 'ai_engine',
    name: 'Proprietary AI / LLM Workflows',
    price: 1800,
    weeks: 1,
    description: 'Custom embeddings, automated agents, or RAG pipeline integration'
  },
  {
    id: 'realtime_sync',
    name: 'Real-Time Sync & WebSocket Layer',
    price: 1200,
    weeks: 1,
    description: 'Instant collaborative state, live telemetry or streaming notifications'
  },
  {
    id: 'pwa_offline',
    name: 'Offline-First PWA & Mobile Web',
    price: 1100,
    weeks: 0.5,
    description: 'Service workers, offline caching and app-store-ready installability'
  },
  {
    id: 'enterprise_security',
    name: 'Enterprise Security & Compliance',
    price: 1500,
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
  const plan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[1];
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
