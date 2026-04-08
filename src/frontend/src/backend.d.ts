import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TravelPackage {
    id: bigint;
    destination: string;
    featured: boolean;
    duration: string;
    highlights: Array<string>;
    priceRange: string;
    imageUrl: string;
}
export type Result = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
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
export enum ServiceType {
    entertainment = "entertainment",
    travel = "travel",
    events = "events"
}
export interface backendInterface {
    getEvents(): Promise<Array<Event>>;
    getFeaturedEvents(): Promise<Array<Event>>;
    getFeaturedPackages(): Promise<Array<TravelPackage>>;
    getTeamMembers(): Promise<Array<TeamMember>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    getTravelPackages(): Promise<Array<TravelPackage>>;
    seedSampleData(): Promise<void>;
    submitInquiry(name: string, email: string, phone: string, serviceType: ServiceType, message: string): Promise<Result>;
}
