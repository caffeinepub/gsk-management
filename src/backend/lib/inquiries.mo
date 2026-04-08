import List "mo:core/List";
import InquiryTypes "../types/inquiries";
import CommonTypes "../types/common";

module {
  public type InquirySubmission = InquiryTypes.InquirySubmission;
  public type ServiceType = InquiryTypes.ServiceType;
  public type Result<T> = CommonTypes.Result<T>;

  public func submit(inquiries : List.List<InquirySubmission>, nextId : Nat, name : Text, email : Text, phone : Text, serviceType : ServiceType, message : Text, timestamp : Int) : Result<Nat> {
    if (name.size() == 0) {
      return #err("Name is required");
    };
    if (email.size() == 0) {
      return #err("Email is required");
    };
    if (message.size() == 0) {
      return #err("Message is required");
    };
    if (not email.contains(#char '@')) {
      return #err("Invalid email address");
    };
    let inquiry : InquirySubmission = {
      id = nextId;
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp;
    };
    inquiries.add(inquiry);
    #ok(nextId);
  };
};
