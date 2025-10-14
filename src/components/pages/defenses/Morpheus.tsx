import React from "react";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import ButtonLanding from "@/components/ui/buttonlanding";

const Background = "/images/background/Morpheus.png";

const Morpheus: React.FC = () => {
     return (
          <ScrollSnapSection>
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${Background})` }}
               >
                    <div className="absolute inset-0 bg-black/40 from-black/80 via-black/40 to-transparent" />
               </div>

               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-48 md:pt-56 lg:pt-60 xl:pt-72">
                    <div className="max-w-5xl">
                         <h1
                              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg"
                         >
                              Morpheus
                         </h1>

                         <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-white mb-6 sm:mb-8 leading-relaxed opacity-95max-w-prose">
                              Morpheus delivers a next-generation Counter-Unmanned Aerial System (C-UAS)
                              solution that fuses advanced RF signal processing, artificial intelligence,
                              and quantum-resistant security. It detects, classifies, and neutralizes
                              airborne threats with unmatched precision—offering real-time situational
                              awareness, autonomous response, and seamless coordination across complex
                              electromagnetic environments.
                         </p>
                         <div className="flex justify-start">
                              <ButtonLanding />
                         </div>
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

export default Morpheus;