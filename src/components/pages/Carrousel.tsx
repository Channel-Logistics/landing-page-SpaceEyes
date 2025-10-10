import React from 'react';
import ScrollSnapSection from '../ui/ScrollSnapSection';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../ui/carousel';
import { WorkflowSteps, type WorkflowStep } from '../constants/workflowData';
const Background = "/images/background/bg-7.webp";

const WorkflowCard: React.FC<WorkflowStep> = ({ title, subtitle, description, icon: Icon }) => {
    const isIntroCard = title === "Workflow";

    if (isIntroCard) {
        return (
            <div className="flex flex-col justify-end h-full p-8 text-white">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-3">
                </span>

                <h2 className="text-4xl font-bold tracking-tight mb-4 leading-snug">
                    {title}
                </h2>
                <h3 className="text-2xl font-normal text-white/90 whitespace-pre-line leading-relaxed">
                    {subtitle}
                </h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300">
            <div className="relative flex-grow p-8 pt-12">
                <div className="absolute top-0 left-0 p-4">
                    <Icon className="h-6 w-6 text-white/80" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-3 pt-6 border-l-4 border-white pl-4">
                    {title}
                </h3>
                <span className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4 block">
                    {subtitle}
                </span>
                <p className="text-lg text-white/80 leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="h-2 bg-white/10"></div>
        </div>
    );
};

const WorkflowSection: React.FC = () => {
    const spacingValue = '4';
    return (
        <ScrollSnapSection>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto py-24 md:py-32 flex items-center">

                <div className="w-full">
                    <Carousel className="w-full">
                        <CarouselContent className={`-ml-${spacingValue}`}>
                            {WorkflowSteps.map((step, index) => (
                                <CarouselItem
                                    key={index}
                                    className={`pl-${spacingValue} md:basis-1/2 lg:basis-1/3 h-[500px]`}
                                >
                                    <div className="p-1 h-full">
                                        <WorkflowCard {...step} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center space-x-6 mt-12 w-full">
                            <CarouselPrevious
                                className="bg-white/10 hover:bg-white/20 text-white border-none shadow-lg"
                                variant="outline"
                                size="icon"
                            />
                            <CarouselNext
                                className="bg-white/10 hover:bg-white/20 text-white border-none shadow-lg"
                                variant="outline"
                                size="icon"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </ScrollSnapSection>
    );
};
export default WorkflowSection;