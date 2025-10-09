import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isRootRoute = location.pathname === "/";
    const scrollSnapClasses = isRootRoute 
        ? "snap-y snap-mandatory"
        : ""; 
    const containerClasses = `
        h-screen overflow-y-scroll scroll-smooth bg-app-background text-app-text
        ${scrollSnapClasses}
    `.trim();
    const mainClasses = isRootRoute
        ? "flex-grow pt-24"
        : "flex-grow"; 

    return (
        <div className={containerClasses}>
            <Header />
            <main className={mainClasses}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}