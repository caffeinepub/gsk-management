import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ServiceType as BackendServiceType, createActor } from "../backend";
import type {
  Event,
  InquiryFormData,
  TeamMember,
  Testimonial,
  TravelPackage,
} from "../types";

function useBackendActor() {
  return useActor(createActor);
}

export function useEvents() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getEvents();
      return result as unknown as Event[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFeaturedEvents() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Event[]>({
    queryKey: ["events", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getFeaturedEvents();
      return result as unknown as Event[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTravelPackages() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<TravelPackage[]>({
    queryKey: ["packages"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getTravelPackages();
      return result as unknown as TravelPackage[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFeaturedPackages() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<TravelPackage[]>({
    queryKey: ["packages", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getFeaturedPackages();
      return result as unknown as TravelPackage[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTeamMembers() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getTeamMembers();
      return result as unknown as TeamMember[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getTestimonials();
      return result as unknown as Testimonial[];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not ready");
      const serviceTypeMap: Record<string, BackendServiceType> = {
        entertainment: BackendServiceType.entertainment,
        travel: BackendServiceType.travel,
        events: BackendServiceType.events,
      };
      return actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        serviceTypeMap[data.serviceType] ?? BackendServiceType.events,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

export function useSeedData() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      return actor.seedSampleData();
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
