import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const footerLinks = {
  Services: [
    { label: "Entertainment", href: "/entertainment" },
    { label: "Luxury Travel", href: "/travel" },
    { label: "Event Management", href: "/events" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
  { icon: SiX, href: "#", label: "X / Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      {/* Gold accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-baseline gap-1 mb-4">
              <span className="font-display text-2xl font-bold text-accent">
                GSK
              </span>
              <span className="font-display text-base font-light text-primary-foreground/80 tracking-[0.15em] uppercase">
                Management
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mt-3 max-w-xs">
              Curating extraordinary experiences in entertainment, luxury
              travel, and bespoke event production across India.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-accent/20 flex items-center justify-center text-primary-foreground/50 hover:text-accent hover:border-accent/60 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-accent font-display text-sm font-semibold tracking-[0.12em] uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-accent font-display text-sm font-semibold tracking-[0.12em] uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "hello@gskmanagement.in" },
                { icon: MapPin, text: "New Delhi, India" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/60">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <p>© {year} GSK Management. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
