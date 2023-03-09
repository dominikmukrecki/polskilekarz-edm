import { CollectionConfig } from "payload/types";

const Addresses: CollectionConfig = {
  slug: "addresses",
  fields: [
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "contactList",
      type: "relationship",
      relationTo: "contacts",
      hasMany: true,
      required: true,
    },
  ],
};

export default Addresses;
