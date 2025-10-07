import React from 'react';
const Background = "/images/background/bg-7.webp";
const HeroSection: React.FC = () => {
     const handleLearnMoreClick = () => {
          const nextSection = document.getElementById('about-section');
          if (nextSection) {
               nextSection.scrollIntoView({ behavior: 'smooth' });
          }
     };

     return (
          <section className="relative min-h-screen w-full flex items-end justify-start overflow-hidden">
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                         //backgroundImage: `url(${Background})`,
                    }}
               >
                    <div className="absolute inset-0 bg-black/40"></div>
               </div>
               <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-24 lg:pb-32">
                    <div className="max-w-6xl">
                         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text-primary mb-6 leading-tight">
                              SpaceEyes
                         </h1>
                         <p className="text-lg md:text-xl text-hero-text-primary mb-8 leading-relaxed max-w-full opacity-95">
                              SpaceEyes™ The company offers advanced technologies in space, maritime intelligence, environmental monitoring, and financial analytics, backed by over 20 years of leadership and partnerships in the aerospace and defense sectors.
                         </p>
                         <button
                              onClick={handleLearnMoreClick}
                              className="group relative inline-flex items-center justify-center px-8 py-3 
                        bg-hero-background 
                        text-text-button 
                        font-semibold text-sm tracking-wider
                        border-2 border-hero-border
                        rounded-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-hero-border 
                        hover:text-hero-text
                        hover:shadow-lg hover:shadow-hero-border/25
                        focus:outline-none focus:ring-2 focus:ring-hero-border focus:ring-offset-2 focus:ring-offset-transparent
                        transform hover:scale-105 active:scale-95"
                         >
                              <span className="relative z-10">LEARN MORE</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-border/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;