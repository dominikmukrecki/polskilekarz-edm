import { CollectionConfig } from 'payload/types';

const Fields = [
  {
    name: 'name',
    label: req.t('fields.name'),
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    label: req.t('fields.email'),
    type: 'email',
    required: true,
  },
  {
    name: 'roles',
    label: req.t('fields.roles'),
    type: 'select',
    options: [
      {
        label: req.t('fields.admin'),
        value: 'admin',
      },
      {
        label: req.t('fields.doctor'),
        value: 'doctor',
      },
      {
        label: req.t('fields.assistant'),
        value: 'assistant',
      },
    ],
    hasMany: true,
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