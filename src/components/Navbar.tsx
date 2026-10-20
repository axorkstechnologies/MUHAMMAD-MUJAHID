import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../data/portfolioData.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/services', label: 'Services & Pricing' },
    { path: '/projects', label: 'Case Studies' },
    { path: '/axorks', label: 'Axorks Studio' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#040407]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo linking to Home */}
        <Link
          to="/"
          className="flex items-center gap-3 group text-left cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-white/[0.18] flex items-center justify-center backdrop-blur-xl transition-all duration-300">
            <span className="font-display font-black text-base text-white tracking-wider">M</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Muhammad Mujahid
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Systems Architect · Axorks Studio
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Floating Pill with LayoutId Animated Indicator */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0a0b14]/90 border-white/[0.08] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]'
              : 'bg-white/[0.03] border-white/[0.06] backdrop-blur-xl'
          }`}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.14]"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-400">Available for Q2</span>
          </div>

          {/* WhatsApp Direct Action */}
          <motion.a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 hover:border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md transition-all duration-300 group cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-400/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.92 }}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden p-2.5 rounded-2xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white backdrop-blur-xl cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden mt-3 p-4 rounded-3xl bg-[#07070e]/98 border border-white/[0.08] backdrop-blur-3xl shadow-2xl space-y-2 max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
                      isActive
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/[0.06] space-y-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 text-xs font-bold shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp ({CONTACT_INFO.whatsapp})</span>
              </a>
              <div className="text-center text-[11px] font-mono text-zinc-500 py-1">
                Muhammad Mujahid • Systems Architect
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
