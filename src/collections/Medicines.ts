import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface Medicine {
  commonName: string;
  brandName: string;
  pharmaceuticalForm: string;
  amountAndUnit: string;
  displayName: string;
}

const createDisplayName: CollectionBeforeValidateHook<Medicine> = async ({ data }) => {
  const { commonName, brandName, pharmaceuticalForm, amountAndUnit } = data;
  data.displayName = `${commonName} (${brandName}) - ${pharmaceuticalForm}, ${amountAndUnit}`;
  return data;
};

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
    },
  ],
  admin: {
    useAsTitle: 'displayName',
  },
  hooks: {
    beforeValidate: [createDisplayName],
  },
};

export default Medicines;
