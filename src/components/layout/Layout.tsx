import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-app-background text-app-text">
            <Header />
            <main className="flex-grow pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
