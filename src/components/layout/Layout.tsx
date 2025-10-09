import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isInvestorRoute = location.pathname === "/investor";
    const containerClasses = isInvestorRoute
        ? "h-screen overflow-y-scroll scroll-smooth bg-app-background text-app-text"
        : "h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-app-background text-app-text";
    const mainClasses = isInvestorRoute
        ? "flex-grow"
        : "flex-grow pt-24"; 

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
