// This file defines the Users collection in Payload CMS, including its fields and hooks

import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface UserData {
  name: string;
  email: string;
  displayName?: string;
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
  hooks: {
    beforeValidate: [generateDisplayName],
  },
};

export default Users;

// Improved Users collection file with a row field containing the roles and pesel fields, adjusted width, and removed the sidebar from the age field.