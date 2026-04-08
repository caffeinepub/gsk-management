import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEvents } from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import { Calendar, Mic, Music, Star, Theater, Users } from "lucide-react";
import { motion } from "motion/react";

const offerings = [
  {
    icon: Mic,
    title: "Artist Management",
    description:
      "We represent India's most celebrated performers and connect them with venues, brands, and corporate clients seeking world-class talent.",
  },
  {
    icon: Music,
    title: "Talent Booking",
    description:
      "From Bollywood headliners to independent jazz ensembles — our roster spans every genre and occasion for the perfect fit.",
  },
  {
    icon: Theater,
    title: "Concert Production",
    description:
      "End-to-end production management including stage design, sound engineering, lighting, and crowd management.",
  },
  {
    icon: Users,
    title: "Corporate Entertainment",
    description:
      "Branded entertainment experiences for product launches, annual days, and leadership summits that inspire and engage.",
  },
];

const artists = [
  { name: "Arijit Singh", genre: "Bollywood / Romantic", region: "National" },
  { name: "Diljit Dosanjh", genre: "Punjabi / Pop", region: "National" },
  { name: "Nucleya", genre: "EDM / Bass Music", region: "National" },
  { name: "Prateek Kuhad", genre: "Indie Folk", region: "National" },
  { name: "The Local Train", genre: "Hindi Rock", region: "National" },
  { name: "Raghu Dixit", genre: "World Music", region: "South India" },
];

export default function Entertainment() {
  const { data: events, isLoading } = useEvents();
  const entertainmentEvents =
    events?.filter((e) => String(e.category) === "entertainment") ?? [];

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.65 0.18 40) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Expertise
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-2xl leading-tight">
              Exclusive <span className="text-accent">Entertainment</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              Connecting India's finest talent with audiences that deserve
              nothing less than extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="What We Offer"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-7"
              >
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="h-px w-8 bg-accent/60 mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Roster */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Our Roster"
            title="Featured Artists"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {artists.map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border p-5 flex items-center gap-4 group hover:border-accent/40 transition-colors duration-200"
                data-ocid="artist-row"
              >
                <div className="w-10 h-10 bg-primary/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">
                    {artist.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {artist.genre} · {artist.region}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Events"
            title="Entertainment Events"
            className="mb-12"
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-72" />
              ))}
            </div>
          ) : entertainmentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {entertainmentEvents.map((event) => (
                <EventCard key={String(event.id)} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground border border-border">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No entertainment events at the moment. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Book Your Next Entertainment Experience
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Let us connect you with the perfect talent for your event.
          </p>
          <Button
            asChild
            className="bg-accent text-primary hover:bg-accent/90 rounded-none font-semibold uppercase text-xs tracking-widest px-8 py-3 h-auto"
            data-ocid="entertainment-cta"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
