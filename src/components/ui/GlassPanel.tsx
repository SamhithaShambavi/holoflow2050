import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GlassPanel({ children, className, animate = true }: GlassPanelProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      className={cn(
        "glass-panel rounded-2xl p-6 neon-border",
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
      })}
    >
      {children}
    </Component>
  );
}