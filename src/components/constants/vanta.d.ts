// vanta.d.ts

// 1. Define la interfaz para el objeto de configuración del efecto FOG (Niebla)
interface FogOptions {
    el: HTMLElement | null;
    THREE: any; // Usamos 'any' aquí, ya que el módulo 'three' ya tiene sus propios tipos.
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
    // Otros parámetros de Vanta si los usas
}

// 2. Define la interfaz del objeto que devuelve Vanta.js
interface VantaEffect {
    destroy: () => void;
    setOptions: (options: Partial<FogOptions>) => void;
    // Puedes añadir otros métodos como resize() si los necesitas
}

// 3. Declara el módulo 'vanta/dist/vanta.fog.min'
declare module 'vanta/dist/vanta.fog.min' {
    const FOG: (options: FogOptions) => VantaEffect;
    export default FOG;
}