// components/layout/SidebarMobile.tsx
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import React, { memo } from "react";

interface SidebarMobileProps {
    menuOpen: boolean;
    onClose: () => void;
    baseButton: string;
    activeButton: string;
    inactiveButton: string;
}

const Sidebar: React.FC<SidebarMobileProps> = ({
    menuOpen,
    onClose,
    baseButton,
    activeButton,
    inactiveButton,
}) => {
    return (
        <AnimatePresence>
            {menuOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />

                    {/* Sidebar */}
                    <motion.aside
                        key="sidebar"
                        className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white/10 backdrop-blur-sm border-l border-white/10 shadow-lg z-50 flex flex-col justify-start p-8 pt-16 md:hidden rounded-l-2xl will-change-transform"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <button
                            className="self-end mb-8 text-white hover:text-white/70 transition"
                            onClick={onClose}
                            aria-label="Close sidebar"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <nav className="flex flex-col gap-4 text-lg mt-2">
                            {[
                                { to: "/defense/seawatch", label: "Defense / SeaWatch" },
                                { to: "/defense/morpheus", label: "Defense / Morpheus" },
                                { to: "/climate/firewatch", label: "Climate / FireWatch" },
                                { to: "/company", label: "Company" },
                                { to: "/investors", label: "Investors" },
                                { to: "/contact-us", label: "Contact Us" },
                            ].map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={onClose}
                                    className={({ isActive }) =>
                                        `${baseButton} ${isActive ? activeButton : inactiveButton
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        <p className="text-white/50 text-xs mt-auto text-center">
                            © {new Date().getFullYear()} SpaceEyes. All rights reserved.
                        </p>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default memo(Sidebar);