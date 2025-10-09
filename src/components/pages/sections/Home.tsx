import Firewatch from "@/components/pages/climates/Firewatch";
import SeaWatch from "@/components/pages/defenses/Seawatch";
import Morpheus from "@/components/pages/defenses/Morpheus";
import SpaceSection from "../Spacesection";
import CorePillarsSection from "../CorePillarsSection";


export default function Home() {
    return (
        <>
            <SpaceSection />
            <CorePillarsSection />
            <Firewatch />
            <SeaWatch />
            <Morpheus />
        </>
    );
}