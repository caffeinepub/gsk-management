module {
  public type TeamMember = {
    id : Nat;
    name : Text;
    role : Text;
    bio : Text;
    imageUrl : Text;
  };

  public type Testimonial = {
    id : Nat;
    clientName : Text;
    company : Text;
    quote : Text;
    rating : Nat;
  };
};
