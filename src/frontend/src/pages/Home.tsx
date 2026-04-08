import EventCard from "@/components/EventCard";
import PackageCard from "@/components/PackageCard";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useFeaturedEvents,
  useFeaturedPackages,
  useTestimonials,
} from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Music, Plane, Star } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Music,
    title: "Exclusive Entertainment",
    description:
      "Artist management, talent booking, and private concert production for VIP clientele and corporate events.",
    href: "/entertainment",
    variant: "default" as const,
  },
  {
    icon: Plane,
    title: "Luxury Travel Curation",
    description:
      "Bespoke itineraries to the world's most coveted destinations — from Himalayan retreats to coastal escapes.",
    href: "/travel",
    variant: "dark" as const,
  },
  {
    icon: Calendar,
    title: "Bespoke Event Production",
    description:
      "Award ceremonies, grand weddings, corporate galas — executed flawlessly across North, South, and North East India.",
    href: "/events",
    variant: "default" as const,
  },
];

const stats = [
  { value: "500+", label: "Events Delivered" },
  { value: "120+", label: "Artist Partnerships" },
  { value: "30+", label: "Travel Destinations" },
  { value: "12+", label: "Years of Excellence" },
];

export default function Home() {
  const { data: featuredEvents, isLoading: eventsLoading } =
    useFeaturedEvents();
  const { data: featuredPackages, isLoading: packagesLoading } =
    useFeaturedPackages();
  const { data: testimonials, isLoading: testimonialsLoading } =
    useTestimonials();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/gsk-hero-rooftop-event.dim_1600x900.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />

        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />

        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            >
              Est. 2012 · New Delhi, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Curating
              <span className="text-accent"> Extraordinary</span>
              <br />
              Experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-xl"
            >
              GSK Management is India's premier partner for seamless
              entertainment, luxury travel curation, and bespoke event
              execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-accent text-primary hover:bg-accent/90 font-semibold uppercase text-xs tracking-widest px-8 py-3 h-auto rounded-none"
                data-ocid="hero-cta-primary"
              >
                <Link to="/contact">Request Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium uppercase text-xs tracking-widest px-8 py-3 h-auto rounded-none bg-transparent"
                data-ocid="hero-cta-secondary"
              >
                <Link to="/about">
                  Our Story <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-foreground/40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/60" />
          <p className="text-[10px] tracking-widest uppercase">Scroll</p>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-accent/5 border-y border-accent/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Three Verticals. One Vision."
            subtitle="From booking A-list artists to crafting once-in-a-lifetime journeys, every service at GSK is defined by obsessive attention to detail."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Upcoming & Recent"
              title="Featured Events"
              subtitle="Exclusive productions across the entertainment spectrum."
            />
            <Link
              to="/events"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:gap-3 transition-all duration-200"
              data-ocid="events-view-all"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {eventsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-72" />
              ))}
            </div>
          ) : featuredEvents && featuredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredEvents.slice(0, 3).map((event, i) => (
                <motion.div
                  key={String(event.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Events coming soon. Check back shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Travel Experiences"
              title="Curated Destinations"
              subtitle="Handpicked luxury travel experiences tailored to the most discerning travellers."
            />
            <Link
              to="/travel"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:gap-3 transition-all duration-200"
              data-ocid="packages-view-all"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {packagesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-72" />
              ))}
            </div>
          ) : featuredPackages && featuredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPackages.slice(0, 3).map((pkg, i) => (
                <motion.div
                  key={String(pkg.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <PackageCard pkg={pkg} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <Plane className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Travel packages coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Client Words"
            title="Trusted by the Best"
            subtitle="Hear from clients who experienced the GSK difference."
            centered
            light
            className="mb-12"
          />

          {testimonialsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-48 bg-primary/50" />
              ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t, i) => (
                <motion.div
                  key={String(t.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TestimonialCard testimonial={t} variant="dark" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Star className="w-10 h-10 mx-auto mb-3 text-accent/30" />
              <p className="text-primary-foreground/50">
                Client testimonials loading…
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent/5 border-y border-accent/15">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Begin Your Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for an Extraordinary Experience?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our team is ready to craft something truly memorable. Reach out and
            let's start the conversation.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase text-xs tracking-widest px-10 py-3 h-auto rounded-none"
            data-ocid="bottom-cta"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
