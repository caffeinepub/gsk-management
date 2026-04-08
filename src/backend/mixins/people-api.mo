import List "mo:core/List";
import PeopleTypes "../types/people";
import CommonTypes "../types/common";
import PeopleLib "../lib/people";

mixin (
  teamMembers : List.List<PeopleTypes.TeamMember>,
  nextMemberId : CommonTypes.Counter,
  testimonials : List.List<PeopleTypes.Testimonial>,
  nextTestimonialId : CommonTypes.Counter
) {
  public query func getTeamMembers() : async [PeopleTypes.TeamMember] {
    PeopleLib.getAllTeamMembers(teamMembers);
  };

  public query func getTestimonials() : async [PeopleTypes.Testimonial] {
    PeopleLib.getAllTestimonials(testimonials);
  };
};
