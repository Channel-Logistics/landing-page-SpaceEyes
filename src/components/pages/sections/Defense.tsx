import React from "react";

import AchievementCard from "../../ui/AchievementCard";
import SeaWatch from "../../../../public/images/sea-watch.webp";
import type { Achievement } from "../../types/Archivements";
import { achievements } from "../../constants/AchivementsSection";



const Defense: React.FC = () => {
    return (
        <>
            <section className="py-20 px-6 lg:px-12 bg-black text-white">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Defense Solutions
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((item: Achievement) => (
                        <AchievementCard
                            key={item.description}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 lg:px-12 bg-black text-white">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((item) => (
                        <AchievementCard
                            key={item.description}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-black text-white py-20 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                <figure className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg border border-blue-400">
                    <img
                        src={SeaWatch}
                        alt="Sea Watch"
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight">Space Eyes</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam rem ratione aliquid numquam alias, architecto et voluptas, illo ex tempora dolores! Adipisci nulla doloremque modi maxime quisquam? Architecto, doloremque.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis pariatur nam sunt assumenda possimus, distinctio quo corporis ea repellendus voluptates similique veniam, amet at excepturi quis, consequuntur nulla! Laboriosam!
                    </p>
                </div>
            </section>

            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-12">

                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white/90">
                            News Releases
                        </h1>
                        <div className="w-20 h-1 bg-white/20 rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between gap-8">
                        {achievements.map((item) => (
                            <article
                                key={item.description}
                                className="flex flex-col justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full sm:w-[45%] lg:w-[30%] hover:bg-white/10 transition-colors duration-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />

                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-white leading-snug mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {item.description}
                                    </p>

                                    <p className="text-xs text-gray-500 mb-4">October 5, 2025</p>

                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </article>
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

            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6 lg:px-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        <div className="flex flex-col items-start">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white/90">
                                Past Events
                            </h2>
                            <div className="w-20 h-1 bg-white/20 rounded-full mt-4"></div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Firefly Aerospace Announces Acquisition of SciTec
                                </h3>
                                <p className="text-sm text-gray-400">
                                    October 5, 2025 | 4:00 PM CDT
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Read More →
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Firefly Aerospace Second Quarter 2025 Financial Results Conference Call
                                </h3>
                                <p className="text-sm text-gray-400">
                                    September 22, 2025 | 5:00 PM EDT
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Read More →
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    Jefferies Industrials Conference
                                </h3>
                                <p className="text-sm text-gray-400">
                                    September 3, 2025 | 8:50 AM EDT
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center mt-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            All Events
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

export default Defense;
