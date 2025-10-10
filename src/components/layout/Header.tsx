import { type JSX } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const SpaceEyesLogoPath = "../public/logos/space-eyes-w1.png";

export default function Header(): JSX.Element {
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

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex items-center bg-background/20 backdrop-blur-sm rounded-full px-6 lg:px-8 py-2 shadow-sm">
              <div className="flex items-center space-x-4 lg:space-x-8 text-sm font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavLink
                      to="/defense"
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-full uppercase tracking-wide flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${
                          isActive
                            ? "bg-white text-muted font-semibold shadow-sm"
                            : "text-foreground hover:bg-muted/10"
                        }`
                      }
                    >
                      <span className="flex items-center gap-1">
                        <span>DEFENSE</span>
                        <ChevronDown className="w-4 h-4 stroke-current" />
                      </span>
                    </NavLink>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <DropdownMenuItem asChild>
                      <NavLink
                        to="/defense/seawatch"
                        className={({ isActive }) =>
                          `block w-full px-4 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? "bg-blue-100 text-blue-700 font-semibold underline decoration-2 underline-offset-2"
                              : "hover:bg-muted/10"
                          }`
                        }
                      >
                        SeaWatch
                      </NavLink>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <NavLink
                        to="/defense/morpheus"
                        className={({ isActive }) =>
                          `block w-full px-4 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? "bg-blue-100 text-blue-700 font-semibold underline decoration-2 underline-offset-2"
                              : "hover:bg-muted/10"
                          }`
                        }
                      >
                        Morpheus
                      </NavLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <NavLink
                      to="/climate"
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-full uppercase tracking-wide flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${
                          isActive ? "bg-blue-600 text-white font-semibold" : "text-foreground hover:bg-muted/10"
                        }`
                      }
                    >
                      <span className="flex items-center gap-1">
                        CLIMATE
                        <ChevronDown className="w-4 h-4 stroke-current" />
                      </span>
                    </NavLink>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <DropdownMenuItem asChild>
                      <NavLink
                        to="/climate/firewatch"
                        className={({ isActive }) =>
                          `block w-full px-4 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? "bg-blue-100 text-blue-700 font-semibold underline decoration-2 underline-offset-2"
                              : "hover:bg-muted/10"
                          }`
                        }
                      >
                        FireWatch
                      </NavLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors ${
                      isActive ? "bg-white text-black font-semibold" : "text-foreground hover:bg-muted/10"
                    }`
                  }
                >
                  COMPANY
                </NavLink>

                <NavLink
                  to="/investors"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors ${
                      isActive ? "bg-white text-black font-semibold" : "text-foreground hover:bg-muted/10"
                    }`
                  }
                >
                  INVESTORS
                </NavLink>
              </div>
            </nav>

            <nav className="flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 lg:px-8 py-2 shadow-sm">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full uppercase tracking-wide text-sm font-medium transition-colors ${
                    isActive ? "bg-white text-black font-semibold" : "hover:bg-primary/20 text-primary-foreground"
                  }`
                }
              >
                CONTACT US
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
