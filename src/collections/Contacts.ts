import { CollectionConfig, CollectionBeforeChangeHook } from 'payload/types';

const beforeChangeHook: CollectionBeforeChangeHook = async ({ data }) => {
  const { name, email, phone } = data;
  data.displayName = `${name} | ${email} | ${phone}`;
  return data;
};

const contactFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: false,
    validate: (value) => {
      const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      if (value && !regex.test(value)) {
        return 'Invalid phone number format';
      }
      return true;
    },
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    required: true,
  },
  {
    name: 'displayName',
    label: 'Display Name',
    type: 'text',
    required: true,
    defaultValue: 'New Contact',
    admin: {
      position: 'sidebar',
      readOnly: true,
    },
  },
];

const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    read: () => true,
  },
  fields: contactFields,
  admin: {
    useAsTitle: 'displayName',
  },
  hooks: {
    beforeChange: [beforeChangeHook],
  },
};

export default Contacts;
