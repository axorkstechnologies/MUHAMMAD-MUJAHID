import React from 'react';
import { motion } from 'motion/react';

export const HudCorners: React.FC<{ color?: string; size?: number; className?: string }> = ({
  color = 'rgba(56, 189, 248, 0.4)',
  size = 10,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top Left */}
      <span
        className="absolute top-0 left-0 border-t border-l"
        style={{ borderColor: color, width: size, height: size }}
      />
      {/* Top Right */}
      <span
        className="absolute top-0 right-0 border-t border-r"
        style={{ borderColor: color, width: size, height: size }}
      />
      {/* Bottom Left */}
      <span
        className="absolute bottom-0 left-0 border-b border-l"
        style={{ borderColor: color, width: size, height: size }}
      />
      {/* Bottom Right */}
      <span
        className="absolute bottom-0 right-0 border-b border-r"
        style={{ borderColor: color, width: size, height: size }}
      />
    </div>
  );
};

export const HudOscilloscope: React.FC<{ bars?: number; className?: string }> = ({
  bars = 5,
  className = ''
}) => {
  return (
    <div className={`flex items-end gap-0.5 h-3.5 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            height: ['30%', '95%', '45%', '100%', '20%']
          }}
          transition={{
            duration: 1.2 + i * 0.15,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse'
          }}
          className="w-0.5 bg-cyan-400 rounded-full"
        />
      ))}
    </div>
  );
};

export const ScanlineOverlay: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-transparent pointer-events-none"
      />
    </div>
  );
};

export const TechCrosshair: React.FC<{ label?: string; className?: string }> = ({
  label,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 tracking-wider uppercase select-none ${className}`}>
      <span className="text-cyan-400 font-light">+</span>
      {label && <span>{label}</span>}
      <span className="text-cyan-400 font-light">+</span>
    </div>
  );
};

export const TelemetryBadge: React.FC<{
  code: string;
  label: string;
  status?: string;
  statusColor?: string;
  className?: string;
}> = ({
  code,
  label,
  status = 'ONLINE',
  statusColor = 'bg-emerald-400',
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 backdrop-blur-md font-mono text-[11px] shadow-sm select-none ${className}`}>
      <span className="text-cyan-400 font-semibold">{code}</span>
      <span className="text-zinc-500">//</span>
      <span className="text-zinc-300 uppercase tracking-wider">{label}</span>
      {status && (
        <span className="inline-flex items-center gap-1 pl-1 border-l border-white/10 text-[9px] text-zinc-400">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
          <span>{status}</span>
        </span>
      )}
    </div>
  );
};

export const HairlineRuler: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-between text-[9px] font-mono text-zinc-600 select-none py-1 border-y border-white/[0.04] ${className}`}>
      <span>00.00</span>
      <span className="text-zinc-700">|</span>
      <span>25.00</span>
      <span className="text-zinc-700">|</span>
      <span className="text-cyan-500/60 font-semibold">50.00 // SYS.MID</span>
      <span className="text-zinc-700">|</span>
      <span>75.00</span>
      <span className="text-zinc-700">|</span>
      <span>100.00</span>
    </div>
  );
};

