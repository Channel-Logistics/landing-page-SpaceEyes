import type { LucideIcon } from 'lucide-react';
import { Target, Search, BarChart3, Database, TrendingUp, Cpu } from 'lucide-react';
export interface WorkflowStep {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
}

export const WorkflowSteps: WorkflowStep[] = [
    {
        title: "Workflow",
        subtitle: "How We Deliver\nIntelligence @ Speed",
        description: "Esta es la tarjeta introductoria, que usa un diseño especial y no requiere descripción.",
        icon: Cpu,
    },
    {
        title: "COLLECT",
        subtitle: "Gathering Data",
        description: "We gather an astounding 2 TB of data every month from 75+ non-spatial data sources and 5+ space and airborne sensor phenomenology's.",
        icon: Database,
    },
    {
        title: "PROCESS",
        subtitle: "Refining Data",
        description: "We process this data using over 500 industry benchmarks, 300+ suspicion indicators, and 100+ aggressor methods of operation. Our automated TRL9 image processing system ensures efficiency.",
        icon: BarChart3,
    },
    {
        title: "ANALYZE",
        subtitle: "Generating Insights",
        description: "Our threat evaluation engine and analytics are fully automated, relying on 570+ user/AI-developed rules, GeoFences, and use cases from US and Allies exercises.",
        icon: Search,
    },
    {
        title: "ACT",
        subtitle: "Final Delivery",
        description: "Deliver real-time, actionable intelligence directly to decision-makers through a customizable dashboard, enabling rapid response to evolving global situations.",
        icon: TrendingUp,
    },
];