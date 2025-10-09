import React from "react";

interface AchievementCardProps {
    title: string;
    description: string;
    image: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, image }) => {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-white hover:scale-[1.02] transition-transform duration-300">
            <img
                src={image}
                alt={description}
                className="w-full h-64 object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-200 text-lg">{description}</p>
            </div>
        </div>
    );
};

export default AchievementCard;
