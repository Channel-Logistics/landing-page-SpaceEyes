import React, { useRef, useEffect, useState } from 'react';
import SeaWatchFeatureBlock from '../../SeaWatchFeatureBlock';
import AnimatedBackground from '../../AnimatedBackground';
import { FireWatch } from '@/components/constants/fireWatchInfo';

const FireWatchCorePillarsSection: React.FC = () => {
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
        return <section ref={sectionRef} className="relative w-full bg-black h-full"></section>;
    }
    return (
        <section ref={sectionRef} className="relative h-full w-full bg-black overflow-hidden">

            <AnimatedBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 md:py-20">
                <div className="space-y-8">
                    {FireWatch.map((principle, index) => (
                        <SeaWatchFeatureBlock
                            key={index}
                            {...principle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FireWatchCorePillarsSection;