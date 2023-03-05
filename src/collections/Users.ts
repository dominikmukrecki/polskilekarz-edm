import { CollectionConfig, Field } from 'payload/types';
import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

const useDisplayName = (user: User): string => {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user.name && user.email) {
      setDisplayName(`${user.name} (${user.email})`);
    } else if (user.name) {
      setDisplayName(user.name);
    } else if (user.email) {
      setDisplayName(user.email);
    }
  }, [user]);

  return displayName;
};

const userFields: Field[] = [
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
    admin: {
      readOnly: true,
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
  hooks: {
    afterChange: async ({ operation, doc }) => {
      if (operation === 'create' || operation === 'update') {
        const displayName = useDisplayName({ name: doc.name, email: doc.email });
        await payload.update('users', { id: doc.id }, { displayName });
      }
    },
  },
  fields: userFields,
};

export default Users;
