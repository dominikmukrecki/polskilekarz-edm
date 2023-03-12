import { CollectionConfig, Field } from "payload/types";
import { nameField } from "../common/fields";
import { chatwootContact } from "../common/externals";
import { emailList } from "./Emails";
import { addressList } from "./Addresses";
import { phoneList } from "./PhoneNumbers";

export const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [nameField(), emailList, phoneList, addressList, chatwootContact],
};

export const contactList: Field = {
  name: "contactList",
  type: "relationship",
  relationTo: Contacts.slug,
  hasMany: true,
};