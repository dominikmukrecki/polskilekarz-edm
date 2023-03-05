import { CollectionConfig } from 'payload/types';

const today = new Date();

const Prescriptions: CollectionConfig = {
  slug: 'prescriptions',
  fields: [
    {
      name: 'patient',
      label: 'Patient',
      type: 'relationship',
      relationTo: 'patients',
      required: true,
    },
    {
      name: 'medicine',
      label: 'Medicine',
      type: 'relationship',
      relationTo: 'medicines',
      required: true,
    },
    {
      name: 'issuingDate',
      label: 'Date of Issuing',
      type: 'date',
      required: true,
      defaultValue: today.toISOString(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'daysOfValidity',
      label: 'Days of Validity',
      type: 'number',
      required: true,
      defaultValue: 7,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  admin: {
    useAsTitle: 'medicine.commonName',
  },
};

export default Prescriptions;
