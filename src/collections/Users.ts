import { CollectionConfig, CollectionBeforeChangeHook } from 'payload/types';

const beforeChangeHook: CollectionBeforeChangeHook = async ({ data }) => {
  const { name, email } = data;
  data.displayName = `${name}, ${email}`;
  return data;
};

const userFields = [
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
    name: 'roles',
    label: 'Roles',
    type: 'select',
    options: [
      {
        label: 'Admin',
        value: 'admin',
      },
      {
        label: 'Doctor',
        value: 'doctor',
      },
      {
        label: 'Assistant',
        value: 'assistant',
      },
    ],
    hasMany: true,
    defaultValue: ['assistant'],
    required: true,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'displayName',
    label: 'Display Name',
    type: 'text',
    required: true,
    defaultValue: 'New User',
    admin: {
      position: 'sidebar',
      readOnly: true,
    },
  },
  // Add more fields as needed
];

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'displayName',
  },
  access: {
    read: () => true,
  },
  fields: userFields,
  hooks: {
    beforeChange: [beforeChangeHook],
  },
};

export default Users;
