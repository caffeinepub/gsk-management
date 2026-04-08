import PackageCard from "@/components/PackageCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTravelPackages } from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import { MapPin, Plane, Star } from "lucide-react";
import { motion } from "motion/react";

const regions = [
  {
    name: "Himalayan North",
    description:
      "Shimla, Manali, Leh-Ladakh, Rishikesh — adventure meets serenity.",
    highlights: [
      "Snow-capped peaks",
      "River rafting",
      "Monastery tours",
      "Luxury camps",
    ],
  },
  {
    name: "Coastal South",
    description:
      "Kerala backwaters, Coorg, Andamans — tropical luxury at its finest.",
    highlights: [
      "Houseboat experiences",
      "Tea estate stays",
      "Scuba diving",
      "Ayurveda retreats",
    ],
  },
  {
    name: "Heritage Rajasthan",
    description: "Jaipur, Jodhpur, Udaipur — palaces, art, and royal grandeur.",
    highlights: [
      "Palace hotel stays",
      "Desert safaris",
      "Folk performances",
      "Royal dining",
    ],
  },
  {
    name: "North East Frontier",
    description:
      "Meghalaya, Sikkim, Arunachal Pradesh — India's last unexplored frontier.",
    highlights: [
      "Living root bridges",
      "Buddhist monasteries",
      "Wildlife safaris",
      "Tribal culture",
    ],
  },
];

export default function Travel() {
  const { data: packages, isLoading } = useTravelPackages();

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, oklch(0.65 0.18 40) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Curated Journeys
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-2xl leading-tight">
              Luxury <span className="text-accent">Travel</span> Curation
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              Bespoke itineraries, private guides, and handpicked accommodations
              across India's most spectacular destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Destinations"
            title="Explore by Region"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-7 group hover:border-accent/30 transition-colors duration-200"
                data-ocid="region-card"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {region.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {region.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="All Packages"
            title="Travel Packages"
            className="mb-12"
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-72" />
              ))}
            </div>
          ) : packages && packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={String(pkg.id)} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground border border-border">
              <Plane className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Travel packages being curated. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why GSK Travel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="The Difference"
            title="Why Choose GSK Travel"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: Star,
                title: "Curated Excellence",
                desc: "Every hotel, guide, and experience vetted by our team.",
              },
              {
                icon: MapPin,
                title: "Private Access",
                desc: "Exclusive venues and experiences not available to the public.",
              },
              {
                icon: Plane,
                title: "Seamless Execution",
                desc: "One dedicated concierge handles every detail from booking to return.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Plan Your Dream Journey
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Tell us your dream destination and we'll craft the perfect
            itinerary.
          </p>
          <Button
            asChild
            className="bg-accent text-primary hover:bg-accent/90 rounded-none font-semibold uppercase text-xs tracking-widest px-8 py-3 h-auto"
            data-ocid="travel-cta"
          >
            <Link to="/contact">Plan My Trip</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
