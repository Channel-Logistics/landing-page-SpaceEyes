type Leader = {
    image: string;
    name: string;
    title: string;
    bio?: string;
};

type LeaderCardProps = {
    leader: Leader;
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
};

const LeaderCard: React.FC<LeaderCardProps> = ({
    leader,
    index,
    hoveredIndex,
    setHoveredIndex,
}) => {
    return (
        <div
            className="w-80 h-80 rounded-2xl shadow-lg flex flex-col justify-end text-left transition-all duration-300 drop-shadow-2xl overflow-hidden relative cursor-pointer"
            style={{
                backgroundImage: `url(${leader.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div
                className="w-full px-4 py-2 rounded-b-2xl transition-opacity duration-300"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    opacity: hoveredIndex === index ? 0 : 1,
                }}
            >
                <h3 className="text-white text-center text-sm font-semibold tracking-wide uppercase drop-shadow-lg mb-1">
                    {leader.name}
                </h3>
                <p className="text-white text-center text-xs drop-shadow-sm">
                    {leader.title}
                </p>
            </div>

            <div
                className={`absolute inset-0 backdrop-blur-sm p-6 flex flex-col justify-center transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
                <h3 className="text-white text-center text-2xl font-bold mb-1">
                    {leader.name}
                </h3>
                <p className="text-white/90 text-center text-sm mb-5 font-medium">
                    {leader.title}
                </p>

                {leader.bio && (
                    <p className="text-white/90 text-xs mb-4 leading-relaxed">
                        {leader.bio}
                    </p>
                )}
            </div>
            
        </div>
    );
};

export default LeaderCard;
