export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI Systems' | 'Enterprise Platform' | 'Luxury E-Commerce' | 'Institutional EdTech';
  description: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featuredImage: string;
  status: 'Production Live' | 'Enterprise Active' | 'Client Deployed';
  liveUrl?: string;
  year: string;
  role: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  verifiedMetric: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  caption: string;
}
