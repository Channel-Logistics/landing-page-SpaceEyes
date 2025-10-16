// components/layout/SidebarMobile.tsx
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

interface SidebarMobileProps {
    menuOpen: boolean;
    onClose: () => void;
    baseButton: string;
    activeButton: string;
    inactiveButton: string;
}

export default function Sidebar({
    menuOpen,
    onClose,
    baseButton,
    activeButton,
    inactiveButton,
}: SidebarMobileProps) {
    return (
        <AnimatePresence>
            {menuOpen && (
                <>
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.aside
                        key="sidebar"
                        className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white/10 backdrop-blur-md border-l border-white/10 shadow-lg z-50 flex flex-col justify-start p-8 pt-16 md:hidden rounded-l-2xl"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <button
                            className="self-end mb-8 text-white hover:text-white/70 transition"
                            onClick={onClose}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <nav className="flex flex-col gap-4 text-lg mt-2">
                            <NavLink
                                to="/defense/seawatch"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Defense / SeaWatch
                            </NavLink>

                            <NavLink
                                to="/defense/morpheus"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Defense / Morpheus
                            </NavLink>

                            <NavLink
                                to="/climate/firewatch"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Climate / FireWatch
                            </NavLink>

                            <NavLink
                                to="/company"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Company
                            </NavLink>

                            <NavLink
                                to="/investors"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Investors
                            </NavLink>

                            <NavLink
                                to="/contact-us"
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `${baseButton} ${isActive ? activeButton : inactiveButton
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </nav>

                        <p className="text-white/50 text-xs mt-auto text-center">
                            © {new Date().getFullYear()} Space-Eyes. All rights reserved.
                        </p>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
