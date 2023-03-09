import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "emailList",
      type: "relationship",
      relationTo: "emails",
      hasMany: true,
      required: true,
    },
    {
      name: "phoneList",
      type: "relationship",
      relationTo: "phoneNumbers",
      hasMany: true,
      required: true,
    },
    {
      name: "addressList",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "address",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Contacts;
