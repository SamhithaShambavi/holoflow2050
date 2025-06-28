import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginPage } from '@/pages/LoginPage';
import { WorkflowPage } from '@/pages/WorkflowPage';
import { SimulationPage } from '@/pages/SimulationPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { BenchmarkPage } from '@/pages/BenchmarkPage';
import { ExportPage } from '@/pages/ExportPage';
import { UnauthorizedPage } from '@/pages/UnauthorizedPage';
import { BoltBadge } from '@/components/ui/BoltBadge';
import { User, WorkflowData, SimulationResult, BenchmarkData, AppScreen } from '@/types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [user, setUser] = useState<User | null>(null);
  const [workflowData, setWorkflowData] = useState<WorkflowData | null>(null);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [benchmarkData, setBenchmarkData] = useState<BenchmarkData | null>(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const handleLogin = (userData: User) => {
    setUser(userData);
    if (userData.role === 'unauthorized') {
      setCurrentScreen('unauthorized');
    } else if (userData.role === 'admin') {
      setCurrentScreen('workflow');
    } else {
      // Members skip workflow input and go straight to simulation
      setCurrentScreen('simulation');
    }
  };

  const handleWorkflowNext = (data: WorkflowData) => {
    setWorkflowData(data);
    setCurrentScreen('simulation');
  };

  const handleSimulationNext = (result: SimulationResult) => {
    setSimulationResult(result);
    setCurrentScreen('insights');
  };

  const handleInsightsNext = () => {
    setCurrentScreen('benchmark');
  };

  const handleBenchmarkNext = (data: BenchmarkData) => {
    setBenchmarkData(data);
    setCurrentScreen('export');
  };

  const handleRestart = () => {
    // Cycle to next scenario automatically
    setCurrentScenarioIndex((prev) => (prev + 1) % 3);
    setCurrentScreen('login');
    setUser(null);
    setWorkflowData(null);
    setSimulationResult(null);
    setBenchmarkData(null);
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
    setUser(null);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'workflow':
        return <WorkflowPage onNext={handleWorkflowNext} currentScenarioIndex={currentScenarioIndex} />;
      case 'simulation':
        return <SimulationPage onNext={handleSimulationNext} currentScenarioIndex={currentScenarioIndex} />;
      case 'insights':
        return <InsightsPage onNext={handleInsightsNext} currentScenarioIndex={currentScenarioIndex} />;
      case 'benchmark':
        return <BenchmarkPage onNext={handleBenchmarkNext} currentScenarioIndex={currentScenarioIndex} />;
      case 'export':
        return <ExportPage onRestart={handleRestart} currentScenarioIndex={currentScenarioIndex} />;
      case 'unauthorized':
        return <UnauthorizedPage onBack={handleBackToLogin} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-violet/5" />
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Built with Bolt.new Badge */}
      <BoltBadge />
    </div>
  );
}