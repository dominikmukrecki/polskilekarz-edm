import { CollectionConfig } from 'payload/types';
import generateDisplayNameHook from '../hooks/generateDisplayNameHook';

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
  hooks: {
    beforeChange: [
      generateDisplayNameHook({
        fieldSlugs: ['name'],
        separator: ', ',
        displayNameField: 'displayName',
      }),
    ],
  },
  admin: {
    group: 'Workflow',
  }
};

export default Labels;
