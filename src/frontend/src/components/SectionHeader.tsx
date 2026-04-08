import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
            light ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          centered ? "justify-center" : "justify-start",
        )}
      >
        <div className="h-px w-8 bg-accent opacity-60" />
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl font-bold leading-tight",
            light ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
        <div className="h-px w-8 bg-accent opacity-60" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
