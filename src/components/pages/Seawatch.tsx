import React from 'react';
import ScrollSnapSection from '../ui/ScrollSnapSection';

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
                         <button
                              className="group relative inline-flex items-center justify-center px-8 py-3 
                        bg-white 
                        text-black 
                        font-semibold text-sm tracking-wider
                        border-2 border-white 
                        rounded-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-gray-200 
                        hover:text-black
                        hover:shadow-lg hover:shadow-white/25
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
                        transform hover:scale-105 active:scale-95"
                         >
                              <span className="relative z-10">LEARN MORE</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                         </button>
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default SeaWatch;