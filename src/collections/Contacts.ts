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
    validate: (value) => {
      const regex = /^(\d+[a-z]? )?(.*?) ?(.*?), (.*?), (.*?)$/i;
      if (value && !regex.test(value)) {
        return 'Invalid address format. Please use the format: "Street Address, City, State, Zip Code".';
      }
      return true;
    },
    admin: {
      placeholder: 'Street Address, City, State, Zip Code',
    },
  },
];

const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    read: () => true,
  },
  fields: contactFields,
};

export default Contacts;