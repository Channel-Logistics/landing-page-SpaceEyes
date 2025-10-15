import React from 'react';
import type { SeaWatchProps } from '../constants/seaWatchInfo';

const SeaWatchFeatureBlock: React.FC<SeaWatchProps> = ({ title, description, reverse, image }) => (
    <div className={`flex flex-col md:flex-row items-center gap-18 pt-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>

        <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug tracking-tight">
                {title}
            </h3>
            <p className="text-lg text-foreground leading-relaxed max-w-xl">
                {description}
            </p>
            <div className="h-0.5 w-16 bg-line-background mt-6 opacity-70"></div>
        </div>
        <div
            className={`md:w-1/2 w-full h-[314px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] bg-cover bg-center`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="w-full h-full bg-section-background/30 transition-colors duration-300"></div> 
        </div>
    </div>
);

export default SeaWatchFeatureBlock;