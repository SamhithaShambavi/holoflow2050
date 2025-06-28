import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { NeonButton } from '@/components/ui/NeonButton';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsightCardProps {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  onExplain?: () => void;
  className?: string;
}

export function InsightCard({ 
  title, 
  description, 
  impact, 
  icon: Icon, 
  onExplain,
  className 
}: InsightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("group", className)}
    >
      <Card className="glass-panel neon-border h-full hover:neon-glow transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-violet/20">
              <Icon className="w-6 h-6 text-cyber-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
              <p className="text-gray-300 mb-3 leading-relaxed">{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyber-teal font-medium">{impact}</span>
                {onExplain && (
                  <NeonButton 
                    size="sm" 
                    variant="secondary"
                    onClick={onExplain}
                  >
                    Explain
                  </NeonButton>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}