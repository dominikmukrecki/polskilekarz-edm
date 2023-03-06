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
    {
      name: "displayName",
      label: "Display Name",
      type: "text",
      required: true,
      defaultValue: "New Label",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
  ],
  admin: {
    useAsTitle: 'displayName',
  },
  hooks: {
    beforeChange: [
      generateDisplayNameHook({
        fieldSlugs: ['name'],
        separator: ', ',
        displayNameField: 'displayName',
      }),
    ],
  },
};

export default Labels;
