import React from 'react';

interface ImagePlaceholderProps {
  imageUrl: string;
  text: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ imageUrl, text }) => {
  return (
    <div className="relative h-full w-full rounded-lg shadow-2xl overflow-hidden border border-primary/50">
      <img 
        src={imageUrl} 
        alt={text}
        className="h-full w-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </div>
  );
};