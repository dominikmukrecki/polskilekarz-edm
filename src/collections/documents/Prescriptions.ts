import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';
import Group from './admin/Group';

interface PrescriptionData {
  patient: string;
  medicine: string;
  issuingDate: string;
  expirationDate?: string;
}

// Calculates the expiration date based on the issuing date and days of validity
const calculateExpirationDate: CollectionBeforeValidateHook<PrescriptionData> = async ({ data }) => {
  const { issuingDate, expirationDate, daysOfValidity } = data;

  if (!issuingDate || !daysOfValidity) return data;

  const issuingDateTime = new Date(issuingDate).getTime();
  const daysInMilliseconds = daysOfValidity * 24 * 60 * 60 * 1000;

  const expirationDateTime = issuingDateTime + daysInMilliseconds;
  data.expirationDate = new Date(expirationDateTime).toISOString();
  
  return data;
};

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
    useAsTitle: 'medicine.commonName',
    group: Group,
  },
  hooks: {
    // Add the beforeValidate hook to calculate the expiration date
    beforeValidate: [calculateExpirationDate],
  },
};

export default Prescriptions;
