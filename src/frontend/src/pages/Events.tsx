import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEvents } from "@/hooks/useBackend";
import { Link } from "@tanstack/react-router";
import { Calendar, Camera, MapPin } from "lucide-react";
import { motion } from "motion/react";

const eventTypes = [
  {
    icon: Calendar,
    title: "Corporate Galas",
    desc: "Award ceremonies, annual days, and leadership summits with meticulous production.",
  },
  {
    icon: Camera,
    title: "Grand Weddings",
    desc: "Destination weddings and intimate celebrations crafted with personal touches.",
  },
  {
    icon: MapPin,
    title: "Conferences",
    desc: "Multi-day conferences with state-of-the-art AV, delegate management, and hospitality.",
  },
  {
    icon: Calendar,
    title: "Hotel Events",
    desc: "Branded hotel events and social evenings curated for premium hospitality partners.",
  },
];

const regionalPrograms = {
  north: [
    {
      title: "Taj Palace Annual Gala",
      venue: "Taj Palace Hotel, New Delhi",
      caption:
        "An evening of classical performances and contemporary art in the heart of the capital — attended by luminaries of business and culture.",
      performers:
        "Ustad Amjad Ali Khan Ensemble — Grammy-nominated sarod maestro and his disciples performing rare ragas in an intimate concert format.",
    },
    {
      title: "Rajasthan Heritage Night",
      venue: "Umaid Bhawan, Jodhpur",
      caption:
        "A spectacular folk and classical fusion under the desert stars at one of India's most iconic palace hotels, drawing 400 guests.",
      performers:
        "Rajasthani Folk Collective — Multi-generational family of Manganiyar musicians preserving 800-year-old desert ballad traditions.",
    },
    {
      title: "Punjab Cultural Summit",
      venue: "Hyatt Regency, Chandigarh",
      caption:
        "Celebrating Punjab's rich artistic heritage through an immersive evening of dance, music, and culinary artistry.",
      performers:
        "Bhangra Academy & Giddha Troupe — Award-winning ensemble of 40 performers bringing the full energy of harvest-season celebration.",
    },
    {
      title: "Lucknow Nawabi Evening",
      venue: "Taj Hotel Gomti Nagar, Lucknow",
      caption:
        "A refined evening of Kathak and thumri in the city of the nawabs, recreating the courtly elegance of 18th-century Awadh.",
      performers:
        "Pandit Birju Maharaj Foundation Artists — Classical Kathak performers trained in the Lucknow gharana, carrying a 200-year lineage.",
    },
    {
      title: "Himachal Peaks Retreat Gala",
      venue: "Wildflower Hall, Shimla",
      caption:
        "A black-tie gala set against the Himalayan snowline, where world-class acoustic performances meet colonial grandeur.",
      performers:
        "Shillong Chamber Choir — India's premiere English-language choir, celebrated internationally for their powerful multi-part harmonies.",
    },
    {
      title: "Uttarakhand Devbhoomi Festival",
      venue: "Ananda in the Himalayas, Rishikesh",
      caption:
        "A spiritual and cultural experience blending Vedic chanting, folk dance, and yoga under the stars on the Ganges ghats.",
      performers:
        "Garhwali Cultural Academy — A company of 30 performers specialising in the Jagar ritual music and Choliya warrior dance traditions.",
    },
    {
      title: "Agra Moonlight Soiree",
      venue: "ITC Mughal, Agra",
      caption:
        "Dinner and live performance in the shadow of the Taj Mahal — an exclusive evening for high-profile corporate guests and dignitaries.",
      performers:
        "Malini Awasthi & Ensemble — National Award-winning folk vocalist renowned for her evocative renditions of Braj and Awadhi folk songs.",
    },
    {
      title: "Jaipur Literary Arts Ball",
      venue: "Rambagh Palace, Jaipur",
      caption:
        "An opulent evening of poetry, ghazal, and Rajput classical music held annually at the 'Jewel of Jaipur.'",
      performers:
        "Ustad Rashid Khan Tribute Ensemble — Disciples of the Rampur-Sahaswan gharana performing khayal compositions and romantic ghazals.",
    },
  ],
  south: [
    {
      title: "Leela Kovalam Music Festival",
      venue: "The Leela Kovalam, Kerala",
      caption:
        "Carnatic classics meet contemporary jazz on the serene shores of Kerala, drawing artists and patrons from across the globe.",
      performers:
        "TM Krishna & Jazz Collective — Vocalist TM Krishna is a Magsaysay Award winner who redefines Carnatic music through radical inclusivity.",
    },
    {
      title: "Mysuru Palace Soiree",
      venue: "Lalitha Mahal Palace, Mysuru",
      caption:
        "A royal evening of Bharatanatyam and chamber music in the grandeur of a century-old heritage palace, attended by 300 guests.",
      performers:
        "Nrithyagram Dance Ensemble — Internationally acclaimed resident dance community near Bengaluru, reviving classical Odissi and Bharatanatyam.",
    },
    {
      title: "Chennai Corporate Summit",
      venue: "ITC Grand Chola, Chennai",
      caption:
        "A premium corporate evening blending south Indian hospitality with world-class entertainment for a 500-strong executive audience.",
      performers:
        "A.R. Rahman Foundation Artists — Emerging musicians mentored by Oscar-winner A.R. Rahman, performing original compositions and film classics.",
    },
    {
      title: "Hyderabad Nizam's Banquet",
      venue: "Taj Falaknuma Palace, Hyderabad",
      caption:
        "Dum biryani and ghazal in a palace that once hosted the world's wealthiest man — an evening of extraordinary Nizami opulence.",
      performers:
        "Ghulam Ali School of Ghazal — Students of the legendary Ghulam Ali performing timeless Urdu ghazals with sitar and tabla accompaniment.",
    },
    {
      title: "Bengaluru Jazz & Fusion Gala",
      venue: "The Oberoi Bengaluru",
      caption:
        "India's tech capital hosts an evening where Carnatic scales and jazz improvisation collide in thrilling, unrepeatable ways.",
      performers:
        "Prasanna Guitar Ensemble — Acclaimed guitarist Prasanna blends Carnatic South Indian music with jazz and American blues traditions.",
    },
    {
      title: "Kerala Backwaters Cultural Cruise",
      venue: "Kumarakom Lake Resort, Kerala",
      caption:
        "A floating cultural soiree on the famous Vembanad Lake, with Mohiniyattam and Kathakali performed on traditional kettuvallam houseboats.",
      performers:
        "Kerala Kalamandalam Artists — Government-recognised classical performing arts institution with 90 years of training in traditional Kerala dance forms.",
    },
    {
      title: "Visakhapatnam Sunrise Concert",
      venue: "Novotel VUDA City Centre, Vizag",
      caption:
        "A dawn-to-dusk music marathon on the Bay of Bengal, celebrating Andhra's kuchipudi tradition and emerging independent music scene.",
      performers:
        "Swapnasundari Kuchipudi Ensemble — Padma Shri recipient and her students performing rare solo Kuchipudi repertoire with live orchestra.",
    },
  ],
  northeast: [
    {
      title: "Meghalaya Living Roots Festival",
      venue: "Heritage Resort, Shillong",
      caption:
        "A celebration of North East India's tribal music and dance in a luxury mountain setting, spotlighting Khasi culture on a global stage.",
      performers:
        "Khasi Folk Artists Collective — Multi-generational ensemble preserving the ancient nongkrem dance and the haunting indigenous guitar tradition.",
    },
    {
      title: "Sikkim Monastery Evening",
      venue: "Denzong Regency, Gangtok",
      caption:
        "Sacred Buddhist music and cham dance in the shadow of Kanchenjunga — a profoundly moving spiritual and cultural event.",
      performers:
        "Rumtek Monastery Performers — Trained monks performing cham mask dances and traditional Tibetan-Buddhist ritual music with authentic instruments.",
    },
    {
      title: "Assam Tea Estate Soiree",
      venue: "Bihu Heritage Lodge, Jorhat",
      caption:
        "Traditional Bihu performances amid Assam's legendary tea gardens — an intimate evening of culture, cuisine, and outdoor theatre.",
      performers:
        "Assam Bihu Cultural Troupe — A 60-member ensemble including dhol drummers, flautists, and dancers performing harvest-season Bihu in full regalia.",
    },
    {
      title: "Manipur Classical Dance Gala",
      venue: "Classic Grande Hotel, Imphal",
      caption:
        "An exclusive evening showcasing Manipuri Raas Leela and Thang-Ta martial arts — a form that inspired many global dance styles.",
      performers:
        "Guru Bipin Singh Memorial Foundation — Classical Manipuri dance company founded in the lineage of Padma Vibhushan Guru Bipin Singh.",
    },
    {
      title: "Nagaland Horn Festival Showcase",
      venue: "Hotel Japfü, Kohima",
      caption:
        "A curated evening from the world-famous Hornbill Festival, bringing the vibrant warrior culture of 17 Naga tribes into a premium setting.",
      performers:
        "Tetseo Sisters & Tribal Orchestra — Four sisters and their extended ensemble performing folk compositions from the Chakhesang Naga tradition.",
    },
    {
      title: "Arunachal Mountain Dawn Event",
      venue: "Pemako Resort, Tawang",
      caption:
        "High above the clouds, an intimate evening of Monpa folk music and Buddhist sacred chanting in one of India's most remote luxury retreats.",
      performers:
        "Monpa Cultural Heritage Group — Performers from the Tawang Monastery tradition, known for their ancient Aji Lhamo theatrical folk opera.",
    },
    {
      title: "Mizoram Cheraw Dance Evening",
      venue: "Aizawl Premier Hotel, Aizawl",
      caption:
        "The rhythmic precision of Cheraw bamboo dance and the sweet harmonies of Mizo choir music in a vibrant, celebratory cultural showcase.",
      performers:
        "Young Mizo Association Cultural Wing — Championship-level performers famed for their flawless Cheraw synchronisation and rich choral arrangements.",
    },
  ],
};

