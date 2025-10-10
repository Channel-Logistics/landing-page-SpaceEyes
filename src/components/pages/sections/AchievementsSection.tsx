import React from "react";
import AchievementList from "@/components/sections/AchievementList";
import SectionHeader from "@/components/sections/SectionHeader";
import NewsCard from "@/components/sections/NewsCard";
import { achievements } from "../../constants/AchivementsSection";

const AchievementsSection: React.FC = () => {
    return (
        <>
            <section className="py-20 px-6 lg:px-12 bg-black text-white">
                <SectionHeader title="Industry Leading Achievements" />
                <AchievementList achievements={achievements} />
            </section>

            <section className="bg-black text-white py-20 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                <figure className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg border border-white">
                    <img alt="Space Eyes" className="w-full h-full object-cover" />
                </figure>

                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight">Space Eyes</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">Some description here...</p>
                    <p className="text-gray-300 leading-relaxed text-lg">Another line here...</p>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-12 bg-black text-white">
                <AchievementList achievements={achievements} />
            </section>

            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-12">
                    <SectionHeader title="News Releases" divider />

                    <div className="flex flex-wrap justify-center md:justify-between gap-8">
                        {achievements.map((item) => (
                            <NewsCard key={item.description} {...item} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            All News Releases
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AchievementsSection;
