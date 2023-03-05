import { CollectionConfig, Field } from 'payload/types';

const Fields: Field[] = [
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
    type: 'multiselect',
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
    defaultValue: ['assistant'],
    required: true,
  },
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
  fields: Fields,
};

export default Users;
