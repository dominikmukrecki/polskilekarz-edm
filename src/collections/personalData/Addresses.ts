import { CollectionConfig } from 'payload/types';

const Addresses: CollectionConfig = {
  slug: 'addresses',
  fields: [
    {
      name: 'address',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export default Addresses;
