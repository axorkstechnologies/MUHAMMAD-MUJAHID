import { Project, ExperienceItem, Testimonial, MetricHighlight } from '../types.ts';

export const CONTACT_INFO = {
  name: 'Muhammad Mujahid',
  title: 'Founder & Principal Software Architect',
  agency: 'Axorks',
  agencyUrl: 'https://axorks.com',
  whatsapp: '+92 308 2789210',
  whatsappUrl: 'https://wa.me/923082789210',
  linkedin: 'linkedin.com/in/muhammad-mujahid-dev',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-mujahid-dev',
  email: 'mujahidaryan222149@gmail.com',
  location: 'Karachi, Pakistan (Global Remote)',
  timezone: 'PKT (UTC+5)',
  availabilityStatus: 'Available for Q2/Q3 Projects & Retainers',
  bio: 'Executive Full-Stack AI Engineer and Founder of Axorks. I design and build mission-critical digital systems, scalable cloud platforms, and cinematic WebGL interfaces for international ventures and institutions.'
};

export const EXECUTIVE_METRICS: MetricHighlight[] = [
  {
    value: '4+',
    label: 'Flagship Systems',
    caption: 'Production-grade enterprise architectures'
  },
  {
    value: '99.9%',
    label: 'Uptime Reliability',
    caption: 'Fault-tolerant cloud engineering'
  },
  {
    value: '40K+',
    label: 'End Users Served',
    caption: 'Across AgroTrace, PHSS & MediVerse'
  },
  {
    value: '< 0.4s',
    label: 'Avg Response Time',
    caption: 'Zero-slop latency-critical delivery'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'agrotrace',
    title: 'AgroTrace',
    subtitle: 'AI-Powered Agricultural Provenance & Real-Time Telemetry',
    category: 'AI Systems',
    description: 'An intelligent agricultural provenance platform connecting distributed farm clusters, soil sensor arrays, and supply chain cold-storage with AI predictive harvest modeling.',
    problem: 'Agricultural supply chains suffer from 28% post-harvest spoilage and untraceable origin claims due to disconnected fragmented paper logging.',
    solution: 'Engineered a real-time IoT telemetry ingestion pipeline with edge AI anomaly detection, automated micro-climate hazard alerts, and verifiable blockchain-backed provenance ledgers.',
    metrics: [
      { label: 'Telemetry Events/sec', value: '12,500+' },
      { label: 'Spoilage Reduction', value: '34%' },
      { label: 'Farm Clusters', value: '140+' }
    ],
    tags: ['Next.js', 'TypeScript', 'Edge AI', 'IoT Telemetry', 'PostgreSQL', 'Tailwind CSS'],
    featuredImage: 'agrotrace',
    status: 'Production Live',
    liveUrl: 'https://axorks.com',
    year: '2025',
    role: 'Principal System Architect & Full-Stack Lead'
  },
  {
    id: 'mediverse',
    title: 'MediVerse',
    subtitle: 'Next-Gen Clinical Healthcare Management & FHIR Orchestration',
    category: 'Enterprise Platform',
    description: 'An enterprise healthcare operating system providing electronic health record (EHR) consolidation, secure provider-patient telemetry, and clinical decision support.',
    problem: 'Legacy hospital systems operate in data silos, resulting in diagnostic delays, medication collision risks, and extreme administrative burnout.',
    solution: 'Architected an HL7/FHIR compliant clinical workflow engine with role-based access control, encrypted patient records, instant triage queues, and sub-second lab result dispersal.',
    metrics: [
      { label: 'Clinical Encounters', value: '180,000+' },
      { label: 'Time Saved / Shift', value: '1.8 hrs' },
      { label: 'HIPAA/Security Audit', value: '100% Pass' }
    ],
    tags: ['React', 'Node.js / Express', 'FHIR Protocol', 'PostgreSQL', 'Redis Cache', 'Docker'],
    featuredImage: 'mediverse',
    status: 'Enterprise Active',
    liveUrl: 'https://axorks.com',
    year: '2024 - 2025',
    role: 'Lead Architect'
  },
  {
    id: 'fume',
    title: 'FUME Fragrances',
    subtitle: 'Ultra-Luxury Olfactory Experience & Cinematic E-Commerce',
    category: 'Luxury E-Commerce',
    description: 'A bespoke high-fashion digital flagship for artisanal luxury perfumes featuring dynamic notes blending visualization, sensory storytelling, and ultra-fluid checkout.',
    problem: 'Traditional luxury perfume e-commerce feels flat and transactional, failing to convey the emotional, olfactory depth and tactile prestige of high-end scents.',
    solution: 'Designed and deployed an immersive liquid glass interface with multi-layered olfactory pyramid exploration (Top, Heart, Base notes), interactive custom discovery quiz, and frictionless checkout.',
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
    role: 'Creative Director & Lead Developer'
  },
  {
    id: 'phss',
    title: 'PHSS School',
    subtitle: 'Scalable Academic ERP & Student Progression Portal',
    category: 'Institutional EdTech',
    description: 'A comprehensive institutional management ecosystem unifying academic grading, attendance biometric logs, fee reconciliation, and guardian communications.',
    problem: 'Educational institutions face heavy administrative friction with manual attendance reconciliations, late fee collections, and delayed exam report card generation.',
    solution: 'Delivered an integrated cloud campus suite handling thousands of simultaneous concurrent student/teacher interactions, automated fee challan generation, and SMS/WhatsApp notifications.',
    metrics: [
      { label: 'Active Students', value: '3,200+' },
      { label: 'Grading Automation', value: '92% faster' },
      { label: 'Fee Collection Rate', value: '99.4%' }
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio API'],
    featuredImage: 'phss',
    status: 'Production Live',
    liveUrl: 'https://axorks.com',
    year: '2023 - 2024',
    role: 'Lead Full-Stack Engineer'
  }
];

export const AXORKS_DATA = {
  name: 'Axorks',
  tagline: 'High-Impact Digital Engineering & Product Studio',
  url: 'https://axorks.com',
  summary: 'Founded by Muhammad Mujahid, Axorks is an elite digital engineering boutique delivering zero-slop web applications, resilient backend architectures, and AI integrations for founders and institutions globally.',
  principles: [
    {
      title: 'Cinematic Precision',
      description: 'Interfaces that command respect. We reject generic boilerplate in favor of bespoke glass physics, deliberate typography, and high-framerate motion.'
    },
    {
      title: 'Architectural Rigor',
      description: 'Strict typing, robust schema design, high-concurrency optimization, and clean separation of concerns built to scale from day one.'
    },
    {
      title: 'Founder Velocity',
      description: 'Zero bureaucracy. Direct access to principal leadership with rapid weekly deployment cycles and transparent milestone deliverables.'
    }
  ],
  capabilities: [
    'Full-Stack Web Architectures (React, Next.js, Node.js)',
    'Enterprise Cloud Systems & Relational Databases',
    'Custom AI Workflows & LLM Agent Integration',
    'High-Performance E-Commerce & Payment Gateways',
    'Interactive Liquid Glass & 60fps Micro-interactions',
    'Institutional ERP & Mission-Critical Portals'
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'axorks-founder',
    role: 'Founder & Principal Engineer',
    organization: 'Axorks Studio',
    period: '2023 - Present',
    location: 'Karachi & Global Remote',
    summary: 'Directing technical vision, client architecture, and hands-on software development across enterprise and luxury web systems.',
    highlights: [
      'Delivered flagship systems across Healthcare, Agriculture, Luxury Commerce, and EdTech.',
      'Achieved zero critical regressions across all client deployments with strict CI/CD and typed safety.',
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
      'Refactored legacy monoliths into modular decoupled micro-frontends and high-speed API layers.',
      'Optimized Lighthouse metrics from 45 to 95+ across client web properties.',
      'Mentored junior engineers and standardized strict Git review workflows.'
    ],
    skills: ['TypeScript', 'React', 'REST & GraphQL', 'State Machines', 'Database Tuning']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Muhammad is an exceptional engineering talent. He took our AgroTrace specifications and transformed them into a breathtaking, fault-tolerant telemetry platform ahead of schedule.',
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
