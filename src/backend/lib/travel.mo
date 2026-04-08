import List "mo:core/List";
import TravelTypes "../types/travel";

module {
  public type TravelPackage = TravelTypes.TravelPackage;

  public func getAll(packages : List.List<TravelPackage>) : [TravelPackage] {
    packages.toArray();
  };

  public func getFeatured(packages : List.List<TravelPackage>) : [TravelPackage] {
    packages.filter(func(p) { p.featured }).toArray();
  };

  public func add(packages : List.List<TravelPackage>, nextId : Nat, destination : Text, duration : Text, priceRange : Text, highlights : [Text], imageUrl : Text, featured : Bool) : TravelPackage {
    let pkg : TravelPackage = {
      id = nextId;
      destination;
      duration;
      priceRange;
      highlights;
      imageUrl;
      featured;
    };
    packages.add(pkg);
    pkg;
  };
};
