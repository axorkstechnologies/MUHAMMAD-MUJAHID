import React, { useRef, useState, useCallback } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
  showChromaticEdge?: boolean;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.15)',
  maxTilt = 7,
  scale = 1.015,
  onClick,
  showChromaticEdge = true
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [edgeStyle, setEdgeStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Calculate light reflection angle for chromatic dispersion
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)'
    });

    // Dual-layer specular glare
    setGlareStyle({
      opacity: 0.8,
      background: `radial-gradient(circle 240px at ${x}px ${y}px, ${glowColor}, transparent 70%), radial-gradient(circle 80px at ${x}px ${y}px, rgba(255, 255, 255, 0.18), transparent 80%)`,
      transition: 'opacity 0.2s ease-out'
    });

    if (showChromaticEdge) {
      setEdgeStyle({
        opacity: 0.7,
        background: `conic-gradient(from ${angle}deg at 50% 50%, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.2), rgba(16, 185, 129, 0.25), rgba(56, 189, 248, 0.25))`,
        transition: 'opacity 0.3s ease-out'
      });
    }
  }, [maxTilt, scale, glowColor, showChromaticEdge]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    });
    setEdgeStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out'
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ ...style, touchAction: 'pan-y' }}
      className={`relative will-change-transform transform-gpu ${className}`}
    >
      {/* 2026 Chromatic Dispersion Edge Sheen */}
      {showChromaticEdge && (
        <div
          className="absolute -inset-[1px] rounded-[inherit] pointer-events-none z-0 overflow-hidden blur-[1px] transition-opacity duration-300"
          style={edgeStyle}
        />
      )}

      {/* Dual Specular Glare & Refraction Layer */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 overflow-hidden mix-blend-screen"
        style={glareStyle}
      />

      <div className="relative z-10 w-full h-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
};
