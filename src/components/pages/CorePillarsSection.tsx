import React, { useRef, useEffect, useState } from 'react';
import FeatureBlock from './FeatureBlock';
import { Briefcase } from 'lucide-react';
import { Principles } from '../constants/principlData';
import AnimatedBackground from './AnimatedBackground';


const CorePillarsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasLoaded(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '200px',
                threshold: 0.01,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);
    if (!hasLoaded) {
        return <section ref={sectionRef} className="relative w-full bg-black min-h-[700px]"></section>;
    }
    return (
        <section ref={sectionRef} className="relative h-full w-full bg-black overflow-hidden min-h-[700px]">

            <AnimatedBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 md:py-40">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center space-x-2 text-lg font-semibold uppercase tracking-widest text-white/50 mb-3">
                        <Briefcase className="h-5 w-5 text-white" />
                        <span>Company Foundation</span>
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Our Fundamental Principles
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        These five principles guide our strategy, technology, and client relationships for comprehensive, responsible solutions.
                    </p>
                </div>
                <div className="space-y-8">
                    {Principles.map((principle, index) => (
                        <FeatureBlock
                            key={index}
                            {...principle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePillarsSection;