import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface PrescriptionData {
  patient: string;
  medicine: string;
  issuingDate: Date;
  validDays: number;
}

const calculateExpirationDate: CollectionBeforeValidateHook<PrescriptionData> = async ({ data }) => {
  const { issuingDate, validDays } = data;
  if (!issuingDate || !validDays) return data;

  const expirationDate = new Date(issuingDate.getTime() + validDays * 24 * 60 * 60 * 1000);
  data.expirationDate = expirationDate;
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
      name: 'validDays',
      label: 'Days of Validity',
      type: 'number',
      required: true,
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

export default Prescriptions;
