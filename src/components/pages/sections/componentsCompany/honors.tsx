import type React from "react";
import { Honnor } from "@/components/constants/Honnor";

const Background = "/images/slider/main-video.webp";

const Honors: React.FC = () => {
    return (
        <div
            className="w-screen min-h-[30vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${Background})`,
            }}
        >
            <div
                className="
                    flex flex-col sm:flex-row 
                    flex-wrap items-center 
                    justify-center gap-8 
                    sm:gap-24 p-6 sm:p-8
                "
            >
                {Honnor.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={`Honor-${index + 1}`}
                        className={`
                            object-contain drop-shadow-lg 
                            ${index === 0 ? "h-64 sm:h-80" : "h-52 sm:h-62"} 
                            w-auto
                        `}
                    />
                ))}
            </div>
        </div>
    );
};

export default Honors;
