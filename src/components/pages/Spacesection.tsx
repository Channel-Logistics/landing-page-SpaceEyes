import React from 'react';
import ScrollSnapSection from '../ui/ScrollSnapSection';

const Background = "/images/slider/main-video.mp4";

const SpaceSection: React.FC = () => {
     return (
          <ScrollSnapSection>
               <div className="absolute inset-0 overflow-hidden">
                    <video
                         className="w-full h-full object-cover"
                         src={Background}
                         autoPlay
                         loop
                         muted
                         playsInline
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
               </div>
               <div className="absolute bottom-16 left-0 right-0 z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="max-w-6xl">
                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                              Space Eyes
                         </h1>
                         <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-full opacity-95">
                              Over the years, we have strategically broadened our capabilities to encompass a wide array of advanced technologies and services, including Space Domain Awareness, Maritime Intelligence, Wildfire Detection and Mitigation, Carbon Emissions and Biomass Tracking, and Predictive Financial Risk Analytics. Supported by a highly experienced Board of Directors and Advisory Board and two decades of proven leadership, we have built strong, lasting relationships across the Aerospace, Defense, and other vital industries.
                         </p>
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default SpaceSection;