import React from 'react';
import { cn } from '@/lib/utils';
import { FeatureTextContent } from './FeatureTextContent';
import { ImagePlaceholder } from '../sections/ImagePlaceholder';
import type { FeatureSectionData } from '../constants/feature.types';

interface SlideContentProps {
  data: FeatureSectionData;
  index: number;
}

export const SlideContent: React.FC<SlideContentProps> = ({ data, index }) => {
  const { title, subtitle, description, points, imagePlaceholderText, imageUrl, isTextRight } = data;

  const textOrderClasses = isTextRight ? 'lg:order-2' : 'lg:order-1';
  const imageOrderClasses = isTextRight ? 'lg:order-1' : 'lg:order-2';

  return (
    <div className="h-full w-full bg-background">
      <div className="h-full w-[90%] max-w-7xl mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vh] lg:gap-[6vh] xl:gap-[8vh] w-full">
          <div className={cn('h-[35vh] sm:h-[45vh] lg:h-[55vh] xl:h-[60vh] flex items-center justify-center', imageOrderClasses)}>
            <ImagePlaceholder imageUrl={imageUrl} text={imagePlaceholderText} />
          </div>
          <div className={cn('flex flex-col justify-center py-[3vh] lg:py-[5vh]', textOrderClasses)}>
            <FeatureTextContent
              subtitle={subtitle}
              title={title}
              description={description}
              points={points}
            />
          </div>
        </div>
      </div>
    </div>
  );
};