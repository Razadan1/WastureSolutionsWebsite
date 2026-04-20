import { Linkedin } from "lucide-react";
import { SiX, SiInstagram } from "react-icons/si";
const wastureLogoPath = "/images/wasture-logo.png";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#153D60" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block mb-4"
            >
              <img
                src={wastureLogoPath}
                alt="Wasture Solutions"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </button>
            <p className="text-white/75 max-w-sm mt-4 text-sm leading-relaxed">
              Transforming waste into sustainable value through smart collection, recycling initiatives, and community engagement across Africa.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#EB5C00] border border-white/20 hover:border-[#EB5C00] transition-all"
              >
                <SiX size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#EB5C00] border border-white/20 hover:border-[#EB5C00] transition-all"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#EB5C00] border border-white/20 hover:border-[#EB5C00] transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", id: "#about" },
                { label: "Services", id: "#services" },
                { label: "Projects", id: "#activities" },
                { label: "Impact", id: "#impact" },
                { label: "Gallery", id: "#gallery" },
                { label: "Contact", id: "#contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/70 hover:text-[#EB5C00] transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@wasturesolutions.com"
                  className="hover:text-[#EB5C00] transition-colors"
                >
                  info@wasturesolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348012345678"
                  className="hover:text-[#EB5C00] transition-colors"
                >
                  +234 801 234 5678
                </a>
              </li>
              <li className="text-white/70">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Wasture Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-[#EB5C00] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#EB5C00] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
