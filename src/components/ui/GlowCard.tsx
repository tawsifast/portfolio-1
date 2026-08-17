'use client';

import React, { useCallback, useRef, type ReactNode } from 'react';
import { useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = '' }: GlowCardProps) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.1 });
  const glowBackground = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(142, 213, 255, 0.12), transparent 40%)`;

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  if (reducedMotion) {
    return (
      <div
        className={`relative overflow-hidden rounded-[2rem] border border-[#8ed5ff]/10 bg-[#0f1418]/60 backdrop-blur-xl ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-[2rem] border border-[#8ed5ff]/10 bg-[#0f1418]/60 backdrop-blur-xl ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0"
      />
      {children}
    </div>
  );
};

export default GlowCard;