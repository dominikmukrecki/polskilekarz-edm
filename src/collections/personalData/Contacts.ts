import { CollectionConfig } from "payload/types";
import { nameField } from "../common/fields";
import { emailList, phoneList, addressList } from "../common/relationships";
import { chatwootContact } from "../common/externals";

const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [nameField, emailList, phoneList, addressList, chatwootContact],
};

export default Contacts;
