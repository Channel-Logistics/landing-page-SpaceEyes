// src/components/layout/Footer.tsx
import { Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 mt-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center mb-4">
                        <div className="w-20 h-20 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                            <img alt="Space Eyes Logo" className="w-16 h-auto object-contain" />
                        </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                        Space-Eyes, Inc was founded to address the growing demand for
                        AI-powered predictions in Defense Tech and Disaster Tech, leveraging
                        cutting-edge technology to enhance real-time decision-making and
                        proactive risk management in these critical areas.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://space-eyes.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="Website"
                        >
                            <Globe className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:support@space-eyes.com"
                            className="hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="col-span-2 flex flex-row justify-between items-start divide-x divide-gray-800">
                    <div className="flex-1 px-4">
                        <h3 className="text-lg font-semibold text-white mb-4">PRODUCTS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/docs" className="hover:text-white transition-colors">FireWatch</Link></li>
                            <li><Link to="/docs" className="hover:text-white transition-colors">SeaWatch</Link></li>
                            <li><Link to="/docs" className="hover:text-white transition-colors">CarbonWatch</Link></li>
                            <li><Link to="/docs" className="hover:text-white transition-colors">FinancialWatch</Link></li>
                        </ul>
                    </div>

                    <div className="flex-1 px-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="flex-1 px-4">
                        <h3 className="text-lg font-semibold text-white mb-4">CONTACT US</h3>

                        <address className="not-italic text-sm text-gray-400 mb-4 leading-relaxed">
                            888 Biscayne Blvd. Suite 505, Miami, FL 33132, USA
                        </address>

                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <span className="font-semibold text-white">Phone:</span>{" "}
                                <a href="tel:+18566145441" className="hover:text-white transition-colors">
                                    +1 (856) 614-5441
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold text-white">Email:</span>{" "}
                                <a href="mailto:support@space-eyes.com" className="hover:text-white transition-colors">
                                    support@space-eyes.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="border-t border-gray-800 pt-6 pb-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Space-Eyes™. All rights reserved.
            </div>
        </footer>
    );
}
