import React from "react";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import ButtonLanding from "@/components/ui/buttonlanding";

const Background = "/images/background/Morpheus.png";

const Morpheus: React.FC = () => {
     return (
          <ScrollSnapSection>
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                         backgroundImage: `url(${Background})`,
                    }}
               >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
               </div>
               <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-60">
                    <div className="max-w-6xl">
                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                              Morpheus
                         </h1>
                         <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-full opacity-95">
                              Morpheus delivers a next-generation Counter-Unmanned Aerial System
                              (C-UAS) solution that fuses advanced RF signal processing, artificial
                              intelligence, and quantum-resistant security. It detects, classifies,
                              and neutralizes airborne threats with unmatched precision—offering
                              real-time situational awareness, autonomous response, and seamless
                              coordination across complex electromagnetic environments.
                         </p>
                         <ButtonLanding />
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default Morpheus;