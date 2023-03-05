import { CollectionConfig } from "payload/types";

const Tests: CollectionConfig = {
  slug: "test",
  admin: {
    useAsTitle: "contactEmail",
    hideAPIURL: true,
  },
  fields: [
    {
      name: "contactName1",
      type: "text",
    },
    {
      name: "contactEmail",
      type: "email",
    },
    
  ],
};

export default Tests;
