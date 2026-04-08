import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Event } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  event: Event;
  variant?: "default" | "horizontal";
}

const categoryLabels: Record<string, string> = {
  entertainment: "Entertainment",
  travel: "Travel",
  events: "Events",
};

const categoryColors: Record<string, string> = {
  entertainment: "bg-primary text-primary-foreground",
  travel: "bg-accent text-primary",
  events: "bg-primary/80 text-primary-foreground",
};

export default function EventCard({
  event,
  variant = "default",
}: EventCardProps) {
  if (variant === "horizontal") {
    return (
      <div
        className="group flex gap-4 bg-card border border-border p-4 card-hover transition-smooth"
        data-ocid="event-card-horizontal"
      >
        <div className="w-24 h-20 flex-shrink-0 overflow-hidden bg-muted">
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-primary/20" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <Badge
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wide rounded-none px-2 py-0.5 border-0 mb-1.5",
              categoryColors[String(event.category)] ??
                "bg-muted text-foreground",
            )}
          >
            {categoryLabels[String(event.category)] ?? "Event"}
          </Badge>
          <h3 className="font-display font-bold text-sm text-foreground truncate">
            {event.title}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group bg-card border border-border overflow-hidden card-hover transition-smooth"
      data-ocid="event-card"
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <Calendar className="w-10 h-10 text-accent/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        <Badge
          className={cn(
            "absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide rounded-none px-2 py-0.5 border-0",
            categoryColors[String(event.category)] ??
              "bg-muted text-foreground",
          )}
        >
          {categoryLabels[String(event.category)] ?? "Event"}
        </Badge>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {event.description}
        </p>

        <div className="space-y-1.5 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {event.location}
          </div>
        </div>

        <div className="h-px bg-border mb-4" />
        <Link
          to="/events"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-200"
          data-ocid="event-card-cta"
        >
          View Details
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
