import { Button } from "../../components/ui/button";
import { Menu } from "lucide-react";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-full px-3 py-2 border border-[rgba(255,255,255,0.08)]">
              <img
                src={SpaceEyesLogoPath}
                alt="SpaceEyes Logo"
                className="h-8 md:h-10 filter brightness-150 contrast-100"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav
              className="flex items-center
                      bg-[rgba(0,0,0,0.5)] backdrop-blur-md
                      border border-[rgba(255,255,255,0.08)]
                      rounded-full px-6 lg:px-8 py-2"
            >

              <div className="flex items-center space-x-4 lg:space-x-8 text-white text-sm font-medium">
                <a
                  href="#"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  DEFENSE
                </a>
                <a
                  href="#"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  CLIMATE
                </a>
                <a
                  href="#"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  COMPANY
                </a>
                <a
                  href="#"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  INVENTORS
                </a>
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <nav
                className="flex items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-full px-6 lg:px-8 py-2"
              >
                <a
                  href="/contact-us"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  CONTACT US
                </a>
              </nav>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.08)]"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
