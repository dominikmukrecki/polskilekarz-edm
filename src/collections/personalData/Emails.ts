import { CollectionConfig } from "payload/types";

const Emails: CollectionConfig = {
  slug: "emails",
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'email',
  }
};

export default Emails;
