import { CollectionConfig } from "payload/types";

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
      admin: {
        components: {
          Field: MyCustomUIField;
        }
      }
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
  return (
    <span>test</span>;
  )
}

export default Contacts;
