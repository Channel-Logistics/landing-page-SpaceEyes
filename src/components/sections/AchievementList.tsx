import React from "react";

import AchievementCard from "@/components/ui/AchievementCard";
import type { AchievementListProps } from "@/components/types/AchievementList";

const AchievementList: React.FC<AchievementListProps> = ({ achievements, className }) => (
    <div className={`flex flex-wrap justify-center gap-8 ${className}`}>
        {achievements.map((item) => (
            <div key={item.description} className="w-full md:w-[48%] lg:w-[30%] flex justify-center">
                <AchievementCard {...item} />
            </div>
        ))}
    </div>
);

export default AchievementList;