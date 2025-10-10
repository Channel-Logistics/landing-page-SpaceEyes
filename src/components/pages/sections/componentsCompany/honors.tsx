import type React from "react";
import { Honnor } from "@/components/constants/Honnor";

const Background = "/images/slider/main-video.webp";

const Honors: React.FC = () => {
    return (
        <div
            className="w-screen h-100"
            style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="flex items-center justify-center gap-24 p-8 drop-shadow-lg">
                {Honnor.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={`Honor-${index + 1}`}
                        className={`object-cover ${index === 0 ? "w-auto h-80" : "w-auto h-62"}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Honors