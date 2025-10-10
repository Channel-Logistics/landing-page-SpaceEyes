import React from 'react';
import ScrollSnapSection from '../../ui/ScrollSnapSection';
import ButtonLanding from '@/components/ui/buttonlanding';

const Background = "/images/background/bg-5.webp";

const Firewatch: React.FC = () => {
     return (
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
                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                              FireWatch
                         </h1>
                         <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl opacity-95 drop-shadow-md">
                              FireWatch™ addresses the growing<br className="block" />
                              wildfire crisis with predictive and real-time tools
                         </p>
                         <ButtonLanding />
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default Firewatch;