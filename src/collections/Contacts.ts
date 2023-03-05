import { Field } from '@payloadcms/config/dist/fields';

const contactFields: Field[] = [
  {
    name: 'Name',
    label: () => req.t('nameLabel'),
    type: 'text',
    required: true,
  },
  {
    name: 'Email',
    label: () => req.t('emailLabel'),
    type: 'email',
    required: true,
  },
  {
    name: 'Phone',
    label: () => req.t('phoneLabel'),
    type: 'text',
    required: false,
    validate: (value) => {
      const regex = /^\+?\d{0,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
      if (value && !regex.test(value)) {
        return req.t('invalidPhoneFormat');
      }
      return true;
    },
  },
];

export default {
  slug: 'contacts',
  fields: contactFields,
};
