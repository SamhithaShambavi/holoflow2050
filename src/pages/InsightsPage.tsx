import { useState } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from '@/components/ui/NeonButton';
import { InsightCard } from '@/components/InsightCard';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Workflow, Users, X, Package, Truck, TrendingUp, Shield, AlertTriangle, FileText } from 'lucide-react';
import { scenarios } from '@/data/scenarios';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface InsightsPageProps {
  onNext: () => void;
  currentScenarioIndex: number;
}

export function InsightsPage({ onNext, currentScenarioIndex }: InsightsPageProps) {
  const [selectedInsight, setSelectedInsight] = useState<any>(null);

  // Get insights from the current scenario
  const insights = scenarios[currentScenarioIndex].insights;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return Bot;
      case 'Workflow': return Workflow;
      case 'Users': return Users;
      case 'Package': return Package;
      case 'Truck': return Truck;
      case 'TrendingUp': return TrendingUp;
      case 'Shield': return Shield;
      case 'AlertTriangle': return AlertTriangle;
      case 'FileText': return FileText;
      default: return Bot;
    }
  };

  const handleExplain = (insight: any) => {
    setSelectedInsight(insight);
  };

  return (
    <div className="min-h-screen cyber-grid p-4">
      <div className="max-w-6xl mx-auto py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={slideInVariants} className="text-center mb-8">
            <h1 className="font-orbitron text-3xl font-bold text-white mb-2">
              Strategic Insights
            </h1>
            <p className="text-gray-400">
              AI-powered recommendations for your organization
            </p>
          </motion.div>

          {/* Insights Grid */}
          <motion.div variants={slideInVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <InsightCard
                    title={insight.title}
                    description={insight.description}
                    impact={insight.impact}
                    icon={getIcon(insight.icon)}
                    onExplain={() => handleExplain(insight)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next Button */}
          <motion.div variants={slideInVariants} className="text-center">
            <NeonButton
              onClick={onNext}
              className="px-8 py-3 text-lg font-semibold"
            >
              Compare with Benchmarks
            </NeonButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Explanation Modal */}
      {selectedInsight && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedInsight(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl"
          >
            <GlassPanel className="holographic-bg">
              <CardContent>
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Insight Explanation
                  </h2>
                  <button
                    onClick={() => setSelectedInsight(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-cyber-blue mb-2">
                      {selectedInsight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedInsight.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Why This Matters</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedInsight.explanation.why}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Expected Impact</h4>
                    <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4">
                      <p className="text-cyber-blue font-medium">{selectedInsight.explanation.expectedImpact}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Implementation Steps</h4>
                    <ul className="space-y-2 text-gray-300">
                      {selectedInsight.explanation.implementationSteps.map((step: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyber-teal rounded-full" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </GlassPanel>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}