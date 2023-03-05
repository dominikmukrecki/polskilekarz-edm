import { CollectionConfig } from 'payload/types';

const Fields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    maxLength: 50,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    maxLength: 100,
  },
  {
    name: 'role',
    label: 'Role',
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
    defaultValue: 'assistant',
    required: true,
  },
  // Add more fields as needed
] as const;

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: Fields,
};

export default Users;