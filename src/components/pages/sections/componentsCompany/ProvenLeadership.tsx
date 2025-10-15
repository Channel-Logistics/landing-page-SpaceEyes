import type React from "react";
import ContainerLeaderComponent from "./containerLeadercomponent";
import AnimatedBackground from "@/components/pages/AnimatedBackground"

const ProvenLeadership: React.FC = () => {
    
    return (
        <div
            className="relative w-screen min-h-screen bg-section-background text-line-background flex flex-col items-center justify-center px-10 py-20"
        >
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col items-start justify-center pt-4 pb-24 px-8 w-full max-w-7xl md:ml-196">
                <h2 className="text-2xl md:text-4xl font-semibold drop-shadow-lg relative inline-block mb-2">
                    Proven Leadership
                    <svg
                        className="absolute -right-20 top-1/2 -translate-y-1/2"
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                    >
                        <line x1="0" y1="10" x2="60" y2="0" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                        <line x1="0" y1="20" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                        <line x1="0" y1="30" x2="60" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                </h2>

                <div className="w-32 h-1 bg-current"></div>
            </div>
            <div className="relative z-10 flex flex-col gap-15 w-full max-w-7xl">
                <ContainerLeaderComponent />
            </div>
        </div>
    );
}

export default ProvenLeadership;