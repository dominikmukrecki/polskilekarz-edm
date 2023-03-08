import { CollectionConfig } from 'payload/types';
import generateDisplayNameHook from '../hooks/generateDisplayNameHook';

const DosageDescriptions: CollectionConfig = {
  slug: 'dosage-descriptions',
  labels: {
    singular: 'Dosage Description',
    plural: 'Dosage Descriptions',
  },
  fields: [
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
  admin: {
    group: "Medicines",
  },
  hooks: {
    beforeChange: [
      generateDisplayNameHook({
        template: '${description}',
      }),
    ],
  },
};

export default DosageDescriptions;
