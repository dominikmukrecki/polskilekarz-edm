import { CollectionConfig } from 'payload/types';
import slugify from 'slugify';

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
              data.slug = slugify(data.name, { lower: true });
            }
            return data;
          },
        ],
      },
    },
  ],
};

export default Labels;
