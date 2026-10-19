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
