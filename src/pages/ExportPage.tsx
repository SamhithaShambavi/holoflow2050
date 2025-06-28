import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { NeonButton } from '@/components/ui/NeonButton';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { FileText, MessageSquare, Download, Share2 } from 'lucide-react';
import { scenarios } from '@/data/scenarios';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface ExportPageProps {
  onRestart: () => void;
  currentScenarioIndex: number;
}

export function ExportPage({ onRestart, currentScenarioIndex }: ExportPageProps) {
  const summary = scenarios[currentScenarioIndex].exportSummary;

  const handleExport = (type: string) => {
    // Simulate export functionality
    console.log(`Exporting to ${type}...`);
    alert(`Export to ${type} initiated! (Demo)`);
  };

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
              Export Summary
            </h1>
            <p className="text-gray-400">
              Share your workflow analysis results
            </p>
          </motion.div>

          {/* Summary */}
          <motion.div variants={slideInVariants} className="mb-8">
            <GlassPanel className="holographic-bg">
              <CardContent>
                <h2 className="text-xl font-semibold text-white mb-4">
                  {summary.headline}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-cyber-blue mb-2">Change Summary</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {summary.changeSummary}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-cyber-teal mb-2">Key Metrics</h3>
                    <div className="bg-cyber-teal/10 border border-cyber-teal/30 rounded-lg p-3">
                      <p className="text-cyber-teal font-medium">{summary.keyMetrics}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-cyber-violet mb-2">Top Insights</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {summary.topInsights}
                    </p>
                  </div>
                </div>
              </CardContent>
            </GlassPanel>
          </motion.div>

          {/* Export Options */}
          <motion.div variants={slideInVariants} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-panel neon-border hover:neon-glow transition-all duration-300 cursor-pointer"
                      onClick={() => handleExport('Slack')}>
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Share to Slack</h3>
                    <p className="text-gray-400 text-sm">
                      Send formatted summary to your team channel
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-panel neon-border hover:neon-glow transition-all duration-300 cursor-pointer"
                      onClick={() => handleExport('Notion')}>
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-cyber-teal mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Send to Notion</h3>
                    <p className="text-gray-400 text-sm">
                      Create a detailed page in your workspace
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-panel neon-border hover:neon-glow transition-all duration-300 cursor-pointer"
                      onClick={() => handleExport('PDF')}>
                  <CardContent className="p-6 text-center">
                    <Download className="w-12 h-12 text-cyber-violet mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Export PDF</h3>
                    <p className="text-gray-400 text-sm">
                      Download comprehensive report
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div variants={slideInVariants} className="text-center space-y-4">
            <NeonButton
              onClick={onRestart}
              variant="secondary"
              className="px-8 py-3 text-lg font-semibold"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Run New Simulation
            </NeonButton>
            
            <p className="text-gray-400 text-sm">
              Thank you for using HoloFlow 2050 - The future of workflow optimization
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}