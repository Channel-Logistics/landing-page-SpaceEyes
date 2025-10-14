import React, { memo } from "react";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";

const VIDEO_SRC = "/images/slider/main-video.mp4";

const SpaceSection: React.FC = () => {
     return (
          <ScrollSnapSection>
               <BackgroundVideo src={VIDEO_SRC} />

               <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                         <h1
                              className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              font-extrabold text-white leading-tight mb-4 sm:mb-6
              tracking-tight drop-shadow-lg animate-fade-up
            "
                         >
                              Space Eyes
                         </h1>

                         <p
                              className="
              text-base sm:text-lg md:text-xl xl:text-2xl
              text-white opacity-95 leading-relaxed mx-auto max-w-prose
              animate-fade-up animate-delay-200
            "
                         >
                              Over the years, we have strategically broadened our capabilities to
                              encompass a wide array of advanced technologies and services,
                              including Space Domain Awareness, Maritime Intelligence, Wildfire
                              Detection and Mitigation, Carbon Emissions and Biomass Tracking, and
                              Predictive Financial Risk Analytics. Supported by a highly
                              experienced Board of Directors and Advisory Board and two decades of
                              proven leadership, we have built strong, lasting relationships
                              across the Aerospace, Defense, and other vital industries.
                         </p>
                    </div>
               </div>
          </ScrollSnapSection>
     );
};

const BackgroundVideo: React.FC<{ src: string }> = memo(({ src }) => (
     <div className="absolute inset-0 overflow-hidden">
          <video
               className="h-full w-full object-cover"
               src={src}
               autoPlay
               loop
               muted
               playsInline
               aria-label="Background space video"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
     </div>
));

BackgroundVideo.displayName = "BackgroundVideo";

export default memo(SpaceSection);
