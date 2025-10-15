import React, { type ElementType } from 'react';
import SpaceSection from "../Spacesection";
import CorePillarsSection from "../CorePillarsSection";
import WorkflowSection from "../Carrousel";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import { FeatureCarousel } from "@/components/features";

const snapSections: ElementType[] = [
    SpaceSection,
    FeatureCarousel,
    WorkflowSection,
];

export default function Home() {
    return (
        <>
            {snapSections.map((SectionComponent, index) => (
                <ScrollSnapSection key={index}>
                    <SectionComponent />
                </ScrollSnapSection>
            ))}
            <CorePillarsSection />
        </>
    );
}