import type React from "react"
import ProvenLeadership from "./componentsCompany/ProvenLeadership";
import Honors from "./componentsCompany/honors";
import Customers from "./componentsCompany/customers";

const Backgrond = "/images/slider/main-video.mp4"

const Company: React.FC = () => {
    return (
        <>
            <div className="relative w-screen h-130 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
                >
                    <source src={Backgrond} type="video/mp4" />
                </video>

                <div className="relative z-10 flex flex-col items-start justify-end h-full pb-19 text-white pl-40">
                    <h2 className="text-2xl font-bold mb-2">ABOUT US</h2>
                    <h1 className="text-7xl font-normal drop-shadow-lg">Space-Eyes</h1>
                </div>
            </div>

            <ProvenLeadership />
            <Honors />
            <Customers />
        </>

    );
}

export default Company;