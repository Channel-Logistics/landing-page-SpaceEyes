import React from 'react';
import ScrollSnapSection from '../ui/ScrollSnapSection';
import Button from '../ui/button';

const Background = "/images/background/subheader-1.webp";

const SeaWatch: React.FC = () => {
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
               <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="max-w-6xl">
                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                              SeaWatch
                         </h1>
                         <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl opacity-95 drop-shadow-md">
                              SeaWatch™ offers insights into<br className="block" />
                              maritime activity, supporting trade, security, and sustainability
                         </p>
                         <Button />
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default SeaWatch;