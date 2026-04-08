import List "mo:core/List";
import EventTypes "../types/events";

module {
  public type Event = EventTypes.Event;
  public type EventCategory = EventTypes.EventCategory;

  public func getAll(events : List.List<Event>) : [Event] {
    events.toArray();
  };

  public func getFeatured(events : List.List<Event>) : [Event] {
    events.filter(func(e) { e.featured }).toArray();
  };

  public func add(events : List.List<Event>, nextId : Nat, title : Text, description : Text, date : Text, location : Text, category : EventCategory, imageUrl : Text, featured : Bool) : Event {
    let event : Event = {
      id = nextId;
      title;
      description;
      date;
      location;
      category;
      imageUrl;
      featured;
    };
    events.add(event);
    event;
  };
};
