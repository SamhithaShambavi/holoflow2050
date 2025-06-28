import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NeonButton } from '@/components/ui/NeonButton';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { Building2, Users, Wrench, Globe } from 'lucide-react';
import { WorkflowData } from '@/types';
import { scenarios, getScenarioByIndex } from '@/data/scenarios';
import { slideInVariants, staggerContainer } from '@/lib/framerConfig';

interface WorkflowPageProps {
  onNext: (data: WorkflowData) => void;
  currentScenarioIndex: number;
}

export function WorkflowPage({ onNext, currentScenarioIndex }: WorkflowPageProps) {
  const [loading, setLoading] = useState(false);
  
  // Auto-load current scenario data
  const scenario = getScenarioByIndex(currentScenarioIndex);
  const [formData, setFormData] = useState<WorkflowData>({
    companyWebsite: scenario?.companyWebsite || 'https://novanet.io',
    companyLinkedin: scenario?.companyLinkedin || 'https://www.linkedin.com/company/novanet-ai',
    teamSize: scenario?.teamSize || 120,
    toolsUsed: scenario?.toolsUsed || ['Salesforce', 'HubSpot', 'Slack', 'Asana', 'Notion', 'AWS']
  });

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    onNext(formData);
  };

  const handleToolsChange = (value: string) => {
    const tools = value.split(',').map(tool => tool.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, toolsUsed: tools }));
  };

  if (loading) {
    return (
      <div className="min-h-screen cyber-grid flex items-center justify-center">
        <GlassPanel className="text-center">
          <LoadingSpinner size="lg" />
          <div className="mt-6">
            <TypewriterText 
              text="Generating Workflow Twin..." 
              className="text-xl font-semibold text-cyber-blue"
            />
            <p className="text-gray-400 mt-2">Analyzing organizational structure...</p>
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
              Workflow Configuration
            </h1>
            <p className="text-gray-400">
              Initialize your organizational digital twin
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={slideInVariants}>
            <GlassPanel className="holographic-bg">
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <Globe className="w-4 h-4 text-cyber-blue" />
                      Company Website
                    </label>
                    <Input
                      type="url"
                      value={formData.companyWebsite}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyWebsite: e.target.value }))}
                      className="bg-white/10 border-cyber-blue/30 text-white"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <Building2 className="w-4 h-4 text-cyber-teal" />
                      Company LinkedIn
                    </label>
                    <Input
                      type="url"
                      value={formData.companyLinkedin}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyLinkedin: e.target.value }))}
                      className="bg-white/10 border-cyber-teal/30 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Users className="w-4 h-4 text-cyber-violet" />
                    Team Size
                  </label>
                  <Input
                    type="number"
                    value={formData.teamSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, teamSize: parseInt(e.target.value) }))}
                    className="bg-white/10 border-cyber-violet/30 text-white"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Wrench className="w-4 h-4 text-cyber-pink" />
                    Tools Used (comma-separated)
                  </label>
                  <Input
                    value={formData.toolsUsed.join(', ')}
                    onChange={(e) => handleToolsChange(e.target.value)}
                    className="bg-white/10 border-cyber-pink/30 text-white"
                    placeholder="Salesforce, HubSpot, Slack..."
                  />
                </div>

                <div className="pt-4">
                  <NeonButton
                    onClick={handleGenerate}
                    className="w-full py-3 text-lg font-semibold"
                  >
                    Generate Workflow Twin
                  </NeonButton>
                </div>
              </CardContent>
            </GlassPanel>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}