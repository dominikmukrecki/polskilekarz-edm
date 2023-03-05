import { Field } from '@payloadcms/config/dist/fields';

const contactFields: Field[] = [
  {
    name: 'Name',
    label: 'Name',
    type: 'text',
    required: true,
  },
  {
    name: 'Email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    name: 'Phone',
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

export default {
  slug: 'contacts',
  fields: contactFields,
};
