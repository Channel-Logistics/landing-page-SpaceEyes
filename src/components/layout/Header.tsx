import { useState, type JSX } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import GlassContainer from "@/components/layout/GlassContainer";
import Sidebar from "./Sidebar"

const SpaceEyesLogoPath = "/logos/space-eyes-w1.webp";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDefenseActive = location.pathname.startsWith("/defense");
  const isClimateActive = location.pathname.startsWith("/climate");

  const baseButton = "px-3 py-2 rounded-full tracking-wide text-sm font-medium transition-colors focus:outline-none flex items-center gap-1";
  const baseButtonContact = "px-5 py-4 rounded-full tracking-wide text-sm font-medium transition-colors focus:outline-none flex items-center";
  const inactiveButton = "text-white/80 hover:text-white hover:bg-white/10";
  const activeButton = "bg-white text-black font-semibold shadow-sm";
  const activeButtonContact = "bg-white text-black font-semibold";
  const baseNavLink = "block w-full px-4 py-2 text-sm rounded-md transition-colors";
  const inactiveNavLink = "text-white/80 hover:text-white hover:bg-white/10";
  const activeNavLink = "bg-white text-black font-semibold";

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center">
            <img
              src={SpaceEyesLogoPath}
              alt="SpaceEyes Logo"
              className="h-8 md:h-10 filter brightness-125 contrast-100 cursor-pointer"
            />
          </Link>

          <button
            className="md:hidden p-2 text-white hover:text-white/80 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <GlassContainer className="flex items-center rounded-full px-6 lg:px-8 py-2 shadow-sm bg-white/10">
              <nav className="flex items-center gap-x-6 lg:gap-x-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`${baseButton} ${isDefenseActive ? activeButton : inactiveButton
                        }`}
                    >
                      <span>DEFENSE</span>
                      <ChevronDown className="w-4 h-4 stroke-current" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <NavLink
                      to="/defense/seawatch"
                      className={({ isActive }) =>
                        `${baseNavLink} ${isActive ? activeNavLink : inactiveNavLink
                        }`
                      }
                    >
                      SeaWatch
                    </NavLink>
                    <NavLink
                      to="/defense/morpheus"
                      className={({ isActive }) =>
                        `${baseNavLink} ${isActive ? activeNavLink : inactiveNavLink
                        }`
                      }
                    >
                      Morpheus
                    </NavLink>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`${baseButton} ${isClimateActive ? activeButton : inactiveButton
                        }`}
                    >
                      <span>CLIMATE</span>
                      <ChevronDown className="w-4 h-4 stroke-current" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="mt-2 bg-surface backdrop-blur-md border border-border rounded-xl text-foreground w-44 shadow-lg"
                  >
                    <NavLink
                      to="/climate/firewatch"
                      className={({ isActive }) =>
                        `${baseNavLink} ${isActive ? activeNavLink : inactiveNavLink
                        }`
                      }
                    >
                      FireWatch
                    </NavLink>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    `${baseButton} ${isActive ? activeButton : inactiveButton}`
                  }
                >
                  COMPANY
                </NavLink>

                <NavLink
                  to="/investors"
                  className={({ isActive }) =>
                    `${baseButton} ${isActive ? activeButton : inactiveButton}`
                  }
                >
                  INVESTORS
                </NavLink>
              </nav>
            </GlassContainer>

            <GlassContainer className="flex items-center rounded-full bg-white/10">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `${baseButtonContact} ${isActive ? activeButtonContact : inactiveButton}`
                }
              >
                CONTACT US
              </NavLink>
            </GlassContainer>
          </div>
        </div>
      </div>

      <Sidebar
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        baseButton={baseButton}
        activeButton={activeButton}
        inactiveButton={inactiveButton}
      />
    </header>
  );
}