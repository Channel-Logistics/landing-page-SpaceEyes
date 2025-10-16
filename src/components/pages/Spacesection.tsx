import React from 'react';

import ScrollSnapSection from '@/components/ui/ScrollSnapSection';

const Background = "/videos/slider/main-video.webm";

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
               <div className="absolute max-w-7xl pt-55">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-muted leading- mb-6 text-center md:text-left">
                         Space-Eyes
                    </h1>
                    <p className="text-sm md:text-xl text-muted leading-relaxed max-w-full text-justify md:text-left mx-4 md:mx-4 lg:mx-0">
                         Over the years, we have strategically broadened our capabilities to encompass a wide array of advanced technologies and services, including Space Domain Awareness, Maritime Intelligence, Wildfire Detection and Mitigation, Carbon Emissions and Biomass Tracking, and Predictive Financial Risk Analytics. Supported by a highly experienced Board of Directors and Advisory Board and two decades of proven leadership, we have built strong, lasting relationships across the Aerospace, Defense, and other vital industries.
                    </p>
               </div>
          </ScrollSnapSection>
     );
};

export default SpaceSection;