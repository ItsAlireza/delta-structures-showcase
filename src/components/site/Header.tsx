import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <Logo light={!solid} />
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className={`text-sm font-medium tracking-wide transition-colors ${
                solid ? "text-foreground/80 hover:text-accent" : "text-primary-foreground/90 hover:text-accent"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="/#contact">Request Quote</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
