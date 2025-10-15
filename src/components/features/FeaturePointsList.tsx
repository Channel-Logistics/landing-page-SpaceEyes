import React from 'react';
import { FeaturePoint } from './FeaturePoint';
import type { FeaturePoint as FeaturePointType } from '../constants/feature.types';

interface FeaturePointsListProps {
  points: FeaturePointType[];
}

export const FeaturePointsList: React.FC<FeaturePointsListProps> = ({ points }) => (
  <div className="space-y-[1.5vh] mb-[2vh]">
    {points.map((point, i) => (
      <FeaturePoint key={i} point={point} />
    ))}
  </div>
);