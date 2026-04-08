import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTeamMembers } from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import { Heart, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every detail is planned, every contingency anticipated. We deliver flawlessly, every time.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "We believe extraordinary experiences come from people who genuinely love what they do.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We are more than a vendor — we are your creative and operational partner from concept to curtain call.",
  },
];

const milestones = [
  {
    year: "2012",
    event: "Founded in New Delhi with focus on corporate entertainment.",
  },
  { year: "2015", event: "Expanded into luxury travel curation partnerships." },
  {
    year: "2018",
    event: "Launched Event Management vertical with 50+ events in Year 1.",
  },
  {
    year: "2020",
    event: "Pioneered virtual event solutions during the pandemic.",
  },
  { year: "2022", event: "Expanded to South India and North East markets." },
  {
    year: "2024",
    event: "Surpassed 500 events and 120 artist partnerships milestone.",
  },
];

export default function About() {
  const { data: team, isLoading } = useTeamMembers();

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, oklch(0.65 0.18 40) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-2xl leading-tight">
              About <span className="text-accent">GSK Management</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              A decade of crafting experiences that transcend expectations — and
              a team that lives for every extraordinary moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Our Mission"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-5">
                GSK Management was founded with a singular belief: that the best
                experiences in life are those crafted with intention,
                excellence, and genuine care. We partner with India's most
                discerning clients to bring their visions to life across
                entertainment, travel, and events.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From booking legendary artists for private soirees to
                orchestrating 1,000-guest corporate galas, our team of
                specialists operates with the precision of a production house
                and the warmth of a trusted friend.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Events Delivered" },
                { value: "12+", label: "Years Active" },
                { value: "120+", label: "Artist Partners" },
                { value: "30+", label: "Destinations" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-7 text-center"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                  <val.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Company Milestones"
            centered
            className="mb-12"
          />
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 items-start pl-10 md:pl-0"
                  data-ocid="milestone-item"
                >
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 border-2 border-accent bg-background flex items-center justify-center -translate-x-1/2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="md:w-1/2 md:pr-8 md:text-right md:ml-auto bg-card border border-border p-4">
                    <p className="text-accent font-display font-bold text-sm mb-1">
                      {m.year}
                    </p>
                    <p className="text-sm text-foreground">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="The People"
            title="Our Team"
            centered
            className="mb-12"
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-48" />
              ))}
            </div>
          ) : team && team.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={String(member.id)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6"
                  data-ocid="team-member-card"
                >
                  <div className="w-16 h-16 bg-primary/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-accent/50" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Gaurav S. Kapoor",
                  role: "Founder & Managing Director",
                  bio: "With over 12 years in premium event production and talent management, Gaurav leads GSK's strategic vision across all verticals.",
                },
                {
                  name: "Sonal Mehta",
                  role: "Head of Travel Curation",
                  bio: "Sonal brings 8 years of luxury hospitality experience, curating unforgettable journeys for GSK's most discerning clients.",
                },
                {
                  name: "Rajan Nair",
                  role: "Director, Event Production",
                  bio: "A seasoned production professional with 200+ large-scale events to his name, Rajan ensures every GSK event is a benchmark of excellence.",
                },
              ].map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6"
                  data-ocid="team-member-card"
                >
                  <div className="w-16 h-16 bg-primary/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-accent/50" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            We'd love to hear about your vision and explore how we can bring it
            to life.
          </p>
          <Button
            asChild
            className="bg-accent text-primary hover:bg-accent/90 rounded-none font-semibold uppercase text-xs tracking-widest px-8 py-3 h-auto"
            data-ocid="about-cta"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
