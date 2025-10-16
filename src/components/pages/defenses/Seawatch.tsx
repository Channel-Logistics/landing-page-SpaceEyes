import React from 'react';
import ScrollSnapSection from '../../ui/ScrollSnapSection';
import ButtonLanding from '@/components/ui/buttonlanding';
import SeaWatchCorePillarsSection from './sections/SectionsSeaWatch';

const Background = "/images/background/subheader-1.webp";

const SeaWatch: React.FC = () => {
     return (
          <>
               <ScrollSnapSection>
                    <div
                         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                         style={{
                              backgroundImage: `url(${Background})`,
                         }}
                    >
                         <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-60">
                         <div className="max-w-6xl">
                              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                                   SeaWatch
                              </h1>
                              <p className="text-sm md:text-xl text-white mb-8 leading-relaxed max-w-2xl opacity-95 drop-shadow-md">
                                   SeaWatch™ offers insights into<br className="block" />
                                   maritime activity, supporting trade, security, and sustainability
                              </p>
                              <ButtonLanding
                                   onClick={() => window.open("https://fires.space-eyes.com", "_blank")}
                                   children="LEARN MORE"
                              />
                         </div>
                    </div>
               </ScrollSnapSection>

               <SeaWatchCorePillarsSection />
          </>
     );
};

export default SeaWatch;