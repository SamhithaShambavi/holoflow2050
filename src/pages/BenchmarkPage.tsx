import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { NeonButton } from '@/components/ui/NeonButton';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { TrendingUp, TrendingDown, Target, BarChart3 } from 'lucide-react';
import { BenchmarkData } from '@/types';
import { scenarios } from '@/data/scenarios';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface BenchmarkPageProps {
  onNext: (data: BenchmarkData) => void;
  currentScenarioIndex: number;
}

export function BenchmarkPage({ onNext, currentScenarioIndex }: BenchmarkPageProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BenchmarkData | null>(null);
  
  // Auto-load current scenario data
  const scenario = scenarios[currentScenarioIndex];
  const [industry, setIndustry] = useState(scenario.benchmark.industry);

  const handleCompare = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Use benchmark data from the current scenario
    const benchmarkResult = scenario.benchmark;
    
    setResult(benchmarkResult);
    setLoading(false);
  };

  const handleNext = () => {
    if (result) {
      onNext(result);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen cyber-grid flex items-center justify-center">
        <GlassPanel className="text-center">
          <LoadingSpinner size="lg" text="Analyzing Industry Benchmarks..." />
          <p className="text-gray-400 mt-2">Comparing with {industry} companies...</p>
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
              Benchmark Analysis
            </h1>
            <p className="text-gray-400">
              Compare your organization with industry peers
            </p>
          </motion.div>

          {!result ? (
            /* Input Form */
            <motion.div variants={slideInVariants}>
              <GlassPanel className="holographic-bg">
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Select Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
                    >
                      <option value="AI SaaS" className="bg-gray-800">AI SaaS</option>
                      <option value="FinTech" className="bg-gray-800">FinTech</option>
                      <option value="E-commerce" className="bg-gray-800">E-commerce</option>
                      <option value="Healthcare Tech" className="bg-gray-800">Healthcare Tech</option>
                      <option value="EdTech" className="bg-gray-800">EdTech</option>
                      <option value="Cybersecurity" className="bg-gray-800">Cybersecurity</option>
                    </select>
                  </div>

                  <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-cyber-blue" />
                      <span className="font-semibold text-white">Team Size: {scenario.teamSize}</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Comparing with similar-sized companies in {industry}
                    </p>
                  </div>

                  <NeonButton
                    onClick={handleCompare}
                    className="w-full py-3 text-lg font-semibold"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Compare Benchmark
                  </NeonButton>
                </CardContent>
              </GlassPanel>
            </motion.div>
          ) : (
            /* Results */
            <div className="space-y-8">
              {/* Over-Invested */}
              <motion.div variants={slideInVariants}>
                <GlassPanel>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-400" />
                      Over-Invested Areas
                    </h3>
                    <div className="space-y-3">
                      {result.overInvested.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full" />
                          <span className="text-gray-300">{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </GlassPanel>
              </motion.div>

              {/* Under-Invested */}
              <motion.div variants={slideInVariants}>
                <GlassPanel>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingDown className="w-5 h-5 text-cyber-teal" />
                      Under-Invested Areas
                    </h3>
                    <div className="space-y-3">
                      {result.underInvested.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3 p-3 bg-cyber-teal/10 border border-cyber-teal/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-cyber-teal rounded-full" />
                          <span className="text-gray-300">{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </GlassPanel>
              </motion.div>

              {/* Suggestions */}
              <motion.div variants={slideInVariants}>
                <GlassPanel>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyber-blue" />
                      Strategic Suggestions
                    </h3>
                    <div className="space-y-3">
                      {result.suggestions.map((suggestion, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3 p-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-cyber-blue rounded-full" />
                          <span className="text-gray-300">{suggestion}</span>
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
                  Generate Export Summary
                </NeonButton>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}