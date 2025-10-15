export interface SeaWatchProps {
     title: string;
     description: string;
     reverse?: boolean;
     image: string;
}

export const SeaWatchInfoSections: SeaWatchProps[] = [
     {
          title: "Sensor Fusion",
          description: "SeaWatch’s Sensor fusion engine continuously integrates diverse maritime data sources—such as AIS broadcasts, RF intercept bearings, and EO/SAR imagery detections into a unified spatio temporal reference frame.",
          image: "/images/seawatch/SensorFusion.webp",
          reverse: true,
     },
     {
          title: "Smart Maritime Maps",
          description: "SeaWatch uses sensor fusion, satellites, and drones to generate intelligent maps that enable the detection, tracking, and anticipation of maritime activities in real time, identifying threats, dark vessels, and violations in critical areas.",
          image: "/images/seawatch/LiveSatelliteTracking.webp",
          reverse: false,
     }
];