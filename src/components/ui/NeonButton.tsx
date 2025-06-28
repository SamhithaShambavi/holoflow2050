import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

interface NeonButtonProps extends ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  glow?: boolean;
}

export function NeonButton({ 
  children, 
  className, 
  variant = 'primary', 
  glow = true,
  ...props 
}: NeonButtonProps) {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyber-blue to-cyber-violet hover:from-cyber-violet hover:to-cyber-blue',
    secondary: 'bg-gradient-to-r from-cyber-teal to-cyber-blue hover:from-cyber-blue hover:to-cyber-teal',
    danger: 'bg-gradient-to-r from-red-500 to-cyber-pink hover:from-cyber-pink hover:to-red-500'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={glow ? 'neon-glow rounded-lg' : ''}
    >
      <Button
        className={cn(
          variantStyles[variant],
          'text-white font-semibold border-0 shadow-lg transition-all duration-300',
          'hover:shadow-2xl hover:shadow-cyber-blue/25',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}