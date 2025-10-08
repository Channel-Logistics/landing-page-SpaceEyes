import { Menu } from "lucide-react";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <img
              src={SpaceEyesLogoPath}
              alt="SpaceEyes Logo"
              className="h-8 md:h-10 filter brightness-150 contrast-100"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex items-center 
                            bg-slate-900/40 backdrop-blur-sm 
                            border border-slate-700/60 
                            rounded-full px-6 lg:px-8 py-2">
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

            <nav className="flex items-center 
                            bg-slate-900/40 backdrop-blur-sm 
                            border border-slate-700/60 
                            rounded-full px-6 lg:px-8 py-2">
              <div className="flex items-center space-x-4 lg:space-x-8 text-white text-sm font-medium">



                <a
                  href="/contact-us"
                  className="hover:bg-white/10 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
                >
                  contact us
                </a>
              </div>
            </nav>

            {/*<Button
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/60 
                         text-white 
                         hover:bg-white/10
                         uppercase tracking-wide 
                         rounded-full   
                         px-6 py-2.5 text-sm font-semibold h-auto"
            >
              CONTACT US
            </Button>*/}
          </div>
        </div>
      </div>
    </header>
  );
}