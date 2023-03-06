// This file defines the Users collection in Payload CMS, including its fields and hooks

import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface UserData {
  name: string;
  email: string;
  displayName?: string;
  roles: string[];
}

const generateDisplayName: CollectionBeforeValidateHook<UserData> = async ({ data }) => {
  const { name, email } = data;
  data.displayName = `${name}, ${email}`;
  return data;
};

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'displayName',
  },
  access: {
    read: () => true,
  },
  fields: [
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
      type: 'row',
      fields: [
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
            width: '50%',
          },
        },
        {
          name: 'pesel',
          label: 'PESEL',
          type: 'text',
          required: false,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'displayName',
      label: 'Display Name',
      type: 'text',
      required: false,
      defaultValue: 'New User',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    // Add more fields as needed
  ],
  hooks: {
    beforeValidate: [generateDisplayName],
  },
};

export default Users;

// Improved Users collection file with a row field containing the roles and pesel fields, adjusted width, and removed the sidebar from the age field.