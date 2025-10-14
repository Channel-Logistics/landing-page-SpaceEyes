import type React from "react"
import ProvenLeadership from "./componentsCompany/ProvenLeadership";
import Honors from "./componentsCompany/honors";
import Customers from "./componentsCompany/customers";

const Backgrond = "/images/slider/main-video.mp4"

const Company: React.FC = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="relative w-full h-[50vh] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
                >
                    <source src={Backgrond} type="video/mp4" />
                </video>

                <div className="relative z-10 flex flex-col items-start justify-end h-full pb-10 sm:pb-16 md:pb-20 text-white px-6 sm:px-10 md:pl-40">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 tracking-wide">
                        ABOUT US
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal drop-shadow-lg leading-tight">
                        Space-Eyes
                    </h1>
                </div>
            </div>

            <ProvenLeadership />
            <Honors />
            <Customers />
        </div>

    );
}

export default Company;