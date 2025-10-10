import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={SpaceEyesLogoPath}
                alt="SpaceEyes Logo"
                className="h-8 md:h-10 filter brightness-125 contrast-100 cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-foreground">
            <nav className="flex items-center bg-background/20 backdrop-blur-sm  rounded-full px-6 lg:px-8 py-2 shadow-sm">
              <div className="flex items-center space-x-4 lg:space-x-8 text-sm font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="hover:bg-muted/10 px-3 py-2 rounded-full uppercase tracking-wide flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none"
                  >
                    DEFENSE
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        to="/defense/sea-watch"
                        className="block w-full px-4 py-2 text-sm hover:bg-muted/10 rounded-md transition-colors"
                      >
                        SeaWatch
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/defense/morpheus"
                        className="block w-full px-4 py-2 text-sm hover:bg-muted/10 rounded-md transition-colors"
                      >
                        Morpheus
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="hover:bg-muted/10 px-3 py-2 rounded-full uppercase tracking-wide flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none"
                  >
                    CLIMATE
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        to="/climate/fire-watch"
                        className="block w-full px-4 py-2 text-sm hover:bg-muted/10 rounded-md transition-colors"
                      >
                        FireWatch
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  to="/company"
                  className="hover:bg-muted/10 px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors"
                >
                  COMPANY
                </Link>

                <Link
                  to="/investors"
                  className="hover:bg-muted/10 px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors"
                >
                  INVESTORS
                </Link>
              </div>
            </nav>

            <nav className="flex items-center bg-primary/10 backdrop-blur-sm  rounded-full px-6 lg:px-8 py-2 shadow-sm">
              <Link
                to="/contact-us"
                className="hover:bg-primary/20 px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors text-primary-foreground"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
