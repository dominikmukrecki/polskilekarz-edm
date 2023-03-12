import { CollectionConfig, Field } from "payload/types";
import { emailField } from "../common/fields";

export const Emails: CollectionConfig = {
  slug: "emails",
  fields: [emailField],
};

export const emailList: Field = {
  name: "emailList",
  type: "relationship",
  relationTo: Emails.slug,
  hasMany: true,
};
