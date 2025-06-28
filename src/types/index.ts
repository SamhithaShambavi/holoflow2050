export interface User {
  email: string;
  linkedinProfile: string;
  role: 'admin' | 'member' | 'unauthorized';
  name?: string;
}

export interface WorkflowData {
  companyWebsite: string;
  companyLinkedin: string;
  teamSize: number;
  toolsUsed: string[];
}

export interface SimulationResult {
  changeSummary: string;
  bottlenecks: string[];
  metrics: {
    speed: string;
    cost: string;
    risk: string;
  };
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: string;
}

export interface BenchmarkData {
  industry: string;
  overInvested: string[];
  underInvested: string[];
  suggestions: string[];
}

export type AppScreen = 
  | 'login' 
  | 'workflow' 
  | 'simulation' 
  | 'insights' 
  | 'benchmark' 
  | 'export' 
  | 'unauthorized';