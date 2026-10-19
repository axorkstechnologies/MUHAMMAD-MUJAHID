import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default 0.25)
  radius?: number; // Activation distance
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  className = '',
  strength = 0.28,
  radius = 120
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < radius) {
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 180, mass: 0.15 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
