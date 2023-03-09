import { CollectionConfig } from 'payload/types';

const today = new Date();

const Prescriptions: CollectionConfig = {
  slug: 'prescriptions',
  // Define the fields for the Prescription collection
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
      name: 'amount',
      label: 'Amount',
      type: 'relationship',
      relationTo: 'medicine-amounts',
      required: true,
    },  
    {
      name: 'dosage',
      label: 'Dosage',
      type: 'relationship',
      relationTo: 'dosage-descriptions',
      required: true,
      hasMany: true,
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
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: 'date',
      required: false,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
  // Use the common name of the medicine as the title in the admin UI
  admin: {
    group: 'Documents',
  },
};

export default Prescriptions;
