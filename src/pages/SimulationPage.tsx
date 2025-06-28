import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { NeonButton } from '@/components/ui/NeonButton';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { MetricCard } from '@/components/MetricCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Zap, TrendingUp, DollarSign, Shield, Play } from 'lucide-react';
import { SimulationResult } from '@/types';
import { scenarios, getScenarioByIndex } from '@/data/scenarios';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface SimulationPageProps {
  onNext: (result: SimulationResult) => void;
  currentScenarioIndex: number;
}

export function SimulationPage({ onNext, currentScenarioIndex }: SimulationPageProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);
  
  // Auto-load current scenario data
  const scenario = getScenarioByIndex(currentScenarioIndex);
  const [changeDescription, setChangeDescription] = useState(scenario?.changeDescription || '');

  const handleRunSimulation = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const simulationResult = scenario?.simulationResult || scenarios[0].simulationResult;
    
    setResult(simulationResult);
    setLoading(false);
  };

  const handleNext = () => {
    if (result) {
      onNext(result);
    }
  };

  const getMetricColor = (metric: string): 'blue' | 'green' | 'red' | 'purple' => {
    if (metric.includes('Speed') || metric.includes('+')) return 'blue';
    if (metric.includes('Cost') || metric.includes('-')) return 'green';
    if (metric.includes('Risk')) return 'purple';
    return 'blue';
  };

  const getMetricValue = (metricString: string): number => {
    const match = metricString.match(/[+-]?\d+/);
    return match ? Math.abs(parseInt(match[0])) : 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen cyber-grid flex items-center justify-center">
        <GlassPanel className="text-center">
          <LoadingSpinner size="lg" text="Running Quantum Simulation..." />
          <div className="mt-6">
            <p className="text-gray-400">Analyzing workflow impact...</p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyber-blue rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    );
  }

  return (
    <div className="min-h-screen cyber-grid p-4">
      <div className="max-w-4xl mx-auto py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={slideInVariants} className="text-center mb-8">
            <h1 className="font-orbitron text-3xl font-bold text-white mb-2">
              Workflow Simulation
            </h1>
            <p className="text-gray-400">
              Predict the impact of organizational changes
            </p>
          </motion.div>

          {!result ? (
            /* Input Form */
            <motion.div variants={slideInVariants}>
              <GlassPanel className="holographic-bg">
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Describe the Change You Want to Simulate
                    </label>
                    <textarea
                      value={changeDescription}
                      onChange={(e) => setChangeDescription(e.target.value)}
                      rows={4}
                      className="w-full p-4 bg-white/10 border border-cyber-blue/30 rounded-lg text-white placeholder:text-gray-400 resize-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                      placeholder="Describe the workflow change you want to simulate..."
                    />
                  </div>

                  <NeonButton
                    onClick={handleRunSimulation}
                    className="w-full py-3 text-lg font-semibold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Run Simulation
                  </NeonButton>
                </CardContent>
              </GlassPanel>
            </motion.div>
          ) : (
            /* Results */
            <div className="space-y-8">
              {/* Summary */}
              <motion.div variants={slideInVariants}>
                <GlassPanel>
                  <CardContent>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Simulation Results
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {result.changeSummary}
                    </p>
                  </CardContent>
                </GlassPanel>
              </motion.div>

              {/* Metrics */}
              <motion.div variants={slideInVariants}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MetricCard
                    title="Speed Improvement"
                    value="Productivity Boost"
                    change={getMetricValue(result.metrics.speed)}
                    icon={TrendingUp}
                    color={getMetricColor(result.metrics.speed)}
                  />
                  <MetricCard
                    title="Cost Reduction"
                    value="Operational Savings"
                    change={getMetricValue(result.metrics.cost)}
                    icon={DollarSign}
                    color={getMetricColor(result.metrics.cost)}
                  />
                  <MetricCard
                    title="Risk Level"
                    value={`Implementation Risk: ${result.metrics.risk}`}
                    change={result.metrics.risk === 'Low' ? 0 : result.metrics.risk === 'Medium' ? 50 : 100}
                    icon={Shield}
                    color={result.metrics.risk === 'Low' ? 'green' : result.metrics.risk === 'Medium' ? 'blue' : 'red'}
                  />
                </div>
              </motion.div>

              {/* Bottlenecks */}
              <motion.div variants={slideInVariants}>
                <GlassPanel>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyber-blue" />
                      Bottlenecks Resolved
                    </h3>
                    <div className="space-y-3">
                      {result.bottlenecks.map((bottleneck, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-gray-300">{bottleneck}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </GlassPanel>
              </motion.div>

              {/* Next Button */}
              <motion.div variants={slideInVariants} className="text-center">
                <NeonButton
                  onClick={handleNext}
                  className="px-8 py-3 text-lg font-semibold"
                >
                  View Strategic Insights
                </NeonButton>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}