// This file defines the Users collection in Payload CMS, including its fields and hooks

import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    group: "Administration",
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
    // Add more fields as needed
  ],
};

export default Users;

// Improved Users collection file with a row field containing the roles and pesel fields, adjusted width, and removed the sidebar from the age field.