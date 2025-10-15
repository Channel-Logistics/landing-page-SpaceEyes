import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselDotsProps {
    count: number;
    current: number;
    onDotClick: (index: number) => void;
  }
  
  export const CarouselDots: React.FC<CarouselDotsProps> = ({ count, current, onDotClick }) => (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            'w-3 h-3 rounded-full transition-opacity duration-300',
            current === index + 1
              ? 'bg-primary opacity-100'
              : 'bg-muted-foreground opacity-50 hover:opacity-75'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );