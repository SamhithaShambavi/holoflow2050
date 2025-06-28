import { Variants } from 'framer-motion';

export const slideInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export const glowVariants: Variants = {
  initial: { 
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" 
  },
  hover: { 
    boxShadow: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)",
    transition: { duration: 0.3 }
  }
};

export const floatVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const typewriterVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "steps(40)"
    }
  }
};

export const glitchVariants: Variants = {
  animate: {
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};