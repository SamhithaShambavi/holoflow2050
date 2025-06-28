import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { NeonButton } from '@/components/ui/NeonButton';
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import { glitchVariants } from '@/lib/framerConfig';

interface UnauthorizedPageProps {
  onBack: () => void;
}

export function UnauthorizedPage({ onBack }: UnauthorizedPageProps) {
  return (
    <div className="min-h-screen cyber-grid flex items-center justify-center p-4 access-denied">
      <motion.div
        variants={glitchVariants}
        animate="animate"
        className="w-full max-w-md"
      >
        <GlassPanel className="text-center border-red-500/50">
          <div className="space-y-6">
            {/* Glitch Effect Header */}
            <motion.div
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="font-orbitron text-3xl font-bold text-red-400 mb-2">
                ACCESS DENIED
              </h1>
            </motion.div>

            {/* Static Overlay Effect */}
            <motion.div
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.1, repeat: Infinity }}
              className="absolute inset-0 bg-red-500/10 pointer-events-none"
            />

            {/* Error Message */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-red-300">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">SECURITY BREACH DETECTED</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Unauthorized access attempt logged. Your credentials do not match 
                our quantum security protocols.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Error Code: HF2050-UNAUTH-001</span>
                </div>
              </div>
            </div>

            {/* Flickering Text */}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              className="text-red-400 font-mono text-sm"
            >
              SYSTEM_LOCKDOWN_INITIATED...
            </motion.div>

            {/* Back Button */}
            <NeonButton
              onClick={onBack}
              variant="danger"
              className="w-full"
            >
              Return to Login
            </NeonButton>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
}