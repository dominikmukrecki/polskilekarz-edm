import { CollectionConfig } from "payload/types";
import MyCustomUIField from "../components/MyCustomUIField";

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
          type: "ui",
          name: "name",
          label: "test",
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
