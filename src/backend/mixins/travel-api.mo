import List "mo:core/List";
import TravelTypes "../types/travel";
import CommonTypes "../types/common";
import TravelLib "../lib/travel";

mixin (
  packages : List.List<TravelTypes.TravelPackage>,
  nextPackageId : CommonTypes.Counter
) {
  public query func getTravelPackages() : async [TravelTypes.TravelPackage] {
    TravelLib.getAll(packages);
  };

  public query func getFeaturedPackages() : async [TravelTypes.TravelPackage] {
    TravelLib.getFeatured(packages);
  };
};
