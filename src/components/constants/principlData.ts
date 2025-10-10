import type { LucideIcon } from 'lucide-react';
import { Zap, Target, Globe, Leaf, Clock } from 'lucide-react';

export interface PrincipleBlockProps {
     icon: LucideIcon;
     title: string;
     subtitle: string;
     description: string;
     reverse?: boolean;
     imageUrl: string;
}

export const Principles: PrincipleBlockProps[] = [
     {
          icon: Zap,
          title: "Expertise Integration",
          subtitle: "ADVANCED TECHNOLOGY & SKILLS",
          description: "Leverages a blend of advanced technology and soft skills to deliver comprehensive solutions.",
          imageUrl: "/images/background/bg-27.webp",
          reverse: false,
     },
     {
          icon: Target,
          title: "Actionable Insights",
          subtitle: "TIMELY & STRATEGIC DECISIONS",
          description: "Provides timely, precise insights that enable informed and strategic decision-making.",
          imageUrl: "/images/sea-watch.webp",
          reverse: true,
     },
     {
          icon: Globe,
          title: "Solutions for Global Challenges",
          subtitle: "ADDRESSING VITAL ISSUES",
          description: "Tackles critical issues such as maritime security, environmental risk management, wildfire mitigation, and financial risk assessment.",
          imageUrl: "/images/background/bg-8.webp",
          reverse: false,
     },
     {
          icon: Leaf,
          title: "Commitment to Sustainability",
          subtitle: "CARBON TRACKING & ECO-FOCUS",
          description: "Promotes sustainability through accurate carbon tracking and eco-conscious solutions.",
          imageUrl: "/images/background/bg-6.webp",
          reverse: true,
     },
     {
          icon: Clock,
          title: "Real-Time Decision Support",
          subtitle: "NAVIGATING RAPID LANDSCAPES",
          description: "Equips clients with real-time insights, empowering them to navigate a rapidly evolving landscape and maintain a competitive edge.",
          imageUrl: "/images/wild-fires.webp",
          reverse: false,
     },
];