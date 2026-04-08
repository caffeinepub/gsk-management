module {
  public type ServiceType = { #entertainment; #travel; #events };

  public type InquirySubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Int;
  };
};
