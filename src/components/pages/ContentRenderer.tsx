import { useLocation } from "react-router-dom";
import ContactUs from "./usefulLinks/ContactUs";
import { useEffect } from "react";

const route: Record<string, React.ComponentType> = {
  "/contact-us": ContactUs
};

export default function ContentRenderer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const Component = route[currentPath];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPath]);

  return <Component />;
}