import { CollectionConfig } from 'payload/types';

const Labels: CollectionConfig = {
  slug: 'labels',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
  admin: {
    useAsTitle: 'name',
  }
};

export default Labels;
