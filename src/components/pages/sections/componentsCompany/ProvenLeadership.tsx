import type React from "react";
import { useState } from "react";
import LeaderCard from "./LeaderComponent";
import { leaders } from "@/components/constants/leaderInfo";

const Background = "/images/background/image-27.webp"

const ProvenLeadership: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="w-screen min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-10 py-20"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="flex flex-col items-start justify-start pt-4 pb-24 px-8">
                <h2 className="text-4xl font-semibold drop-shadow-lg relative inline-block mb-2">
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

            <div className="flex flex-col gap-15 w-full max-w-7xl">

                <div className="flex justify-center gap-20">
                    {leaders.slice(0, 3).map((leader, i) => {
                        const absoluteIndex = i + 0;

                        return (
                            <LeaderCard
                                leader={leader}
                                index={absoluteIndex}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                                key={absoluteIndex}
                            />
                        );
                    })}
                </div>

                <div className="flex justify-center gap-20">
                    {leaders.slice(3, 6).map((leader, i) => {
                        const absoluteIndex = i + 3;

                        return (
                            <LeaderCard
                                leader={leader}
                                index={absoluteIndex}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                                key={absoluteIndex}
                            />
                        );
                    })}
                </div>

                <div className="flex justify-center gap-20">
                    {leaders.slice(6, 10).map((leader, i) => {
                        const absoluteIndex = i + 6;

                        return (
                            <LeaderCard
                                leader={leader}
                                index={absoluteIndex}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                                key={absoluteIndex}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProvenLeadership;