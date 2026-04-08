import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/entertainment", label: "Entertainment" },
  { href: "/travel", label: "Travel" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-accent/20"
          : "bg-primary border-b border-accent/10",
      )}
      data-ocid="nav-header"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group flex-shrink-0"
            onClick={handleLinkClick}
          >
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl font-bold text-accent tracking-tight">
                GSK
              </span>
              <span className="font-display text-lg font-light text-primary-foreground/90 tracking-[0.15em] uppercase">
                Management
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            data-ocid="nav-links"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase transition-all duration-200",
                  currentPath === link.href
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-accent text-primary hover:bg-accent/90 font-semibold tracking-wide uppercase text-xs px-6 py-2 rounded-none border border-accent/40"
              data-ocid="nav-cta"
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="nav-mobile-toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          className="lg:hidden bg-primary border-t border-accent/10 shadow-lg"
          data-ocid="nav-mobile-menu"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase py-2 border-b border-accent/10 transition-colors",
                  currentPath === link.href
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-accent text-primary hover:bg-accent/90 font-semibold uppercase text-xs tracking-wide rounded-none"
              data-ocid="nav-mobile-cta"
            >
              <Link to="/contact" onClick={handleLinkClick}>
                Request Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
