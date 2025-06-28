import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CounterAnimation } from '@/components/ui/CounterAnimation';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'red' | 'purple';
}

export function MetricCard({ title, value, change, icon: Icon, color }: MetricCardProps) {
  const colorClasses = {
    blue: 'from-cyber-blue/20 to-cyber-blue/5 text-cyber-blue',
    green: 'from-emerald-500/20 to-emerald-500/5 text-emerald-400',
    red: 'from-red-500/20 to-red-500/5 text-red-400',
    purple: 'from-cyber-violet/20 to-cyber-violet/5 text-cyber-violet'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="glass-panel neon-border hover:neon-glow transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color].split(' ').slice(0, 2).join(' ')}`}>
              <Icon className={`w-6 h-6 ${colorClasses[color].split(' ')[2]}`} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                <CounterAnimation from={0} to={change} suffix="%" />
              </div>
              <div className="text-sm text-gray-400">{title}</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-300">{value}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}