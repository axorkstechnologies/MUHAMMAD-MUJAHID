import React from 'react';
import { motion, Variants } from 'motion/react';

interface KineticTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDuration?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  staggerDuration = 0.045,
  highlightWords = [],
  highlightClassName = 'text-gradient'
}) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay
      }
    }
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: 'blur(8px)',
      rotateX: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 140
      }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block perspective-[1000px] ${className}`}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        );

        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block mr-[0.28em] will-change-transform ${
              isHighlight ? highlightClassName : wordClassName
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
