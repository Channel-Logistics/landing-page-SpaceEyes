import Firewatch from "../Firewatch";
import SeaWatch from "../Seawatch";
import Morpheus from "../Morpheus";
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