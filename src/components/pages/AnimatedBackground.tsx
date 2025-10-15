import React, { useRef, useEffect, useState } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

interface VantaEffect {
    destroy: () => void;
    setOptions: (options: any) => void;
}

const AnimatedBackground: React.FC = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (vantaRef.current) {
            observer.observe(vantaRef.current);
        }

        return () => {
            if (vantaRef.current) observer.unobserve(vantaRef.current);
        };
    }, []);

    useEffect(() => {
        if (isVisible && !vantaEffect && vantaRef.current) {
            const effect = FOG({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x999999,
                midtoneColor: 0x1a1a1a,
                lowlightColor: 0x0a0a0a,
                baseColor: 0x000000,
                blurFactor: 0.9,
                speed: 3.0,
                zoom: 0.8
            }) as VantaEffect;

            setVantaEffect(effect);
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [isVisible, vantaEffect]);

    return (
        <div ref={vantaRef} className="absolute inset-0 z-0">
            {!isVisible && <div className="bg-black w-full h-full"></div>}
        </div>
    );
};

export default AnimatedBackground;