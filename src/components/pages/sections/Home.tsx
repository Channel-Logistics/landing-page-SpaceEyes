import React, { type ElementType } from 'react';
import SpaceSection from "../Spacesection";
import CorePillarsSection from "../CorePillarsSection";
import WorkflowSection from "../Carrousel";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import { FeatureCarousel } from "@/components/features";

const snapSectionsBefore: ElementType[] = [
    SpaceSection,
];

const snapSectionsAfter: ElementType[] = [
    WorkflowSection,
    FeatureCarousel,
];

export default function Home() {
    return (
        <>
            {snapSectionsBefore.map((SectionComponent, index) => (
                <ScrollSnapSection key={`before-${index}`}>
                    <SectionComponent />
                </ScrollSnapSection>
            ))}
            <CorePillarsSection />
            {snapSectionsAfter.map((SectionComponent, index) => (
                <ScrollSnapSection key={`after-${index}`}>
                    <SectionComponent />
                </ScrollSnapSection>
            ))}
        </>
    );
}