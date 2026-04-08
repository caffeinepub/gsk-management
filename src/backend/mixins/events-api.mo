import List "mo:core/List";
import EventTypes "../types/events";
import CommonTypes "../types/common";
import EventsLib "../lib/events";

mixin (
  events : List.List<EventTypes.Event>,
  nextEventId : CommonTypes.Counter
) {
  public query func getEvents() : async [EventTypes.Event] {
    EventsLib.getAll(events);
  };

  public query func getFeaturedEvents() : async [EventTypes.Event] {
    EventsLib.getFeatured(events);
  };
};
