import React from "react";
import AchievementCard from "../../ui/AchievementCard";
import SeaWatch from "../../../../public/images/sea-watch.webp";

const achievements = [
    {
        title: "First & Only",
        description: "Operational U.S. 1-ton Rocket",
        image: "/images/rocket-engine.jpg",
    },
    {
        title: "First & Only",
        description: "24 Hour Record-Breaking Responsive Launch Time",
        image: "/images/rocket-launch.jpg",
    },
    {
        title: "First & Only",
        description: "Fully Successful Commercial Moon Landing",
        image: "/images/moon-landing.jpg",
    },
];

const AchievementsSection: React.FC = () => {
    return (
        <>
            <section className="py-20 px-6 lg:px-12 bg-black text-white">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Industry Leading Achievements
                    </h2>
                </div>

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
                <figure className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10">
                    <img
                        src={SeaWatch}
                        alt="Sea Watch"
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight">About Space Eyes</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam rem ratione aliquid numquam alias, architecto et voluptas, illo ex tempora dolores! Adipisci nulla doloremque modi maxime quisquam? Architecto, doloremque.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis pariatur nam sunt assumenda possimus, distinctio quo corporis ea repellendus voluptates similique veniam, amet at excepturi quis, consequuntur nulla! Laboriosam!
                    </p>
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
        </>
    );
};

export default AchievementsSection;
