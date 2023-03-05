const Fields = [
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
        label: {
          en: 'Admin',
          pl: 'Administrator',
        },
        value: 'admin',
      },
      {
        label: {
          en: 'Doctor',
          pl: 'Lekarz',
        },
        value: 'doctor',
      },
      {
        label: {
          en: 'Assistant',
          pl: 'Asystent',
        },
        value: 'assistant',
      },
    ],
    hasMany: true,
    defaultValue: ['assistant'],
    required: true,
  },
];
