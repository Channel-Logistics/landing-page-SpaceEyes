
import SpaceSection from "../Spacesection";
import CorePillarsSection from "../CorePillarsSection";
import WorkflowSection from "../Carrousel";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import { FeatureCarousel } from "@/components/features";

export default function Home() {
    return (
        <>
            <ScrollSnapSection>
                <SpaceSection />
            </ScrollSnapSection>
            <ScrollSnapSection>
            <FeatureCarousel/> 
            </ScrollSnapSection>
            <ScrollSnapSection>
                <WorkflowSection />
            </ScrollSnapSection>
            <CorePillarsSection />
        </>
    );
}
