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
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          async ({ data }) => {
            if (data.name) {
              data.slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            }
            return data;
          },
        ],
      },
    },
  ],
};

export default Labels;
