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
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "phoneList",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "phone",
          type: "text",
          required: true,
          validate: (value) => {
            const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            if (value && !regex.test(value)) {
              return "Invalid phone number format";
            }
            return true;
          },
        },
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
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
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
    },
  ],
  admin: {
    group: 'Personal Data',
  },
};

export default Contacts;
