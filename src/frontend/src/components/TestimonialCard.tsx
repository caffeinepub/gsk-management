import type { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "dark";
}

const STAR_RATINGS = [1, 2, 3, 4, 5];

export default function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  const stars = Number(testimonial.rating);

  return (
    <div
      className={
        variant === "dark"
          ? "bg-primary/80 border border-accent/20 p-6"
          : "bg-card border border-border p-6"
      }
      data-ocid="testimonial-card"
    >
      {/* Quote icon */}
      <Quote
        className={`w-8 h-8 mb-4 opacity-30 ${variant === "dark" ? "text-accent" : "text-accent"}`}
      />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {STAR_RATINGS.map((rating) => (
          <Star
            key={rating}
            className={`w-4 h-4 ${rating <= stars ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className={`text-sm leading-relaxed mb-5 font-body italic ${
          variant === "dark"
            ? "text-primary-foreground/80"
            : "text-foreground/80"
        }`}
      >
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="border-t border-accent/10 pt-4">
        <p
          className={`font-display font-bold text-sm ${
            variant === "dark" ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {testimonial.clientName}
        </p>
        <p
          className={`text-xs mt-0.5 ${
            variant === "dark"
              ? "text-primary-foreground/50"
              : "text-muted-foreground"
          }`}
        >
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}
