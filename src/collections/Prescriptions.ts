import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface PrescriptionData {
  patient: string;
  medicine: string;
  issuingDate: Date;
  daysOfValidity: number;
  expirationDate?: Date;
}

const calculateExpirationDate: CollectionBeforeValidateHook<PrescriptionData> = async ({ data }) => {
  const { issuingDate, daysOfValidity } = data;
  if (!issuingDate || !daysOfValidity) return data;

  const expirationDate = new Date();
  expirationDate.setDate(issuingDate.getDate() + daysOfValidity);
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
      name: 'daysOfValidity',
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

export default Prescription;
