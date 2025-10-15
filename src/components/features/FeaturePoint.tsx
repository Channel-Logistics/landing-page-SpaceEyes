import React from 'react';
import type { FeaturePoint as FeaturePointType } from '../constants/feature.types';

interface FeaturePointProps {
  point: FeaturePointType;
}

export const FeaturePoint: React.FC<FeaturePointProps> = ({ point }) => (
  <p className="text-[3.5vw] sm:text-[2.8vw] md:text-[2.2vw] lg:text-[1.2vw] xl:text-[1vw] font-light leading-relaxed text-muted-foreground">
    <strong className="font-semibold text-foreground">
      {point.label}
    </strong>{' '}
    {point.text}
  </p>
);