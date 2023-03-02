import { CollectionConfig } from 'payload/types';

const Todo: CollectionConfig = {
  slug: 'todos',
  admin: {
    defaultColumns: ['listName', 'tasks', 'updatedAt'],
    useAsTitle: 'listName',
    hideAPIURL: true,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'listName',
      type: 'text',
    },
    {
      name: 'tasks',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'complete',
          type: 'checkbox',
          defaultValue: false,
        }
      ]
    },
  ],
}

export default Todo;