const contactFields = [
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
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: false,
    validate: (value) => {
      const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      if (value && !regex.test(value)) {
        return 'Invalid phone number format';
      }
      return true;
    },
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    required: true,
    admin: {
      placeholder: 'Street Address, City, State, Zip Code',
    },
  },
  {
    name: 'generatedAddresses',
    label: 'Generated Addresses',
    type: 'array',
    required: false,
    fields: [
      {
        name: 'address',
        type: 'text',
        label: 'Address',
        required: true,
      },
      {
        name: 'city',
        type: 'text',
        label: 'City',
        required: true,
      },
      {
        name: 'state',
        type: 'text',
        label: 'State',
        required: true,
      },
      {
        name: 'zipCode',
        type: 'text',
        label: 'Zip Code',
        required: true,
      },
    ],
    admin: {
      readOnly: false,
    },
  }
  ];

const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    read: () => true,
  },
  fields: contactFields,
};

export default Contacts;