module {
  public type TravelPackage = {
    id : Nat;
    destination : Text;
    duration : Text;
    priceRange : Text;
    highlights : [Text];
    imageUrl : Text;
    featured : Bool;
  };
};
