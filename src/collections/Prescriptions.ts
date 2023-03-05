import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface Prescription {
  patient: string;
  medicine: string;
  issuingDate: Date;
  daysOfValidity: number;
  expirationDate?: Date;
}

const calculateExpirationDate: CollectionBeforeValidateHook<Prescription> = async ({ data }) => {
  const { issuingDate, daysOfValidity } = data;
  if (!issuingDate || !daysOfValidity) return data;

  const expirationDate = new Date(issuingDate.getTime() + daysOfValidity * 24 * 60 * 60 * 1000);
  data.expirationDate = expirationDate;
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
      admin: {
        width: '50%',
      },
    },
    {
      name: 'medicine',
      label: 'Medicine',
      type: 'relationship',
      relationTo: 'medicines',
      required: true,
      admin: {
        width: '50%',
      },
    },
    {
      name: 'issuingDate',
      label: 'Date of Issuing',
      type: 'date',
      required: true,
      defaultValue: today.toISOString(),
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'daysOfValidity',
      label: 'Days of Validity',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
        width: '50%',
      },
    },
    {
      name: 'expirationDate',
      label: 'Expiration Date',
      type: 'date',
      required: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
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

export default Prescription;
