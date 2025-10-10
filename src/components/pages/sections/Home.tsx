
import SpaceSection from "../Spacesection";
import CorePillarsSection from "../CorePillarsSection";
import WorkflowSection from "../Carrousel";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";


export default function Home() {
    return (
        <>
            <ScrollSnapSection>
                <SpaceSection />
            </ScrollSnapSection>
            <ScrollSnapSection>
                <WorkflowSection />
            </ScrollSnapSection>
            <CorePillarsSection />
        </>
    );
}
