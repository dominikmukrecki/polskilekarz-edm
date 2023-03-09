import { CollectionConfig } from 'payload/types';

const Medicines: CollectionConfig = {
  slug: 'medicines',
  fields: [
    {
      name: 'commonName',
      label: 'Common Name',
      type: 'text',
      required: true,
    },
    {
      name: 'brandName',
      label: 'Brand Name',
      type: 'text',
      required: true,
    },
    {
      name: 'pharmaceuticalForm',
      label: 'Pharmaceutical Form',
      type: 'text',
      required: true,
    },
    {
      name: 'amountAndUnit',
      label: 'Amount and Unit',
      type: 'text',
      required: true,
    },
  ],
  admin: {
    group: "Medicines",
  },
};

export default Medicines;
