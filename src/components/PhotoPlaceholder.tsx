import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface PhotoPlaceholderProps {
  id?: string;
  variant?: 'hero' | 'about' | 'badge';
  className?: string;
  label?: string;
  defaultPhoto?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  variant = 'hero',
  className = '',
  defaultPhoto = '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'
}) => {
  const photoUrl = defaultPhoto;

  if (variant === 'badge') {
    return (
      <div className={`relative group ${className}`}>
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-zinc-900/80 p-0.5 shadow-lg backdrop-blur-md">
          <img 
            src={photoUrl} 
            alt="Muhammad Mujahid" 
            className="w-full h-full object-cover rounded-full" 
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Subtle Liquid Glow Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

      {/* Main Glass Frame Container */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
        <img
          src={photoUrl}
          alt="Muhammad Mujahid - Founder & Principal Architect"
          className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
          loading="eager"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/25 to-transparent opacity-85 pointer-events-none" />

        {/* Top Status Pill */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-emerald-300 font-semibold tracking-wide">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Top Right Verified Pill */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-lg text-[11px] font-mono text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified</span>
          </div>
        </div>

        {/* Bottom Executive Caption Card */}
        <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none">
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/12 backdrop-blur-xl shadow-2xl space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white font-display text-base tracking-tight">
                Muhammad Mujahid
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-medium">
                Founder
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light flex items-center justify-between">
              <span>Principal Architect • Axorks Studio</span>
              <span className="text-[11px] font-mono text-zinc-500">Karachi (UTC+5)</span>
            </p>
          </div>
        </div>

        {/* Ambient Specular Glass Sheen */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/[0.08]" />
      </div>
    </div>
  );
};
