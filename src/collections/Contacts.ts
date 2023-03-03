import { CollectionConfig } from 'payload/types';

const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'contactName',
    hideAPIURL: true,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'contactName',
      type: 'text',
    },
    {
      name: 'birthDate',
      type: 'date',
    },
  ],
}

export default Contacts;