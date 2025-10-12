import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-space-grid"></div>
            <div 
                className="absolute left-0 right-0 top-[0%] h-[1000px] w-[1000px] rounded-full bg-space-spotlight"
            ></div>
            <div 
                className="absolute w-[180vw] h-[180vh] rounded-full blur-[380px] opacity-70 pointer-events-none animate-slow-float bg-nebula-soft-blue"
                style={{ 
                    top: '20%', 
                    left: '-10%',
                }}
            />
            <div 
                className="absolute w-[150vw] h-[150vh] rounded-full blur-[300px] opacity-60 pointer-events-none animate-slow-float-alt bg-nebula-deep-blue"
                style={{ 
                    bottom: '10%',
                    right: '-20%',
                }}
            />
            <div 
                className="absolute w-[100vw] h-[100vh] rounded-full blur-[250px] opacity-50 pointer-events-none animate-slow-float bg-nebula-faint-white"
                style={{ 
                    top: '40%', 
                    right: '10%',
                    animationDuration: '70s',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;