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

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {

            setVantaEffect(
                FOG({
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

                }) as VantaEffect
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef} className="absolute inset-0 z-0"></div>
    );
};

export default AnimatedBackground;