import List "mo:core/List";
import EventTypes "../types/events";
import TravelTypes "../types/travel";
import PeopleTypes "../types/people";
import CommonTypes "../types/common";
import EventsLib "../lib/events";
import TravelLib "../lib/travel";
import PeopleLib "../lib/people";

mixin (
  events : List.List<EventTypes.Event>,
  nextEventId : CommonTypes.Counter,
  packages : List.List<TravelTypes.TravelPackage>,
  nextPackageId : CommonTypes.Counter,
  teamMembers : List.List<PeopleTypes.TeamMember>,
  nextMemberId : CommonTypes.Counter,
  testimonials : List.List<PeopleTypes.Testimonial>,
  nextTestimonialId : CommonTypes.Counter
) {
  public shared func seedSampleData() : async () {
    // Only seed if no data yet
    if (events.size() > 0) { return };

    // --- Events (8 total: mix of entertainment, travel, events category) ---
    ignore EventsLib.add(events, nextEventId.value, "Neon Nights Music Festival", "An electrifying outdoor music festival featuring top international DJs and live bands across three stages. Expect stunning light shows, immersive sound experiences, and unforgettable performances under the stars.", "2026-07-18", "Sandton Convention Centre, Johannesburg", #entertainment, "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", true);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Cape Winelands Gala Evening", "An exclusive evening celebrating South Africa's finest wines and cuisine. Hosted amid the stunning vineyards of Stellenbosch, guests enjoy curated wine pairings, live jazz, and a black-tie dinner.", "2026-05-24", "Boschendal Wine Estate, Stellenbosch", #entertainment, "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80", true);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Safari & Sundowner Retreat", "A luxury safari experience combining game drives in the Kruger National Park with curated sundowner cocktail evenings, bush dinners, and bespoke wildlife photography sessions.", "2026-08-10", "Sabi Sands Game Reserve, Mpumalanga", #travel, "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", true);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Durban Corporate Leadership Summit", "A premier two-day gathering of C-suite executives and industry leaders. Featuring keynote speeches, panel discussions on innovation, and exclusive networking sessions with decision-makers across Africa.", "2026-09-03", "Durban ICC, Durban", #events, "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80", false);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Heritage Arts & Culture Showcase", "A vibrant celebration of African art, dance, and music heritage. Featuring acclaimed artists, live performances, gallery exhibitions, and interactive cultural workshops for all ages.", "2026-06-07", "Johannesburg Art Gallery, Johannesburg", #entertainment, "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80", false);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Indian Ocean Island Hopper", "An immersive island-hopping travel experience across Mauritius, Seychelles, and Zanzibar. Tailored for groups seeking pristine beaches, world-class diving, and luxury resort stays.", "2026-10-15", "Mauritius, Seychelles & Zanzibar", #travel, "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&q=80", true);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Grand Royal Wedding Showcase", "An exclusive exhibition of South Africa's most prestigious wedding venues, designers, and planners. Featuring live décor demonstrations, bridal fashion shows, and one-on-one consultations.", "2026-04-19", "The Oyster Box Hotel, Umhlanga", #events, "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", false);
    nextEventId.value += 1;

    ignore EventsLib.add(events, nextEventId.value, "Afrobeats & Soul Concert Series", "A three-night concert series celebrating the best of Afrobeats, Amapiano, and neo-soul with headline acts from across the continent and diaspora. An unmissable night of rhythm and culture.", "2026-11-21", "FNB Stadium, Soweto", #entertainment, "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80", true);
    nextEventId.value += 1;

    // --- Travel Packages (6 total) ---
    ignore TravelLib.add(packages, nextPackageId.value, "Victoria Falls & Zambezi Explorer", "7 Nights / 8 Days", "$2,800 – $4,500 per person", ["White-water rafting on the Zambezi", "Helicopter sunset flight over the Falls", "Luxury tented camp accommodation", "Guided bush walks & game viewing", "Sunset cruise with fine dining"], "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80", true);
    nextPackageId.value += 1;

    ignore TravelLib.add(packages, nextPackageId.value, "Morocco Imperial Cities Journey", "10 Nights / 11 Days", "$3,200 – $5,000 per person", ["Private guided medina tours in Marrakech & Fes", "Sahara Desert camel trek & overnight camp", "Atlas Mountains day excursion", "Traditional riad accommodation", "Cooking class & hammam experience"], "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", true);
    nextPackageId.value += 1;

    ignore TravelLib.add(packages, nextPackageId.value, "Garden Route Coastal Drive", "5 Nights / 6 Days", "$1,500 – $2,200 per person", ["Tsitsikamma National Park excursion", "Whale watching at Hermanus", "Ostrich farm tour in Oudtshoorn", "Knysna Lagoon sunset cruise", "Luxury boutique lodge stays"], "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", false);
    nextPackageId.value += 1;

    ignore TravelLib.add(packages, nextPackageId.value, "Egyptian Pyramids & Nile Cruise", "8 Nights / 9 Days", "$2,500 – $4,000 per person", ["Guided tour of Giza Pyramids & Sphinx", "5-night luxury Nile cruise from Aswan to Luxor", "Valley of the Kings & Karnak Temple visit", "Cairo Khan el-Khalili bazaar tour", "Sound & light show at the Pyramids"], "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80", true);
    nextPackageId.value += 1;

    ignore TravelLib.add(packages, nextPackageId.value, "Serengeti Great Migration Safari", "6 Nights / 7 Days", "$4,000 – $7,500 per person", ["Witness the Great Migration up close", "Hot air balloon safari at sunrise", "Ngorongoro Crater game drive", "Expert naturalist guide throughout", "Luxury tented lodge with private plunge pool"], "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80", true);
    nextPackageId.value += 1;

    ignore TravelLib.add(packages, nextPackageId.value, "Istanbul & Turkish Riviera Escape", "9 Nights / 10 Days", "$2,200 – $3,800 per person", ["Hagia Sophia & Topkapi Palace guided tours", "Bosphorus dinner cruise", "Hot air balloon over Cappadocia", "Turquoise Coast gulet yacht charter", "Turkish bath & hammam experience"], "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80", false);
    nextPackageId.value += 1;

    // --- Team Members (4 total) ---
    ignore PeopleLib.addTeamMember(teamMembers, nextMemberId.value, "Sipho Khumalo", "Founder & Chief Executive Officer", "With over 20 years of experience in entertainment and events management, Sipho founded GSK Management with a vision to position Africa's talent and cultural experiences on the global stage. His leadership has driven partnerships with Fortune 500 companies and celebrated artists worldwide.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80");
    nextMemberId.value += 1;

    ignore PeopleLib.addTeamMember(teamMembers, nextMemberId.value, "Amara Okonkwo", "Director of Entertainment & Talent", "Amara brings 15 years of talent booking and artist management experience from Lagos to London. She has curated headline acts for festivals across Africa and Europe, with a deep network spanning music, film, and live performance.", "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=800&q=80");
    nextMemberId.value += 1;

    ignore PeopleLib.addTeamMember(teamMembers, nextMemberId.value, "Tariq Hassan", "Head of Luxury Travel", "A seasoned travel professional who has designed bespoke journeys for high-net-worth clients across 40 countries. Tariq specialises in crafting personalised safari experiences, cultural immersions, and private island escapes that go beyond the ordinary.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80");
    nextMemberId.value += 1;

    ignore PeopleLib.addTeamMember(teamMembers, nextMemberId.value, "Naledi Dlamini", "Senior Event Strategist", "Naledi has orchestrated over 300 corporate events, gala dinners, and product launches for leading brands. Her meticulous attention to detail, creative vision, and ability to manage complex logistics have earned her a reputation as one of Southern Africa's top event professionals.", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80");
    nextMemberId.value += 1;

    // --- Testimonials (6 total) ---
    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "Blessing Eze", "TechAfrica Summit", "GSK Management transformed our annual summit into a world-class experience. The attention to every detail, from venue dressing to guest logistics, was simply extraordinary. Our delegates are still talking about it months later.", 5);
    nextTestimonialId.value += 1;

    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "Claudia Ferreira", "Ferreira Luxury Group", "We entrusted GSK Management with our executive retreat in the Seychelles and they delivered beyond our highest expectations. The curated experiences, seamless transfers, and stunning accommodation choices made it truly unforgettable.", 5);
    nextTestimonialId.value += 1;

    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "David Mensah", "Pan-African Media Corp", "The Afrobeats concert series they produced for us was a phenomenal success — sold out three nights in a row! GSK's network of artists, production teams, and venues is unrivalled. A genuinely world-class team.", 5);
    nextTestimonialId.value += 1;

    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "Priya Naidoo", "Naidoo & Associates", "Our corporate gala dinner was handled flawlessly by the GSK team. The entertainment selection, catering coordination, and décor exceeded all expectations. We received overwhelmingly positive feedback from every guest.", 4);
    nextTestimonialId.value += 1;

    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "James Whitfield", "Whitfield Capital Partners", "GSK arranged a private Morocco tour for our senior leadership team that was nothing short of magical. From the riads to the desert camp, every element was handpicked and perfectly executed. Highly recommended.", 5);
    nextTestimonialId.value += 1;

    ignore PeopleLib.addTestimonial(testimonials, nextTestimonialId.value, "Fatima Al-Rashid", "Al-Rashid Events Group", "As a fellow events professional, I have high standards — and GSK Management met every single one. Their Durban Leadership Summit production was seamless, visually stunning, and delivered with genuine professionalism.", 5);
    nextTestimonialId.value += 1;
  };
};
