import { CollectionConfig } from "payload/types";
import generateDisplayNameHook from '../hooks/generateDisplayNameHook';

const Contacts: CollectionConfig = {
  slug: "contacts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "contactEmails",
      label: "Contact Emails",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "relationship",
          relationTo: "labels",
          required: false,
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
      name: "contactPhones",
      label: "Contact Phones",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "relationship",
          relationTo: "labels",
          required: false,
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
      name: "labels",
      label: "Labels",
      type: "relationship",
      relationTo: "labels",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
    },
    {
      name: "displayName",
      label: "Display Name",
      type: "text",
      required: true,
      defaultValue: "New Contact",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
  ],
  admin: {
    useAsTitle: "displayName",
    group: 'Personal Data',
  },
  hooks: {
    beforeChange: [
      generateDisplayNameHook({
        fieldSlugs: ['name', 'contactEmails.0.email', 'contactPhones.0.phone'],
        separator: ', ',
        displayNameField: 'displayName',
      }),
    ],
  },
};

export default Contacts;
