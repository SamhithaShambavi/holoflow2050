import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NeonButton } from '@/components/ui/NeonButton';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { Sparkles, User, Shield, Lock } from 'lucide-react';
import { User as UserType } from '@/types';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface LoginPageProps {
  onLogin: (user: UserType) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('samantha@novanet.io');
  const [linkedinProfile, setLinkedinProfile] = useState('https://www.linkedin.com/in/samantha-aiops');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'member' | null>(null);

  const handleLogin = () => {
    if (!selectedRole) return;
    
    const user: UserType = {
      email,
      linkedinProfile,
      role: selectedRole,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
    };
    
    onLogin(user);
  };

  return (
    <div className="min-h-screen cyber-grid flex items-center justify-center p-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.div variants={slideInVariants} className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-16 h-16 text-cyber-blue mx-auto" />
          </motion.div>
          <h1 className="font-orbitron text-4xl font-bold text-white mb-2 text-glow">
            HoloFlow 2050
          </h1>
          <p className="text-cyber-teal text-lg font-space">
            Simulate. Improve. Dominate.
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div variants={slideInVariants}>
          <GlassPanel className="holographic-bg">
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-cyber-blue/30 text-white placeholder:text-gray-400"
                    placeholder="your@company.ai"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <Input
                    type="url"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                    className="bg-white/10 border-cyber-blue/30 text-white placeholder:text-gray-400"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Access Level
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRole('admin')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedRole === 'admin'
                          ? 'border-cyber-blue bg-cyber-blue/20 text-white'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-cyber-blue/50'
                      }`}
                    >
                      <Shield className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Admin</div>
                      <div className="text-xs opacity-75">Full Access</div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRole('member')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedRole === 'member'
                          ? 'border-cyber-teal bg-cyber-teal/20 text-white'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-cyber-teal/50'
                      }`}
                    >
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Member</div>
                      <div className="text-xs opacity-75">View Only</div>
                    </motion.button>
                  </div>
                </div>
              </div>

              <NeonButton
                onClick={handleLogin}
                disabled={!selectedRole}
                className="w-full py-3 text-lg font-semibold"
              >
                <Lock className="w-5 h-5 mr-2" />
                Initialize HoloFlow
              </NeonButton>
            </CardContent>
          </GlassPanel>
        </motion.div>

        {/* Demo Access */}
        <motion.div variants={slideInVariants} className="mt-6 text-center">
          <button
            onClick={() => onLogin({ 
              email: 'demo@unauthorized.com', 
              linkedinProfile: '', 
              role: 'unauthorized' 
            })}
            className="text-gray-400 hover:text-red-400 transition-colors text-sm"
          >
            Try Unauthorized Access (Demo)
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}