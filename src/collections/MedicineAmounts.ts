import { CollectionConfig } from 'payload/types';

const MedicineAmounts: CollectionConfig = {
  slug: 'medicine-amounts',
  labels: {
    singular: 'Medicine Amount',
    plural: 'Medicine Amounts',
  },
  fields: [
    {
      name: 'amount',
      label: 'Amount',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export default MedicineAmounts;