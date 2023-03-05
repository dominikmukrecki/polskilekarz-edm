import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "contactName",
    hideAPIURL: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "contactName",
          type: "text",
        },
        {
          name: "contactEmial",
          type: "email",
        },
        {
          type: "text",
          name: "name",
          readonly: true,
        },    
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
};

export default Contacts;
