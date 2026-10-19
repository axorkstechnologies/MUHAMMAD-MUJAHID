import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface RollingCounterProps {
  value: string; // e.g. "4+", "99.9%", "40K+", "< 0.4s", "$8,000", "$950"
  className?: string;
  duration?: number;
}

export const RollingCounter: React.FC<RollingCounterProps> = ({
  value,
  className = '',
  duration = 1.6
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract prefix, numeric portion, and suffix
    // Matches e.g. "< ", "0.4", "s" or "", "99.9", "%" or "", "40", "K+" or "$", "8000", ""
    const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const rawNumberStr = match[2];
    const suffix = match[3];
    const targetNumber = parseFloat(rawNumberStr);
    const hasDecimals = rawNumberStr.includes('.');
    const decimalPlaces = hasDecimals ? rawNumberStr.split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Smooth exponential out easing
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = easeProgress * targetNumber;

      const formattedNumber = hasDecimals
        ? currentNumber.toFixed(decimalPlaces)
        : Math.round(currentNumber).toString();

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(4px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`inline-block font-mono tracking-tight ${className}`}
    >
      {displayValue}
    </motion.span>
  );
};
