import { CollectionConfig } from 'payload/types';

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
      const regex = /^\+?\d{0,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
      if (value && !regex.test(value)) {
        return 'Invalid phone number format';
      }
      return true;
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
