import type React from "react";
import { useState } from "react";
import LeaderCard from "./LeaderComponent";
import { leaders } from "@/components/constants/leaderInfo";

const ContainerLeaderComponent: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
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
        </>
    );
}

export default ContainerLeaderComponent;

