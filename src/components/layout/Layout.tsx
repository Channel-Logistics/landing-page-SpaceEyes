import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isRootRoute = location.pathname === "/";
    
    const scrollSnapClasses = isRootRoute
        ? "snap-y snap-proximity"
        : "";

    const containerClasses = `
        h-screen overflow-y-scroll scroll-smooth bg-app-background text-app-text
        ${scrollSnapClasses}
    `.trim();
    const mainClasses = "flex-grow"; 
    return (
        <div id="main-scroll-container" className={containerClasses}>
            <Header />
            <main className={mainClasses}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
