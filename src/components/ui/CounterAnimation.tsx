import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CounterAnimation({ 
  from, 
  to, 
  duration = 2, 
  suffix = '', 
  className 
}: CounterAnimationProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}