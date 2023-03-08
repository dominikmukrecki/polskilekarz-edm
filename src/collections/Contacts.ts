import { CollectionConfig } from "payload/types";
import generateDisplayNameHook from '../hooks/generateDisplayNameHook';
import { CollectionBeforeOperationHook } from 'payload/types';

const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Primary Email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Primary Phone",
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
      name: "additionalEmails",
      label: "Additional Emails",
      type: "array",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
      ],
    },
    {
      name: "additionalPhones",
      label: "Additional Phones",
      type: "array",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "text",
          required: true,
        },
        {
          name: "phone",
          label: "Phone",
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
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
    },
    {
      name: 'displayName',
      type: "text",
      defaultValue: 'New contact',
    },
  ],
  admin: {
    group: 'Personal Data',
  },
  hooks: {
    beforeChange: [
      generateDisplayNameHook({
        template: '${name}, email: ${email}',
      }),
    ],
  },
  beforeOperation: [
    async ({ operation, args }) => {
      if (operation === 'read') {
        console.log(`The ${args.slug} collection is being read!`);
      }
      return args;
    },
  ],
};

export default Contacts;