export default function Events() {
  const { data: events, isLoading } = useEvents();
  const eventsList =
    events?.filter((e) => String(e.category) === "events") ?? [];

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(0.65 0.18 40) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Event Production
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-2xl leading-tight">
              Bespoke <span className="text-accent">Event</span> Management
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              From intimate hotel soirees to grand corporate galas — every event
              we touch becomes a defining memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="What We Produce"
            title="Event Specializations"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 text-center group hover:border-accent/30 transition-colors duration-200"
                data-ocid="event-type-card"
              >
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {type.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {type.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Programs */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Hotel Events & Programs"
            title="Regional Event Showcases"
            subtitle="Hotel events and cultural programs organized across North India, South India, and the North East."
            centered
            className="mb-12"
          />

          <Tabs defaultValue="north" data-ocid="regional-tabs">
            <TabsList className="bg-card border border-border rounded-none h-auto p-0 mb-8 w-full md:w-auto flex">
              <TabsTrigger
                value="north"
                className="rounded-none px-6 py-3 text-xs font-semibold uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                North India
              </TabsTrigger>
              <TabsTrigger
                value="south"
                className="rounded-none px-6 py-3 text-xs font-semibold uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                South India
              </TabsTrigger>
              <TabsTrigger
                value="northeast"
                className="rounded-none px-6 py-3 text-xs font-semibold uppercase tracking-wider data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                North East
              </TabsTrigger>
            </TabsList>

            {(["north", "south", "northeast"] as const).map((region) => (
              <TabsContent key={region} value={region}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {regionalPrograms[region].map((program, i) => (
                    <motion.div
                      key={program.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card border border-border overflow-hidden group"
                      data-ocid="regional-program-card"
                    >
                      <div className="h-40 bg-primary/10 flex items-center justify-center border-b border-border/50">
                        <Camera className="w-10 h-10 text-accent/30" />
                      </div>
                      <div className="p-5">
                        <p className="text-accent text-[10px] font-semibold tracking-widest uppercase mb-1.5">
                          {program.venue}
                        </p>
                        <h3 className="font-display font-bold text-foreground text-base mb-2">
                          {program.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {program.caption}
                        </p>
                        <div className="border-t border-border pt-3">
                          <p className="text-xs text-muted-foreground">
                            <span className="text-accent font-medium">
                              Performers:{" "}
                            </span>
                            {program.performers}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Events from Backend */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Event Portfolio"
            className="mb-12"
          />
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-72" />
              ))}
            </div>
          ) : eventsList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsList.map((event) => (
                <EventCard key={String(event.id)} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground border border-border">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Event portfolio being updated. Check back shortly.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Let's Create Something Remarkable
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            Share your vision and we'll bring it to life — flawlessly.
          </p>
          <Button
            asChild
            className="bg-accent text-primary hover:bg-accent/90 rounded-none font-semibold uppercase text-xs tracking-widest px-8 py-3 h-auto"
            data-ocid="events-cta"
          >
            <Link to="/contact">Start Planning</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
