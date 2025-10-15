import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ButtonLanding: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-hero-background text-hero-text 
        font-semibold text-sm tracking-wider border-2 border-white 
        btn-glow hover:scale-105 active:scale-95 transition-all duration-300"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)'
      }}
    >
      {children}
    </button>
  );
};

export default ButtonLanding;