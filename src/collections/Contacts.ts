import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts1",
  admin: {
    useAsTitle: "contactEmail",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "contactName1",
      type: "text",
    },
    {
      name: "contactEmail",
      type: "email",
    },
    {
      name: "label",
      type: "ui",
    }
  ],
};

export default Contacts;
