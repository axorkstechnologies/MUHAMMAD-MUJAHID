import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/portfolioData.ts';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
  </svg>
);

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in PKT (UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-white/[0.06] bg-[#040407] backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-display font-black text-sm text-white">
                M
              </div>
              <span className="font-display font-bold text-base text-white">
                Muhammad Mujahid
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-light">
              Principal Systems Architect & Founder of Axorks Studio. Three focused layers: Custom Web Platforms & Business Systems, Intelligent Visibility (SEO/AEO/GEO), and Turnkey Enterprise Systems (ERPs & Healthcare).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Karachi, PK (UTC+5): {currentTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/axorks" className="hover:text-white transition-colors">
                  Axorks Studio
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Brief
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Verified Executive Channels
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 transition-colors font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn: {CONTACT_INFO.linkedin}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Axorks Studio: axorks.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Muhammad Mujahid • Axorks Studio. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
