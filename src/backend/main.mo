import List "mo:core/List";
import EventTypes "types/events";
import TravelTypes "types/travel";
import PeopleTypes "types/people";
import InquiryTypes "types/inquiries";
import CommonTypes "types/common";
import EventsApi "mixins/events-api";
import TravelApi "mixins/travel-api";
import PeopleApi "mixins/people-api";
import InquiriesApi "mixins/inquiries-api";
import SeedApi "mixins/seed-api";

actor {
  let events = List.empty<EventTypes.Event>();
  let nextEventId : CommonTypes.Counter = { var value = 1 };

  let packages = List.empty<TravelTypes.TravelPackage>();
  let nextPackageId : CommonTypes.Counter = { var value = 1 };

  let teamMembers = List.empty<PeopleTypes.TeamMember>();
  let nextMemberId : CommonTypes.Counter = { var value = 1 };

  let testimonials = List.empty<PeopleTypes.Testimonial>();
  let nextTestimonialId : CommonTypes.Counter = { var value = 1 };

  let inquiries = List.empty<InquiryTypes.InquirySubmission>();
  let nextInquiryId : CommonTypes.Counter = { var value = 1 };

  include EventsApi(events, nextEventId);
  include TravelApi(packages, nextPackageId);
  include PeopleApi(teamMembers, nextMemberId, testimonials, nextTestimonialId);
  include InquiriesApi(inquiries, nextInquiryId);
  include SeedApi(events, nextEventId, packages, nextPackageId, teamMembers, nextMemberId, testimonials, nextTestimonialId);
};
