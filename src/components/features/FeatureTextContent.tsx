import React from 'react';
import { FeaturePointsList } from './FeaturePointsList';
import type { FeaturePoint } from '../constants/feature.types';


interface FeatureTextContentProps {
  subtitle: string;
  title: string;
  description: string;
  points: FeaturePoint[];
}

export const FeatureTextContent: React.FC<FeatureTextContentProps> = ({
  subtitle,
  title,
  description,
  points,
}) => (
  <div className="w-full">
    {subtitle && (
      <h3 className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-semibold mb-[1.5vh] uppercase tracking-widest text-muted-foreground">
        {subtitle}
      </h3>
    )}

    <h2 className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] font-bold leading-tight mb-[2vh] text-foreground">
      {title}
    </h2>

    {description && (
      <p className="text-[3.8vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[1.3vw] xl:text-[1.1vw] font-light leading-relaxed mb-[2vh] text-foreground">
        {description}
      </p>
    )}

    <FeaturePointsList points={points} />
  </div>
);
