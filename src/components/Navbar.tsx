import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Linkedin } from "lucide-react";
import { SiX, SiInstagram } from "react-icons/si";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
const wastureLogoPath = "/images/wasture-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Activities", href: "#activities" },
    { name: "Impact", href: "#impact" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm dark:bg-card/95"
          : "bg-white dark:bg-card"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center"
              data-testid="btn-scroll-top"
            >
              <img
                src={wastureLogoPath}
                alt="Wasture Solutions"
                className="h-14 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-primary hover:text-[#EB5C00] transition-colors text-sm font-semibold"
                  data-testid={`nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l pl-4 border-border">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-primary hover:text-[#EB5C00] transition-colors"
              >
                <SiX size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary hover:text-[#EB5C00] transition-colors"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-primary hover:text-[#EB5C00] transition-colors"
              >
                <Linkedin size={18} />
              </a>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 text-primary hover:text-[#EB5C00]"
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 text-primary"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary"
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-card border-b border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-semibold text-primary hover:text-[#EB5C00] hover:bg-muted transition-colors"
                data-testid={`mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center space-x-6 px-3 pt-4 border-t border-border mt-2">
              <a href="#" className="text-primary hover:text-[#EB5C00]">
                <SiX size={20} />
              </a>
              <a href="#" className="text-primary hover:text-[#EB5C00]">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-[#EB5C00]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
