import List "mo:core/List";
import InquiryTypes "../types/inquiries";
import CommonTypes "../types/common";
import InquiriesLib "../lib/inquiries";
import Time "mo:core/Time";

mixin (
  inquiries : List.List<InquiryTypes.InquirySubmission>,
  nextInquiryId : CommonTypes.Counter
) {
  public shared func submitInquiry(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : InquiryTypes.ServiceType,
    message : Text
  ) : async CommonTypes.Result<Nat> {
    let id = nextInquiryId.value;
    let result = InquiriesLib.submit(inquiries, id, name, email, phone, serviceType, message, Time.now());
    switch (result) {
      case (#ok(_)) { nextInquiryId.value += 1 };
      case (#err(_)) {};
    };
    result;
  };
};
