import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "contactName",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "contactName",
      type: "text",
    },
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
  versions: {
    drafts: {
      autosave: true,
    },
  },
};

export default Contacts;
