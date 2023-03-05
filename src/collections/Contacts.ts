import { Field } from '@payloadcms/config/dist/fields';

const contactFields: Field[] = [
  {
    name: 'contactName',
    label: 'Name',
    type: 'text',
    required: true,
    maxLength: 50,
  },
  {
    name: 'contactEmail',
    label: 'Email',
    type: 'email',
    required: true,
    maxLength: 100,
  },
  {
    name: 'contactPhone',
    label: 'Phone',
    type: 'text',
    required: false,
    maxLength: 20,
  },
];

export default {
  slug: 'contacts',
  fields: contactFields,
};