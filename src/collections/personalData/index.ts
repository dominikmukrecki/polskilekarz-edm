import { Contacts } from "./Contacts";
import { Emails } from "./Emails";
import { PhoneNumbers } from "./PhoneNumbers";
import { Addresses } from "./Addresses";

const admin = {
  group: "Personal Data",
};

// Define an array of personal data collections
const personalDataCollections = [Contacts, Emails, PhoneNumbers, Addresses];

// Map over the personal data collections and add the admin property to each collection
const PersonalData = personalDataCollections.map((collection) => ({
  ...collection,
  admin: { ...admin, ...collection.admin },
}));

export default PersonalData;
