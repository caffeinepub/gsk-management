import { Badge } from "@/components/ui/badge";
import type { TravelPackage } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, DollarSign, MapPin } from "lucide-react";

interface PackageCardProps {
  pkg: TravelPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className="group bg-card border border-border overflow-hidden card-hover transition-smooth"
      data-ocid="package-card"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted">
        {pkg.imageUrl ? (
          <img
            src={pkg.imageUrl}
            alt={pkg.destination}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <MapPin className="w-10 h-10 text-accent/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        {pkg.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-primary text-xs font-semibold uppercase tracking-wide rounded-none px-2 py-0.5 border-0">
            Featured
          </Badge>
        )}
        <div className="absolute bottom-3 left-4">
          <h3 className="font-display text-xl font-bold text-primary-foreground leading-tight">
            {pkg.destination}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-accent" />
            {pkg.priceRange}
          </span>
        </div>

        {pkg.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {pkg.highlights.slice(0, 3).map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="h-px bg-border mb-4" />

        <Link
          to="/travel"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-200"
          data-ocid="package-card-cta"
        >
          Explore Destination
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
