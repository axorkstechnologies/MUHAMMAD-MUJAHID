import React, { useRef, useState, useCallback } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.15)',
  maxTilt = 7,
  scale = 1.015,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

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

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 0.1s ease-out'
    });

    setGlareStyle({
      opacity: 0.65,
      background: `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 65%)`,
      transition: 'opacity 0.2s ease-out'
    });
  }, [maxTilt, scale, glowColor]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease-out'
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      {/* Dynamic Specular Glare & Refraction Layer */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 overflow-hidden mix-blend-screen"
        style={glareStyle}
      />
      {children}
    </div>
  );
};
