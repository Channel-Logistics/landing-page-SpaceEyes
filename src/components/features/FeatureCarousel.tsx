import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { SlideContent } from './SlideContent';
import { CarouselDots } from './CarouselDots';
import { featuresData } from '../constants/featuresData';


export const FeatureCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="min-h-screen bg-background pt-32 pb-20">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
        <CarouselContent className="h-full">
          {featuresData.map((data, index) => (
            <CarouselItem key={index} className="h-full">
              <SlideContent data={data} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground border-primary bg-black/50 hover:bg-black/70 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground border-primary bg-black/50 hover:bg-black/70 z-10" />

        <CarouselDots count={count} current={current} onDotClick={handleDotClick} />
      </Carousel>
    </section>
  );
};
