import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "contactName",
    hideAPIURL: true,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
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
          name: "birthDate",
          type: "date",
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
