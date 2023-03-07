import { PayloadPlugin } from 'payload/types';

const addIsArchivedField: PayloadPlugin = ({ context }) => {
  context.collections.forEach((collection) => {
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
};

export default addIsArchivedField;