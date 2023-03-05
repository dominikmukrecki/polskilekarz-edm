import { CollectionConfig } from 'payload/types';

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
  // Add more fields as needed
];

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: userFields,
};

export default Users;