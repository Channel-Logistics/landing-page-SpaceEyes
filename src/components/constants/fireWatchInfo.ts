export interface FireWatchProps {
     title: string;
     description: string;
     reverse?: boolean;
     image: string;
}

export const FireWatch: FireWatchProps[] = [
     {
          title: "AI-Powered Wildfire Predictions in real time",
          description: "Utilizing cutting-edge AI and machine learning algorithms, FireWatch enables proactive responses and empoweres communities with accurate, actionable insights to mitigate risks effectively.",
          image: "/images/firewatch/prediction-web-screenshot.png",
          reverse: true,
     },
     {
          title: "Real-time Fire Monitoring",
          description: "Up-to-date emergency monitoring system offering immediate updates on current fires, burned spread perimeters, and potential risks.",
          image: "/images/firewatch/fire-list-web.png",
          reverse: false,
     }
];