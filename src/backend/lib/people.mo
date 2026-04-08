import List "mo:core/List";
import PeopleTypes "../types/people";

module {
  public type TeamMember = PeopleTypes.TeamMember;
  public type Testimonial = PeopleTypes.Testimonial;

  public func getAllTeamMembers(members : List.List<TeamMember>) : [TeamMember] {
    members.toArray();
  };

  public func addTeamMember(members : List.List<TeamMember>, nextId : Nat, name : Text, role : Text, bio : Text, imageUrl : Text) : TeamMember {
    let member : TeamMember = {
      id = nextId;
      name;
      role;
      bio;
      imageUrl;
    };
    members.add(member);
    member;
  };

  public func getAllTestimonials(testimonials : List.List<Testimonial>) : [Testimonial] {
    testimonials.toArray();
  };

  public func addTestimonial(testimonials : List.List<Testimonial>, nextId : Nat, clientName : Text, company : Text, quote : Text, rating : Nat) : Testimonial {
    let testimonial : Testimonial = {
      id = nextId;
      clientName;
      company;
      quote;
      rating;
    };
    testimonials.add(testimonial);
    testimonial;
  };
};
