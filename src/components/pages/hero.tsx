import React from 'react';

const Background = "/images/background/bg-7.webp";

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
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
                        Space-Eyes
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-full opacity-95">
                        SpaceEyes™ The company offers advanced technologies in space, maritime intelligence, environmental monitoring, and financial analytics, backed by over 20 years of leadership and partnerships in the aerospace and defense sectors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;