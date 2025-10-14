interface FogOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
}
interface VantaEffect {
    destroy: () => void;
    setOptions: (options: Partial<FogOptions>) => void;
}

declare module 'vanta/dist/vanta.fog.min' {
    const FOG: (options: FogOptions) => VantaEffect;
    export default FOG;
}