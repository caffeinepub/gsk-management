import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
  variant?: "default" | "dark" | "accent";
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  imageUrl,
  variant = "default",
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative overflow-hidden block",
        "card-hover transition-smooth",
        variant === "dark"
          ? "bg-primary text-primary-foreground"
          : variant === "accent"
            ? "bg-accent/10 border border-accent/30"
            : "bg-card border border-border",
        className,
      )}
      data-ocid="service-card"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>
      )}

      <div className={cn("p-6", imageUrl ? "relative" : "")}>
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center mb-4 border",
            variant === "dark"
              ? "border-accent/40 text-accent"
              : "border-accent/30 text-accent",
          )}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div className="h-px w-8 bg-accent/60 mb-4" />

        <h3
          className={cn(
            "font-display text-xl font-bold mb-2 tracking-tight",
            variant === "dark" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed mb-4",
            variant === "dark"
              ? "text-primary-foreground/70"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>

        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200",
            "text-accent group-hover:gap-3",
          )}
        >
          View Offerings
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
