import { CollectionConfig } from 'payload/types';

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
    useAsTitle: 'description',
  },
};

export default DosageDescriptions;
