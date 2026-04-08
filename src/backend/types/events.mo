module {
  public type EventCategory = { #entertainment; #travel; #events };

  public type Event = {
    id : Nat;
    title : Text;
    description : Text;
    date : Text;
    location : Text;
    category : EventCategory;
    imageUrl : Text;
    featured : Bool;
  };
};
