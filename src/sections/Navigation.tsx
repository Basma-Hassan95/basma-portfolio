import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 h-[70px] flex items-center z-[100] opacity-0"
      style={{
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #262626",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-[18px] font-bold text-[#f5f5f5] tracking-[0.1em]"
        >
          <span className="font-mono">&lt;Basma.<span className="text-[#2dd4bf]">H</span> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-[14px] font-medium transition-colors duration-300"
                style={{
                  color: isActive ? "#2dd4bf" : "#a3a3a3",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2dd4bf]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[2px] bg-[#f5f5f5] transition-transform duration-300"
            style={{
              transform: mobileOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-[#f5f5f5] transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] bg-[#f5f5f5] transition-transform duration-300"
            style={{
              transform: mobileOpen ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-[70px] left-0 right-0 md:hidden py-6 px-6 flex flex-col gap-4"
          style={{
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #262626",
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[16px] font-medium transition-colors duration-300"
                style={{ color: isActive ? "#2dd4bf" : "#a3a3a3" }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
