import React from 'react';
import { Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Footer() {
    return (
        <section className="snap-start relative w-full">
            <footer className="bg-carousel-background text-carousel-text-minimum rounded-t-lg w-full">
                <hr className="h-px border-0 bg-footer-hr mx-auto max-w-7xl" />

                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <div className="w-24 h-24 rounded bg-primary flex items-center justify-center shadow-lg">
                                <img
                                    src={SpaceEyesLogoPath}
                                    alt="SpaceEyes Logo"
                                    className="w-20 h-auto object-contain"
                                />
                            </div>
                        </div>

                        <p className="text-carousel-text-minimum mb-6 leading-relaxed text-sm max-w-sm">
                            Space-Eyes, Inc was founded to address the growing demand for AI-powered predictions in Defense Tech and Disaster Tech, leveraging cutting-edge technology to enhance real-time decision-making and proactive risk management in these critical areas.
                        </p>

                        <div className="flex gap-3">
                            <a
                                href="https://space-eyes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors"
                                aria-label="Website"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:support@space-eyes.com"
                                className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:divide-x divide-carousel-border gap-8 md:gap-0">
                        <div className="px-0 md:px-10 border-b md:border-b-0 border-carousel-border pb-6 md:pb-0">
                            <h3 className="text-sm font-semibold text-carousel-text-primary mb-4 tracking-wider">PRODUCTS</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/docs" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        FireWatch
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/docs" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        SeaWatch
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/docs" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        Morpheus
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="px-0 md:px-10 border-b md:border-b-0 border-carousel-border py-6 md:py-0">
                            <h3 className="text-sm font-semibold text-carousel-text-primary mb-4 tracking-wider">USEFUL LINKS</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/about-us" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-and-conditions" className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors text-sm">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="px-0 md:px-10 pt-6 md:pt-0">
                            <h3 className="text-sm font-semibold text-carousel-text-primary mb-4 tracking-wider">CONTACT US</h3>

                            <address className="not-italic text-sm text-carousel-text-minimum mb-4 leading-relaxed">
                                888 Biscayne Blvd. Suite 505<br />
                                Miami, FL 33132, USA
                            </address>

                            <div className="space-y-2">
                                <div className="text-sm">
                                    <span className="font-medium text-carousel-text-primary">Phone:</span>{" "}
                                    <a
                                        href="tel:+18566145441"
                                        className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors"
                                    >
                                        +1 (856) 614-5441
                                    </a>
                                </div>
                                <div className="text-sm">
                                    <span className="font-medium text-carousel-text-primary">Email:</span>{" "}
                                    <a
                                        href="mailto:support@space-eyes.com"
                                        className="text-carousel-text-minimum hover:text-carousel-text-primary transition-colors"
                                    >
                                        support@space-eyes.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px border-0 bg-footer-hr mx-auto max-w-7xl"/>

                <div className="py-4 text-center text-xs text-carousel-text-minimum opacity-80">
                    © Space-Eyes™ Inc | STATE OF FLORIDA © {new Date().getFullYear()} | All Rights Reserved.
                </div>
            </footer>
        </section>
    );
}