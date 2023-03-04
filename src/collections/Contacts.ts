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
          admin: {
            components: {
              Field: MyCustomUIField,
            },
          },
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
  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default Contacts;
