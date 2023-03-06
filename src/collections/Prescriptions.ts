import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface PrescriptionData {
  patient: string;
  medicine: string;
  issuingDate: string;
  expirationDate?: string;
}

const calculateExpirationDate: CollectionBeforeValidateHook<PrescriptionData> = async ({ data }) => {
  const { issuingDate, expirationDate, daysOfValidity } = data;

  if (!issuingDate || !daysOfValidity) return data;

  const issuingDateTime = new Date(issuingDate).getTime();
  const daysInMilliseconds = daysOfValidity * 24 * 60 * 60 * 1000;

  if (expirationDate) {
    const expirationDateTime = new Date(expirationDate).getTime();
    if (expirationDateTime < issuingDateTime + daysInMilliseconds) {
      throw new Error('Expiration date must be later than issuing date');
    }
  }

  const expirationDateTime = issuingDateTime + daysInMilliseconds;
  data.expirationDate = new Date(expirationDateTime).toISOString();
  
  return data;
};

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
  admin: {
    useAsTitle: 'medicine.commonName',
  },
  hooks: {
    beforeValidate: [calculateExpirationDate],
  },
};

export default Prescriptions;
