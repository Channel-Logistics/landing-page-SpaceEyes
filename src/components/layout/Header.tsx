import { Button } from "../../components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-black text-2xl font-bold tracking-wide">
            Space<span className="text-blue-400">Eyes</span>
          </span>
          <span className="text-xs text-gray-600 ml-1 mt-3">™</span>
        </div>

        {/* Navigation moved to end */}
        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex items-center bg-slate-700/40 backdrop-blur-md border border-slate-700/70 rounded-full px-8 py-3">
            <div className="flex items-center space-x-8 text-black text-sm font-medium">
              <a 
                href="#" 
                className="hover:bg-slate-600/40 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
              >
                PRODUCTS
              </a>
              <a 
                href="#" 
                className="hover:bg-slate-600/40 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
              >
                COMPANY
              </a>
              <a 
                href="#" 
                className="hover:bg-slate-600/40 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
              >
                INVEST IN US
              </a>
              <a 
                href="#" 
                className="hover:bg-slate-600/40 px-3 py-2 rounded-full transition-colors duration-200 uppercase tracking-wide"
              >
                INVENTORS
              </a>
            </div>
          </nav>

          {/* Contact Button - More separated and larger */}
          <Button className="bg-slate-700/40 backdrop-blur-md border border-slate-700/70 text-black hover:bg-slate-600/40 uppercase tracking-wide px-6 py-3 text-base font-semibold">
            CONTACT US
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-slate-700/40 backdrop-blur-md border border-slate-700/70 hover:bg-slate-600/40"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}