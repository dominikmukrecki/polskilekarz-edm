import { CollectionConfig } from 'payload/types';

const PhoneNumbers: CollectionConfig = {
  slug: 'phoneNumbers',
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
      unique: true,
      validate: (value) => {
        const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (value && !regex.test(value)) {
          return 'Invalid phone number format';
        }
        return true;
      },
    },
  ],
};

export default PhoneNumbers;
