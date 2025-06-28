export interface ScenarioData {
  id: string;
  name: string;
  companyWebsite: string;
  companyLinkedin: string;
  teamSize: number;
  toolsUsed: string[];
  changeDescription: string;
  simulationResult: {
    changeSummary: string;
    bottlenecks: string[];
    metrics: {
      speed: string;
      cost: string;
      risk: string;
    };
  };
  insights: Array<{
    id: string;
    title: string;
    description: string;
    impact: string;
    icon: string;
    explanation: {
      why: string;
      expectedImpact: string;
      implementationSteps: string[];
    };
  }>;
  benchmark: {
    industry: string;
    overInvested: string[];
    underInvested: string[];
    suggestions: string[];
  };
  exportSummary: {
    headline: string;
    changeSummary: string;
    keyMetrics: string;
    topInsights: string;
  };
}

export const scenarios: ScenarioData[] = [
  {
    id: 'crm-automation',
    name: 'CRM Automation & Marketing Consolidation',
    companyWebsite: 'https://novanet.io',
    companyLinkedin: 'https://www.linkedin.com/company/novanet-ai',
    teamSize: 120,
    toolsUsed: ['Salesforce', 'HubSpot', 'Slack', 'Asana', 'Notion', 'AWS'],
    changeDescription: 'We want to automate CRM data entry and consolidate marketing tools into one unified dashboard.',
    simulationResult: {
      changeSummary: 'Automation boosts productivity in Sales and reduces duplicated work in Marketing. Sales and Marketing processes streamlined significantly, reducing delays in CRM handoffs and eliminating manual data entry bottlenecks.',
      bottlenecks: ['Removed manual CRM entry', 'Reduced data handoff delays', 'Eliminated duplicate lead tracking'],
      metrics: {
        speed: '+12%',
        cost: '-8%',
        risk: 'Low'
      }
    },
    insights: [
      {
        id: '1',
        title: 'Automate Lead Routing',
        description: 'Automate lead routing from forms directly into CRM to save 6 hours/week.',
        impact: 'High Impact - 6hrs/week saved',
        icon: 'Bot',
        explanation: {
          why: 'Manual lead routing creates delays and potential data loss. Automation ensures immediate processing and proper assignment based on predefined criteria.',
          expectedImpact: 'Reduces lead response time by 75% and eliminates human error in lead assignment.',
          implementationSteps: [
            'Map current lead sources and routing logic',
            'Configure automated workflows in CRM',
            'Set up lead scoring and assignment rules',
            'Test automation with sample leads',
            'Monitor and optimize routing performance'
          ]
        }
      },
      {
        id: '2',
        title: 'Consolidate Updates',
        description: 'Consolidate Slack and Asana updates into one daily digest for better visibility.',
        impact: 'Medium Impact - Reduced noise',
        icon: 'Workflow',
        explanation: {
          why: 'Information scattered across multiple platforms creates communication silos and reduces team awareness of project status.',
          expectedImpact: 'Improves team alignment by 40% and reduces time spent checking multiple platforms.',
          implementationSteps: [
            'Identify key information sources',
            'Create automated digest templates',
            'Schedule daily summary generation',
            'Customize digest content by team role',
            'Gather feedback and iterate on format'
          ]
        }
      },
      {
        id: '3',
        title: 'Redesign Onboarding',
        description: 'Redesign onboarding process to give Day 1 access to all essential tools.',
        impact: 'High Impact - 15% faster ramp',
        icon: 'Users',
        explanation: {
          why: 'Delayed tool access during onboarding reduces new hire productivity and creates frustration that impacts retention.',
          expectedImpact: 'Accelerates time-to-productivity by 15% and improves new hire satisfaction scores.',
          implementationSteps: [
            'Audit current onboarding timeline',
            'Pre-provision accounts for new hires',
            'Create automated setup workflows',
            'Develop self-service access portal',
            'Implement progress tracking dashboard'
          ]
        }
      }
    ],
    benchmark: {
      industry: 'AI SaaS',
      overInvested: ['Marketing tooling', 'Custom CRM scripts'],
      underInvested: ['Internal knowledge base', 'Ops automation'],
      suggestions: [
        'Build a centralized knowledge base in Notion.',
        'Use off-the-shelf integrations instead of custom scripts.',
        'Implement automated customer success workflows.',
        'Consolidate marketing stack to reduce tool sprawl.'
      ]
    },
    exportSummary: {
      headline: '🚀 Workflow Simulation: Automation Boosts Speed by 12%',
      changeSummary: 'We simulated automating CRM data entry and consolidating marketing tools at Novanet. Sales and Marketing workflows became 12% faster, with CRM handoffs automated and manual data entry eliminated, reducing errors and delays.',
      keyMetrics: 'Speed: +12% | Cost: -8% | Risk: Low',
      topInsights: '• Automate CRM lead routing for faster conversions\n• Consolidate marketing tools into a unified dashboard\n• Enable Day 1 access to tools during onboarding for 15% faster ramp'
    }
  },
  {
    id: 'ecommerce-fulfillment',
    name: 'E-Commerce Fulfillment Automation',
    companyWebsite: 'https://novamart.com',
    companyLinkedin: 'https://www.linkedin.com/company/novamart',
    teamSize: 70,
    toolsUsed: ['Shopify', 'Shippo', 'Stripe', 'Slack', 'Trello', 'AWS'],
    changeDescription: 'We want to automate order fulfillment and implement real-time inventory tracking to reduce shipping delays and manual data entry.',
    simulationResult: {
      changeSummary: 'Fulfillment automation dramatically reduces order processing time and inventory discrepancies. Real-time tracking eliminates stockouts and improves customer satisfaction through faster, more accurate deliveries.',
      bottlenecks: ['Eliminated manual order processing', 'Reduced inventory sync delays', 'Automated shipping label generation', 'Streamlined returns processing'],
      metrics: {
        speed: '+28%',
        cost: '-15%',
        risk: 'Medium'
      }
    },
    insights: [
      {
        id: '1',
        title: 'Real-Time Inventory Sync',
        description: 'Implement real-time inventory synchronization across all sales channels to prevent overselling.',
        impact: 'Critical Impact - 95% reduction in stockouts',
        icon: 'Package',
        explanation: {
          why: 'Inventory discrepancies between channels lead to overselling, customer dissatisfaction, and manual reconciliation work.',
          expectedImpact: 'Reduces stockout incidents by 95% and eliminates 12 hours/week of manual inventory management.',
          implementationSteps: [
            'Integrate Shopify with warehouse management system',
            'Set up real-time inventory webhooks',
            'Configure low-stock alerts and auto-reordering',
            'Implement inventory forecasting algorithms',
            'Create inventory dashboard for operations team'
          ]
        }
      },
      {
        id: '2',
        title: 'Automated Fulfillment Pipeline',
        description: 'Create end-to-end automated fulfillment from order placement to shipping confirmation.',
        impact: 'High Impact - 18hrs/day saved',
        icon: 'Truck',
        explanation: {
          why: 'Manual order processing creates delays, errors, and requires significant labor resources that could be better utilized.',
          expectedImpact: 'Reduces order processing time from 4 hours to 15 minutes and eliminates 90% of fulfillment errors.',
          implementationSteps: [
            'Map current fulfillment workflow',
            'Integrate Shopify with Shippo for automated shipping',
            'Set up order routing based on inventory location',
            'Implement automated quality checks',
            'Create exception handling for complex orders'
          ]
        }
      },
      {
        id: '3',
        title: 'Predictive Demand Planning',
        description: 'Use AI-driven demand forecasting to optimize inventory levels and reduce carrying costs.',
        impact: 'High Impact - 22% inventory cost reduction',
        icon: 'TrendingUp',
        explanation: {
          why: 'Manual demand planning leads to overstock or stockouts, both of which negatively impact cash flow and customer satisfaction.',
          expectedImpact: 'Optimizes inventory levels, reducing carrying costs by 22% while maintaining 99% product availability.',
          implementationSteps: [
            'Collect historical sales and seasonality data',
            'Implement machine learning forecasting models',
            'Set up automated reorder points and quantities',
            'Create demand planning dashboard',
            'Establish supplier integration for automated purchasing'
          ]
        }
      }
    ],
    benchmark: {
      industry: 'E-commerce',
      overInvested: ['Multiple shipping providers', 'Custom inventory scripts'],
      underInvested: ['Demand forecasting', 'Customer service automation'],
      suggestions: [
        'Consolidate to 2-3 primary shipping providers for better rates.',
        'Implement AI-powered demand forecasting system.',
        'Automate customer service for order inquiries.',
        'Integrate returns processing with inventory management.'
      ]
    },
    exportSummary: {
      headline: '📦 E-Commerce Optimization: 28% Faster Fulfillment',
      changeSummary: 'We simulated real-time inventory sync and automated order fulfillment at NovaMart, achieving 28% faster processing while reducing operational costs by 15%. Manual order entry bottlenecks were eliminated, and inventory discrepancies significantly reduced.',
      keyMetrics: 'Speed: +28% | Cost: -15% | Risk: Medium',
      topInsights: '• Enable real-time inventory synchronization to prevent stockouts\n• Automate fulfillment workflows to save 18 hours/day\n• Implement predictive demand planning for 22% lower inventory costs'
    }
  },
  {
    id: 'cybersecurity-incident',
    name: 'Cybersecurity Incident Response Optimization',
    companyWebsite: 'https://cyberguard.tech',
    companyLinkedin: 'https://www.linkedin.com/company/cyberguard-tech',
    teamSize: 50,
    toolsUsed: ['Jira', 'PagerDuty', 'Slack', 'AWS', 'Notion'],
    changeDescription: 'We want to reduce mean time to resolution (MTTR) for security incidents by automating escalation workflows and improving incident reporting.',
    simulationResult: {
      changeSummary: 'Incident response automation significantly reduces MTTR and improves security posture. Automated escalation ensures critical incidents receive immediate attention while intelligent routing optimizes resource allocation.',
      bottlenecks: ['Eliminated manual incident triage', 'Automated escalation workflows', 'Streamlined post-incident reporting', 'Reduced communication delays'],
      metrics: {
        speed: '+45%',
        cost: '-12%',
        risk: 'Low'
      }
    },
    insights: [
      {
        id: '1',
        title: 'Intelligent Incident Triage',
        description: 'Implement AI-powered incident classification and automatic severity assignment based on threat indicators.',
        impact: 'Critical Impact - 65% faster triage',
        icon: 'Shield',
        explanation: {
          why: 'Manual incident triage creates delays in response time and inconsistent severity assessment, potentially allowing critical threats to escalate.',
          expectedImpact: 'Reduces initial response time from 45 minutes to 15 minutes and ensures consistent threat assessment.',
          implementationSteps: [
            'Define incident classification criteria and severity levels',
            'Train ML models on historical incident data',
            'Integrate with security monitoring tools',
            'Set up automated ticket creation and routing',
            'Implement continuous learning from analyst feedback'
          ]
        }
      },
      {
        id: '2',
        title: 'Automated Escalation Matrix',
        description: 'Create dynamic escalation workflows that adapt based on incident type, severity, and team availability.',
        impact: 'High Impact - 40% reduction in MTTR',
        icon: 'AlertTriangle',
        explanation: {
          why: 'Static escalation procedures fail to account for team availability, incident complexity, and changing threat landscapes.',
          expectedImpact: 'Reduces mean time to resolution by 40% and ensures appropriate expertise is engaged immediately.',
          implementationSteps: [
            'Map current escalation procedures and decision points',
            'Create dynamic routing based on team schedules and expertise',
            'Implement automated notification cascades',
            'Set up escalation timers and automatic promotion',
            'Create escalation analytics and optimization feedback loops'
          ]
        }
      },
      {
        id: '3',
        title: 'Automated Incident Documentation',
        description: 'Generate comprehensive incident reports automatically with timeline reconstruction and impact analysis.',
        impact: 'Medium Impact - 8hrs/week saved',
        icon: 'FileText',
        explanation: {
          why: 'Manual incident documentation is time-consuming, often incomplete, and delays post-incident analysis and learning.',
          expectedImpact: 'Reduces documentation time by 80% and improves report consistency and completeness.',
          implementationSteps: [
            'Define standard incident report templates',
            'Integrate with all security tools for automatic data collection',
            'Implement timeline reconstruction algorithms',
            'Create automated impact assessment calculations',
            'Set up stakeholder-specific report generation'
          ]
        }
      }
    ],
    benchmark: {
      industry: 'Cybersecurity',
      overInvested: ['Multiple monitoring tools', 'Custom alert scripts'],
      underInvested: ['Incident response automation', 'Threat intelligence integration'],
      suggestions: [
        'Consolidate monitoring tools to reduce alert fatigue.',
        'Implement SOAR platform for response automation.',
        'Integrate threat intelligence feeds for context.',
        'Automate compliance reporting and evidence collection.'
      ]
    },
    exportSummary: {
      headline: '🛡️ Security Optimization: 45% Faster Incident Response',
      changeSummary: 'We simulated automated incident triage and escalation at CyberGuard Tech, achieving 45% faster response and resolution times while reducing manual reporting. This improved threat containment, reduced downtime, and strengthened the organization\'s security posture.',
      keyMetrics: 'Speed: +45% | Cost: -12% | Risk: Low',
      topInsights: '• Implement AI-powered incident triage to reduce false positives\n• Automate escalation workflows to cut MTTR by 40%\n• Auto-generate incident reports, saving 8 hours/week per analyst'
    }
  }
];

export const getScenarioById = (id: string): ScenarioData | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};

export const getScenarioByIndex = (index: number): ScenarioData | undefined => {
  return scenarios[index];
};