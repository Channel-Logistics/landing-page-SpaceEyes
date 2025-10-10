import type React from "react";

const Background = "/images/slider/main-video.webp";
const Img1 = "/images/Space-Eyes.png"
const Img2 = "/images/2022.webp"
const Img3 = "/images/2018.webp"
const Img4 = "/images/2021.webp"

const Honors: React.FC = () => {
    return (
        <div
            className="w-screen h-100"
            style={{ backgroundImage: `url(${Background})` }}>
            <div className="flex items-center justify-center gap-25 p-8 drop-shadow-lg">
                <img src={Img1} alt="Imagen 1" className="w-auto h-80 object-cover" />
                <img src={Img2} alt="Imagen 2" className="w-auto h-62 object-cover" />
                <img src={Img3} alt="Imagen 3" className="w-auto h-62 object-cover" />
                <img src={Img4} alt="Imagen 4" className="w-auto h-62 object-cover" />
            </div>

        </div>
    );
}

export default Honors