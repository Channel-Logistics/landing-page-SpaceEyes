import React from 'react';
import { motion } from 'framer-motion';

interface ScrollSnapSectionProps {
    children: React.ReactNode;
    delay?: number;
}

const ScrollSnapSection: React.FC<ScrollSnapSectionProps> = ({ children, delay = 0 }) => {
    return (
        <motion.section
            className="snap-start relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.section>
    );
};

export default ScrollSnapSection;
