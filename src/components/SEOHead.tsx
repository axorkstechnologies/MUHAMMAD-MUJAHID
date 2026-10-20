import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
}

const ROUTE_SEO: Record<string, RouteSEO> = {
  '/': {
    title: 'Muhammad Mujahid | Principal Software Architect & Founder of Axorks',
    description: 'Portfolio of Muhammad Mujahid, Founder of Axorks. Building custom business platforms (LMS from $8k, Banking from $12k), AI & search visibility (SEO, AEO, GEO from $250–$950/mo), and high-performance web applications — with direct founder delivery.',
    canonical: 'https://axorks.com/'
  },
  '/about': {
    title: 'About Muhammad Mujahid | Founder & Principal Architect at Axorks',
    description: 'Learn about Muhammad Mujahid, Founder of Axorks Studio and Principal Software Architect. Engineering philosophy, delivery principles, and over 40,000 active end-users served across education, healthcare, and agriculture.',
    canonical: 'https://axorks.com/about'
  },
  '/projects': {
    title: 'Production Systems & Case Studies | Muhammad Mujahid',
    description: 'Explore production systems built by Muhammad Mujahid: AgroTrace (AI agriculture platform), MediVerse (healthcare EHR), FUME Fragrances (luxury e-commerce), and PHSS (school campus ERP). Real results, live in production.',
    canonical: 'https://axorks.com/projects'
  },
  '/services': {
    title: 'Services & Pricing: Custom LMS, Banking & AI Visibility (SEO/AEO/GEO) | Axorks',
    description: 'Transparent executive pricing: Custom LMS for universities from $8,000, Banking Systems from $12,000, SEO ($250/mo), AEO ($450/mo), GEO ($550/mo), Full Visibility Package ($950/mo), and Custom Web Apps from $3,500.',
    canonical: 'https://axorks.com/services'
  },
  '/experience': {
    title: 'Engineering Leadership & Career Track Record | Muhammad Mujahid',
    description: 'Career timeline, technical milestones, client track record, and core competencies of Muhammad Mujahid, Founder & Principal Software Architect at Axorks Studio.',
    canonical: 'https://axorks.com/experience'
  },
  '/axorks': {
    title: 'Axorks Studio | High-Impact Digital Engineering & Product Studio',
    description: 'Axorks is an elite software engineering boutique founded by Muhammad Mujahid. Direct founder access, rapid weekly deployment cycles, and mission-critical cloud platform delivery.',
    canonical: 'https://axorks.com/axorks'
  },
  '/contact': {
    title: 'Contact Muhammad Mujahid | Direct Executive Dialogue & Project Brief',
    description: 'Initiate direct technical dialogue with Muhammad Mujahid. Direct WhatsApp channel, response under 2 hours, 100% IP ownership, and project proposal request.',
    canonical: 'https://axorks.com/contact'
  }
};

export const SEOHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname] || ROUTE_SEO['/'];

    // Update document title
    document.title = seo.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonical);

    // Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    // Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seo.canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', seo.canonical);
      document.head.appendChild(canonicalLink);
    }
  }, [pathname]);

  return null;
};
