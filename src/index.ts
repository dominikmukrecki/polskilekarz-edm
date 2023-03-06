import { collections } from 'payload/dist/cjs/collections';

collections.forEach((collection) => {
  collection.fields.push({
    name: 'isArchived',
    label: 'Archived',
    type: 'checkbox',
    defaultValue: false,
    admin: {
      position: 'sidebar',
    },
  });
});