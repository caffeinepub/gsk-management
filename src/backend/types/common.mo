module {
  public type Timestamp = Int;
  public type Result<T> = { #ok : T; #err : Text };
  public type Counter = { var value : Nat };
};
