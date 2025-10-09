import { Zap, Target, Globe, Leaf, Clock, type LucideIcon } from 'lucide-react';

interface Principle {
     icon: LucideIcon;
     title: string;
     subtitle: string;
     description: string;
     imageClass: string;
     reverse: boolean;
}

export const Principles: Principle[] = [
     {
          icon: Zap,
          title: "Expertise Integration",
          subtitle: "ADVANCED TECHNOLOGY & SKILLS",
          description: "Leverages a blend of advanced technology and soft skills to deliver comprehensive solutions.",
          imageClass: "bg-[url('/images/features/integration-bg.webp')]",
          reverse: false,
     },
     {
          icon: Target,
          title: "Actionable Insights",
          subtitle: "TIMELY & STRATEGIC DECISIONS",
          description: "Provides timely, precise insights that enable informed and strategic decision-making.",
          imageClass: "bg-[url('/images/features/insights-bg.webp')]",
          reverse: true,
     },
     {
          icon: Globe,
          title: "Solutions for Global Challenges",
          subtitle: "ADDRESSING VITAL ISSUES",
          description: "Tackles critical issues such as maritime security, environmental risk management, wildfire mitigation, and financial risk assessment.",
          imageClass: "bg-[url('/images/features/global-bg.webp')]",
          reverse: false,
     },
     {
          icon: Leaf,
          title: "Commitment to Sustainability",
          subtitle: "CARBON TRACKING & ECO-FOCUS",
          description: "Promotes sustainability through accurate carbon tracking and eco-conscious solutions.",
          imageClass: "bg-[url('/images/features/sustain-bg.webp')]",
          reverse: true,
     },
     {
          icon: Clock,
          title: "Real-Time Decision Support",
          subtitle: "NAVIGATING RAPID LANDSCAPES",
          description: "Equips clients with real-time insights, empowering them to navigate a rapidly evolving landscape and maintain a competitive edge.",
          imageClass: "bg-[url('/images/features/realtime-bg.webp')]",
          reverse: false,
     },
];