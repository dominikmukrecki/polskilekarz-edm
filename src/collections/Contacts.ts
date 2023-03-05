import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "contactName",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "contactName1",
      type: "text",
    },
    {
      name: "contactEmial",
      type: "email",
    },
    {
      name: "customID",
      type: "text",
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default Contacts;
