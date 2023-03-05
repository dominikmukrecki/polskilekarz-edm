import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface PrescriptionData {
  patient: string;
  medicine: string;
  issuingDate: Date;
  expirationDate?: Date;
}

const validateExpirationDate: CollectionBeforeValidateHook<PrescriptionData> = async ({ data }) => {
  const { issuingDate, expirationDate } = data;
  if (!expirationDate) return data;
  
  if (issuingDate && expirationDate.getTime() < issuingDate.getTime()) {
    throw new Error('Expiration date must be later than issuing date');
  }
  
  return data;
};

const today = new Date();

const Prescription: CollectionConfig = {
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
      name: 'expirationDate',
      label: 'Expiration Date',
      type: 'date',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  admin: {
    useAsTitle: 'medicine.commonName',
  },
  hooks: {
    beforeValidate: [validateExpirationDate],
  },
};

