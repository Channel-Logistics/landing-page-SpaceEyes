import React from 'react';
import { type LucideIcon } from 'lucide-react'; 

interface FeatureBlockProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    reverse?: boolean;
    imageClass: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon: Icon, title, subtitle, description, reverse, imageClass }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 pt-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Text and Details Block */}
        <div className="md:w-1/2">
            <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-8 w-8 text-white shrink-0" /> 
                <span className="text-sm font-semibold uppercase tracking-widest text-white/50">{subtitle}</span>
            </div>
            
            {/* Títulos más pequeños y con font-bold */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug tracking-tight">
                {title}
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {description}
            </p>

            {/* Subtle Separator/Accent Line */}
            <div className="h-0.5 w-16 bg-white mt-6 opacity-70"></div>
        </div>

        {/* Image/Visual Block */}
        <div 
            className={`md:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] ${imageClass} bg-cover bg-center`}
        >
            <div className="w-full h-full bg-black/40 hover:bg-black/20 transition-colors duration-300"></div>
        </div>
    </div>
);

export default FeatureBlock;