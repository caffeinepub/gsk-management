export type EventCategory = "entertainment" | "travel" | "events";
export type ServiceType = "entertainment" | "travel" | "events";

export interface Event {
  id: bigint;
  title: string;
  featured: boolean;
  date: string;
  description: string;
  imageUrl: string;
  category: EventCategory;
  location: string;
}

export interface TravelPackage {
  id: bigint;
  destination: string;
  featured: boolean;
  duration: string;
  highlights: Array<string>;
  priceRange: string;
  imageUrl: string;
}

export interface TeamMember {
  id: bigint;
  bio: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: bigint;
  clientName: string;
  quote: string;
  company: string;
  rating: bigint;
}

export interface InquirySubmission {
  id: bigint;
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  message: string;
  timestamp: bigint;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  message: string;
}

export type Result =
  | { __kind__: "ok"; ok: bigint }
  | { __kind__: "err"; err: string };
