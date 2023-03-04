import { CollectionConfig } from "payload/types";
import React from "react";

const Contacts: CollectionConfig = {
  slug: "contacts",
  admin: {
    useAsTitle: "contactName",
    hideAPIURL: true,
  },
  fields: [
    {
      type: "ui",
      name: "name",
      label: "test",
      admin: {
        components: {
          Field: MyCustomUIField,
        },
      },
    },
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
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
};

const MyCustomUIField: React.FC = () => {
  const data = "test";
  return;
};

export default Contacts;
