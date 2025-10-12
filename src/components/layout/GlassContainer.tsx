import React from 'react';
import { cn } from '../../lib/utils';

interface GlassContainerProps extends React.ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, className, ...props }) => {
    const baseClasses = "bg-white/5 backdrop-blur-sm border border-white/10";

    return (
        <div 
            className={cn(baseClasses, className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassContainer;