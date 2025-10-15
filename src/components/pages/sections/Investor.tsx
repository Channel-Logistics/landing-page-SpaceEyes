import React from "react";
import AchievementsSection from "./AchievementsSection";

const videoSrc = "/videos/GlobeInventors.webm";

const Investor: React.FC = () => {
     return (
          <>
                    <section className="relative min-h-screen w-full flex items-center justify-between overflow-hidden px-6 lg:px-8">
                         <video
                              className="absolute inset-0 w-full h-full object-cover"
                              src={videoSrc}
                              autoPlay
                              loop
                              muted
                              playsInline
                         />
                         <div className="absolute inset-0 bg-black/40" />
                         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto">
                              <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-60">
                                   <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                                        Investor <br /> Relations
                                   </h1>
                              </div>

                              <div className="bg-black/60 text-white rounded-2xl shadow-lg backdrop-blur-md p-6 w-full sm:w-80 md:w-96">
                                   <h2 className="text-3xl font-semibold mb-2"></h2>
                                   <p className="text-4xl font-bold mb-1"></p>
                                   <p className="text-green-400 font-medium mb-2">
                                   </p>
                                   <p className="text-sm text-gray-300 italic">
                                   </p>
                              </div>
                         </div>
                    </section>
               <AchievementsSection />
          </>
     );
};

export default Investor;
