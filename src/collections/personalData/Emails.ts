import { CollectionConfig } from "payload/types";

const Emails: CollectionConfig = {
  slug: "emails",
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
  ],
};

export default Emails;
