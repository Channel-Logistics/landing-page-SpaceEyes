import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollContainer = document.getElementById("main-scroll-container");

        if (!scrollContainer) return;
        requestAnimationFrame(() => {
            scrollContainer.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    }, [pathname]);

    return null;
}
