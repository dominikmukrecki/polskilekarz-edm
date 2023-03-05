import { CollectionConfig } from 'payload/types';

const Medicines: CollectionConfig = {
  slug: 'medicines',
  fields: [
    {
      name: 'commonName',
      label: 'Common Name',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'brandName',
      label: 'Brand Name',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'pharmaceuticalForm',
      label: 'Pharmaceutical Form',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'amountAndUnit',
      label: 'Amount and Unit',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'displayName',
      label: 'Display Name',
      type: 'text',
      required: true,
      defaultValue: 'New Medicine',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: ({ data }) => {
          const { commonName, brandName, pharmaceuticalForm, amountAndUnit } = data;
          data.displayName = `${commonName} (${brandName}) - ${pharmaceuticalForm} (${amountAndUnit})`;
          return data;
        },
      },
    },
  ],
  admin: {
    useAsTitle: 'displayName',
  },
};

export default Medicines;
