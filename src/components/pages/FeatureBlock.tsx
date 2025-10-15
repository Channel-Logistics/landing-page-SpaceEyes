import React from 'react';
import type { PrincipleBlockProps } from '../constants/principlData'; 
const FeatureBlock: React.FC<PrincipleBlockProps> = ({ icon: Icon, title, subtitle, description, reverse, imageUrl }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 pt-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>

        <div className="md:w-1/2">
            <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-8 w-8 text-foreground shrink-0" />
                <span className="text-sm font-semibold uppercase tracking-widest text-white/50">{subtitle}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug tracking-tight">
                {title}
            </h3>
            <p className="text-lg text-foreground leading-relaxed max-w-xl">
                {description}
            </p>
            <div className="h-0.5 w-16 bg-line-background mt-6 opacity-70"></div>
        </div>
        <div
            className={`md:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] bg-cover bg-center`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="w-full h-full bg-section-background/50 transition-colors duration-300"></div> 
        </div>
    </div>
);

export default FeatureBlock;