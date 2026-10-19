import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUpRight, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'axorks', label: 'Axorks Studio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/40 flex items-center justify-center backdrop-blur-xl shadow-lg transition-all duration-300">
            <span className="font-display font-black text-base text-gradient tracking-wider">M</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Muhammad Mujahid
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                Axorks Studio
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Floating Pill */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'bg-zinc-950/80 border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]'
              : 'bg-white/[0.03] border-white/10 backdrop-blur-xl'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono text-zinc-300">Open for Q2 Projects</span>
          </div>

          {/* WhatsApp Direct Action */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-semibold backdrop-blur-md shadow-lg transition-all duration-300 group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp Direct</span>
            <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden p-2.5 rounded-2xl bg-zinc-900/80 border border-white/15 text-zinc-300 hover:text-white backdrop-blur-xl shadow-lg cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-3xl bg-zinc-950/95 border border-white/15 backdrop-blur-3xl shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp ({CONTACT_INFO.whatsapp})</span>
            </a>
            <div className="text-center text-[11px] font-mono text-zinc-500 py-1">
              Muhammad Mujahid • Axorks Studio
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
