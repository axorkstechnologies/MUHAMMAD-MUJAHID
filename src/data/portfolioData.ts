import { Project, ExperienceItem, Testimonial, MetricHighlight } from '../types.ts';

export const CONTACT_INFO = {
  name: 'Muhammad Mujahid',
  title: 'Founder & Principal Systems Architect',
  agency: 'Axorks',
  agencyUrl: 'https://axorks.com',
  whatsapp: '+92 308 2789210',
  whatsappUrl: 'https://wa.me/923082789210',
  linkedin: 'linkedin.com/in/muhammad-mujahid-dev',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-mujahid-dev',
  email: 'mujahidaryan222149@gmail.com',
  location: 'Karachi, Pakistan (Global Remote)',
  timezone: 'PKT (UTC+5)',
  availabilityStatus: 'Available for Q2/Q3 Projects • Direct Founder Delivery',
  bio: 'Founder of Axorks Studio and Principal Systems Architect. I specialize in two core areas: custom web platforms and intelligent visibility systems (SEO, AEO, and GEO). I also architect production enterprise systems (campus ERPs, healthcare platforms, and e-commerce) delivered through Axorks Studio. When you hire me, you work directly with the founder writing the code.'
};

export const EXECUTIVE_METRICS: MetricHighlight[] = [
  {
    value: '40K+',
    label: 'Daily Active Users',
    caption: 'Across AgroTrace, PHSS & MediVerse'
  },
  {
    value: '99.9%',
    label: 'Production Uptime',
    caption: 'Engineered for 24/7 business continuity'
  },
  {
    value: '4+',
    label: 'Flagship Systems',
    caption: 'Active in agriculture, healthcare & schools'
  },
  {
    value: '< 2h',
    label: 'Direct Response Time',
    caption: 'Direct founder WhatsApp & Slack channel'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'agrotrace',
    title: 'AgroTrace',
    subtitle: 'AI-Powered Agricultural IoT & Real-Time Monitoring',
    category: 'AI Systems',
    description: 'An intelligent agricultural platform connecting 140+ farm clusters and cold-storage facilities to eliminate harvest spoilage with automated predictive hazard alerts.',
    problem: 'Agricultural supply chains lost up to 28% of post-harvest produce due to silent refrigeration failures and paper-based tracking that could not pinpoint where spoilage occurred.',
    solution: 'Engineered a real-time IoT sensor ingestion pipeline with edge alerts, micro-climate monitoring, and verifiable supply-chain tracking dashboards for field managers.',
    challengePoints: [
      '28% post-harvest produce loss across regional transit and cold-storage',
      'Fragmented paper logs prevented locating points of temperature failure',
      'Harsh rural field environments with intermittent cellular connectivity'
    ],
    architecturePoints: [
      'Edge telemetry pipeline processing 12,500+ sensor telemetry events/sec',
      'Fault-tolerant offline-first sync cache with local SQLite buffer',
      'Automated predictive ML models evaluating spoilage thresholds in <24ms'
    ],
    impactPoints: [
      '34% reduction in verified cold-chain spoilage across 140+ clusters',
      'Over $380,000 in perishable inventory saved within first 6 months',
      '99.98% telemetry uptime across rural nodes with sub-minute alert dispatch'
    ],
    metrics: [
      { label: 'Events Processed/sec', value: '12,500+' },
      { label: 'Spoilage Reduction', value: '34%' },
      { label: 'Monitored Clusters', value: '140+' }
    ],
    tags: ['Next.js', 'TypeScript', 'Edge AI', 'IoT Systems', 'PostgreSQL', 'Tailwind CSS'],
    featuredImage: 'agrotrace',
    status: 'Production Live',
    liveUrl: 'https://axorks.com',
    year: '2025',
    role: 'Principal System Architect & Full-Stack Lead',
    deliveryModel: 'Axorks Studio Delivery',
    architectTag: 'Architected by Muhammad Mujahid · Delivered through Axorks Studio'
  },
  {
    id: 'mediverse',
    title: 'MediVerse',
    subtitle: 'Next-Gen Clinical Healthcare Management & FHIR Orchestration',
    category: 'Enterprise Platform',
    description: 'A unified clinical healthcare operating system providing instant electronic health records (EHR), automated triage queues, and doctor prescription workflows for 180,000+ patient visits.',
    problem: 'Doctors and clinics were buried in disjointed paperwork and disconnected legacy software, slowing down consultations and risking medication errors.',
    solution: 'Architected a secure, compliant clinical workflow engine with role-based access control, encrypted patient records, instant triage queues, and sub-second lab result dispersal.',
    challengePoints: [
      'Average 18-minute manual lookup delay per patient visit in legacy records',
      'High risk of contraindicated prescriptions due to disconnected pharmacy systems',
      'Strict regulatory compliance requirements (HIPAA, FHIR R4 interoperability)'
    ],
    architecturePoints: [
      'FHIR R4 compliant REST & WebSocket event bus for instant record dispersal',
      'AES-256 field-level encrypted patient records with cryptographic audit logs',
      'Sub-second triage priority queue syncing ER desks and doctor tablets'
    ],
    impactPoints: [
      '180,000+ patient encounters processed with zero data leakage',
      'Saved 1.8 hours per physician shift in administrative data entry',
      '100% compliance audit pass with sub-second prescription verification'
    ],
    metrics: [
      { label: 'Patient Encounters', value: '180,000+' },
      { label: 'Time Saved / Shift', value: '1.8 hrs' },
      { label: 'Compliance & Security', value: '100% Pass' }
    ],
    tags: ['React', 'Node.js / Express', 'FHIR Protocol', 'PostgreSQL', 'Redis Cache', 'Docker'],
    featuredImage: 'mediverse',
    status: 'Enterprise Active',
    liveUrl: 'https://axorks.com',
    year: '2024 - 2025',
    role: 'Lead Architect',
    deliveryModel: 'Axorks Studio Delivery',
    architectTag: 'Architected by Muhammad Mujahid · Delivered through Axorks Studio'
  },
  {
    id: 'fume',
    title: 'FUME Fragrances',
    subtitle: 'Ultra-Luxury Olfactory Experience & Premium E-Commerce',
    category: 'Luxury E-Commerce',
    description: 'A custom luxury digital flagship for artisanal perfumes featuring an interactive olfactory notes visualizer, scent discovery quiz, and frictionless checkout.',
    problem: 'Traditional luxury perfume e-commerce felt flat and transactional, resulting in high bounce rates and failing to convey the sensory prestige of artisanal scents.',
    solution: 'Designed and deployed an immersive digital flagship with interactive fragrance discovery quiz, multi-layered notes visualizer, and a seamless 2-step checkout.',
    challengePoints: [
      '68% bounce rate on static catalog pages unable to convey sensory notes',
      'High mobile checkout abandonment on multi-step legacy e-commerce forms',
      'Slow asset delivery degrading the premium emotional brand experience'
    ],
    architecturePoints: [
      'Interactive 60fps WebGL olfactory pyramid visualizer for top, heart, and base notes',
      'Algorithmic scent profile quiz mapping consumer preferences to matching scents',
      'Optimized headless architecture with sub-800ms Time-to-Interactive on mobile'
    ],
    impactPoints: [
      '+42% checkout conversion lift within 30 days post-launch',
      'Average session duration increased from 48 seconds to 4 minutes 12 seconds',
      '98/100 Google Lighthouse mobile performance score with zero layout shift'
    ],
    metrics: [
      { label: 'Checkout Conversion', value: '+42%' },
      { label: 'Avg Session Duration', value: '4m 12s' },
      { label: 'Mobile Performance', value: '98/100' }
    ],
    tags: ['React', 'WebGL Motion', 'Tailwind CSS', 'Stripe Payments', 'Headless Commerce'],
    featuredImage: 'fume',
    status: 'Client Deployed',
    liveUrl: 'https://axorks.com',
    year: '2024',
    role: 'Creative Director & Lead Developer',
    deliveryModel: 'Axorks Studio Delivery',
    architectTag: 'Architected by Muhammad Mujahid · Delivered through Axorks Studio'
  },
  {
    id: 'phss',
    title: 'PHSS School',
    subtitle: 'Scalable Academic ERP & Student Progression Portal',
    category: 'Institutional EdTech',
    description: 'A comprehensive cloud campus ERP unifying biometric attendance, automated fee challans via SMS/WhatsApp, and instantaneous student report card generation for 3,200+ students.',
    problem: 'A multi-campus institution spent weeks manually calculating exam report cards, chasing overdue monthly fees, and reconciling paper attendance logs.',
    solution: 'Delivered an integrated cloud campus portal unifying biometric student/staff attendance, automated fee challans with online reconciliation, and instantaneous parent SMS/WhatsApp grade notifications.',
    challengePoints: [
      '3+ weeks of manual faculty overtime required every exam term to generate report cards',
      'Up to 15% unpaid fees due to manual paper challans easily misplaced by students',
      'Zero real-time communication channel between parents and academic administration'
    ],
    architecturePoints: [
      'Automated grading engine computing cumulative GPAs and PDF reports in seconds',
      'Biometric hardware bridge syncing turnstile check-ins to parent WhatsApp/SMS',
      'Dynamic fee voucher generator with unique QR codes and automated bank reconciliation'
    ],
    impactPoints: [
      '3,200+ active students and 180+ faculty members onboarded seamlessly',
      'Term report generation time cut by 92% (from 3 weeks to under 4 hours)',
      'On-time tuition fee collection reached 99.4% through automated notifications'
    ],
    metrics: [
      { label: 'Active Students', value: '3,200+' },
      { label: 'Report Cards Ready', value: '92% faster' },
      { label: 'On-Time Fee Collection', value: '99.4%' }
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio API'],
    featuredImage: 'phss',
    status: 'Production Live',
    liveUrl: 'https://axorks.com',
    year: '2023 - 2024',
    role: 'Lead Full-Stack Engineer',
    deliveryModel: 'Axorks Studio Delivery',
    architectTag: 'Architected by Muhammad Mujahid · Delivered through Axorks Studio'
  }
];

export const AXORKS_DATA = {
  name: 'Axorks',
  tagline: 'High-Impact Digital Engineering & Product Studio',
  url: 'https://axorks.com',
  summary: 'Founded by Muhammad Mujahid, Axorks is an independent digital engineering studio that builds reliable web applications, custom institutional ERPs, and AI search visibility for founders and businesses globally.',
  principles: [
    {
      title: 'Founder-Direct Execution',
      description: 'Zero bureaucracy or telephone games. You work directly with the founder and principal engineer on every milestone.'
    },
    {
      title: 'Production Reliability',
      description: 'Strict typing, robust schema design, automated tests, and fault-tolerant architecture built to run smoothly from day one.'
    },
    {
      title: '100% Code & IP Ownership',
      description: 'You own every repository, migration script, and asset from day one. No vendor lock-in or recurring proprietary license fees.'
    }
  ],
  capabilities: [
    'Custom Business Platforms & ERPs (React, Next.js, Node.js)',
    'High-Performance Cloud Databases (PostgreSQL, Redis)',
    'Search & AI Discovery (SEO, AEO, GEO Optimization)',
    'High-Conversion E-Commerce & Stripe Payments',
    'Interactive 60fps Micro-interactions & Modern UI',
    'Institutional Portals & Biometric Attendance Integrations'
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'axorks-founder',
    role: 'Founder & Principal Systems Architect',
    organization: 'Axorks Studio',
    period: '2023 - Present',
    location: 'Karachi & Global Remote',
    summary: 'Directing technical vision, client architecture, and hands-on software development across enterprise and modern web systems.',
    highlights: [
      'Delivered flagship systems across Healthcare, Agriculture, Luxury Commerce, and EdTech.',
      'Achieved zero critical regressions across client deployments with strict automated tests and typed safety.',
      'Collaborated directly with venture-backed founders and institutional leadership.'
    ],
    skills: ['System Architecture', 'React / Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI Systems']
  },
  {
    id: 'lead-dev',
    role: 'Senior Full-Stack Engineer',
    organization: 'Enterprise Solutions & Client Ventures',
    period: '2021 - 2023',
    location: 'Remote',
    summary: 'Spearheaded full-lifecycle web engineering, API design, database modeling, and frontend performance tuning for international clients.',
    highlights: [
      'Refactored legacy software into modular decoupled micro-frontends and high-speed API layers.',
      'Optimized Lighthouse metrics from 45 to 95+ across client web properties.',
      'Mentored engineers and standardized strict Git review workflows.'
    ],
    skills: ['TypeScript', 'React', 'REST & GraphQL', 'State Machines', 'Database Tuning']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Muhammad is an exceptional engineering talent. He took our AgroTrace specifications and transformed them into a reliable, fault-tolerant platform ahead of schedule.',
    clientName: 'Tariq H.',
    clientRole: 'Director of Operations',
    company: 'AgroTrace Network',
    verifiedMetric: 'Verified Production Client'
  },
  {
    id: 't2',
    quote: 'The craftsmanship on FUME Fragrances felt like an authentic digital flagship store on Madison Avenue. Sales conversion doubled within the first three weeks of launch.',
    clientName: 'Elena Rostova',
    clientRole: 'Brand Principal',
    company: 'FUME Haute Parfumerie',
    verifiedMetric: '+42% Sales Conversion'
  },
  {
    id: 't3',
    quote: 'MediVerse required rigorous data security and zero downtime for doctors and clinic staff. Muhammad delivered clinical precision with unmatched aesthetic polish.',
    clientName: 'Dr. K. Malik',
    clientRole: 'Chief Medical Officer',
    company: 'MediVerse Health Systems',
    verifiedMetric: '100% Security SLA'
  }
];
