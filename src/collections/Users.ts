const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
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
    },
    // Add more fields as needed
  ],
};
