import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface LocationNavigationProps {
  currentLocation: string;
}

const locations = ["cebu", "bohol"];

const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "Companies", href: "#companies" },
];

export function LocationNavigation({ currentLocation }: LocationNavigationProps) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("gallery");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLocationSwitch = (locationId: string) => {
    navigate(`/${locationId}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        isScrolled
          ? "bg-card/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Home Button */}
          <button
            onClick={() => navigate("/")}
            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Back to home"
          >
            <Home className="w-5 h-5" />
          </button>

          {/* Location Switcher */}
          <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationSwitch(loc)}
                className={`
                  px-4 py-1.5 rounded-full text-sm font-medium capitalize
                  transition-all duration-300
                  ${
                    currentLocation === loc
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Section Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile: EDUC TOUR label */}
          <span className="md:hidden text-xs font-medium text-muted-foreground tracking-wider">
            EDUC TOUR 2025
          </span>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
