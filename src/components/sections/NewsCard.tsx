import React from "react";
import type { Achievement } from "@/components/types/Archivements";

const NewsCard: React.FC<Achievement> = ({ title, description, image }) => (
    <article className="flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full sm:w-[45%] lg:w-[30%] hover:bg-white/10 transition-colors duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
        <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white leading-snug mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <p className="text-xs text-gray-500 mb-4">October 5, 2025</p>
            <a
                href="#"
                className="text-sm font-medium text-muted hover:text-blue-300 transition-colors"
            >
                Read More →
            </a>
        </div>
    </article>
);

export default NewsCard;
