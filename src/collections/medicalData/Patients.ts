import { CollectionConfig } from "payload/types";
import { firstNameField, lastNameField, birthdateField, genderField } from "../common/fields";
import { contactList } from "../personalData/Contacts";

const Patients: CollectionConfig = {
  slug: "patients",
  fields: [firstNameField, lastNameField, birthdateField, genderField, contactList],
  versions: {
    drafts: true,
  },
};

export default Patients;
