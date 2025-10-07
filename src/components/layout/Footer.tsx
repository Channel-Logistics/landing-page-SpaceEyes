// src/components/layout/Footer.tsx
import { Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 mt-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <div className="flex items-center mb-4">
                        <div className="w-24 h-24 rounded bg-gradient-to-br flex items-center justify-center">
                            <img
                                src={SpaceEyesLogoPath}
                                alt="SpaceEyes Logo"
                                className="w-20 h-auto object-contain"
                            />
                        </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed text-sm max-w-sm">
                        Space-Eyes, Inc was founded to address the growing demand for AI-powered predictions in Defense Tech and Disaster Tech, leveraging cutting-edge technology to enhance real-time decision-making and proactive risk management in these critical areas.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="https://space-eyes.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Website"
                        >
                            <Globe className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:support@space-eyes.com"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:divide-x divide-gray-700 gap-8 md:gap-0">
                    <div className="px-0 md:px-10 border-b md:border-b-0 border-gray-700 pb-6 md:pb-0">
                        <h3 className="text-sm font-semibold text-white mb-4 tracking-wider">PRODUCTS</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FireWatch
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    SeaWatch
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Morpheus
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="px-0 md:px-10 border-b md:border-b-0 border-gray-700 py-6 md:py-0">
                        <h3 className="text-sm font-semibold text-white mb-4 tracking-wider">USEFUL LINKS</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="px-0 md:px-10 pt-6 md:pt-0">
                        <h3 className="text-sm font-semibold text-white mb-4 tracking-wider">CONTACT US</h3>

                        <address className="not-italic text-sm text-gray-400 mb-4 leading-relaxed">
                            888 Biscayne Blvd. Suite 505<br />
                            Miami, FL 33132, USA
                        </address>

                        <div className="space-y-2">
                            <div className="text-sm">
                                <span className="font-medium text-white">Phone:</span>{" "}
                                <a
                                    href="tel:+18566145441"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    +1 (856) 614-5441
                                </a>
                            </div>
                            <div className="text-sm">
                                <span className="font-medium text-white">Email:</span>{" "}
                                <a
                                    href="mailto:support@space-eyes.com"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    support@space-eyes.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
                © Space-Eyes™ Inc | STATE OF FLORIDA © {new Date().getFullYear()} | All Rights Reserved.
            </div>
        </footer>
    );
}