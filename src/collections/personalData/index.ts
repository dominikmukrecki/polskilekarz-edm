import Contacts from "./Contacts";
import { Emails } from "./Emails";
import { PhoneNumbers } from "./PhoneNumbers";
import { Addresses } from "./Addresses";

const admin = {
  group: "Personal Data",
};

const personalDataCollections = [Contacts, Emails, PhoneNumbers, Addresses];

const PersonalData = personalDataCollections.map((collection) => ({
  ...collection,
  admin: { ...admin, ...collection.admin },
}));

export default PersonalData;
