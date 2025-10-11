import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div 
                className="absolute left-0 right-0 top-[0%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_450px_at_50%_500px,#fbfbfb36,#000)]"
            ></div>
            <div 
                className="absolute w-[180vw] h-[180vh] rounded-full blur-[380px] opacity-70 pointer-events-none animate-slow-float"
                style={{ 
                    backgroundImage: 'radial-gradient(circle, rgba(200, 200, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                    top: '20%', 
                    left: '-10%',
                }}
            />
            <div 
                className="absolute w-[150vw] h-[150vh] rounded-full blur-[300px] opacity-60 pointer-events-none animate-slow-float-alt"
                style={{ 
                    backgroundImage: 'radial-gradient(circle, rgba(50, 50, 100, 0.15) 0%, rgba(0, 0, 0, 0) 65%)',
                    bottom: '10%',
                    right: '-20%',
                }}
            />
            <div 
                className="absolute w-[100vw] h-[100vh] rounded-full blur-[250px] opacity-50 pointer-events-none animate-slow-float"
                style={{ 
                    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 75%)',
                    top: '40%', 
                    right: '10%',
                    animationDuration: '70s',
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
