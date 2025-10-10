import React from "react";
import type { SectionHeaderP } from "@/components/types/SectionHeader";


const SectionHeader: React.FC<SectionHeaderP> = ({ title, subtitle, divider = true }) => (
    <div className="flex flex-col items-start gap-4 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white/90">
            {title}
        </h2>
        {subtitle && <p className="text-gray-300 leading-relaxed text-lg">{subtitle}</p>}
        {divider && <div className="w-20 h-1 bg-white/20 rounded-full mt-2 md:mt-0"></div>}
    </div>
);

export default SectionHeader;
