export interface FeaturePoint {
  label: string;
  text: string;
}

export interface FeatureSectionData {
  title: string;
  subtitle: string;
  description: string;
  points: FeaturePoint[];
  imagePlaceholderText: string;
  imageUrl: string;
  isTextRight: boolean;
}