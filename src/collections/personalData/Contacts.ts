import { CollectionConfig } from "payload/types";
import { name } from "../common/fields";
import { emailList, phoneList, addressList } from "./relationships/fields";

const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [name, emailList, phoneList, addressList],
};

export default Contacts;
