import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

const createDisplayNameHook: CollectionBeforeValidateHook = async ({
  data,
  locale
}) => {
  const { firstName, lastName, birthdate } = data || {};
  if (!firstName || !lastName || !birthdate) {
    return null;
  }
  const formattedBirthdate = new Date(birthdate).toLocaleDateString({ locale });
  data.displayName = `${firstName} ${lastName}, born: ${formattedBirthdate}`;
  return data;
};

const generateAgeHook: CollectionBeforeValidateHook = async ({ data }) => {
  if (!data.birthdate) return null;

  const birthDate = new Date(data.birthdate);
  const diff = Date.now() - birthDate.getTime();
  const age = new Date(diff);
  data.age = `${Math.abs(age.getUTCFullYear() - 1970)} years and ${age.getUTCMonth()} months`;
  return data;
};

const validatePeselHook: CollectionBeforeValidateHook<Medicine> = async ({ data }) => {
  const { pesel } = data;
  if (!pesel) return null;

  const regex = /^[0-9]{11}$/;
  if (!regex.test(pesel)) {
    throw new Error('Invalid PESEL format');
  }

  const [year, month, day, _, gender] = pesel.match(/^(\d{2})(\d{2})(\d{2})\d(\d{1})$/)?.slice(1) || [];
  if (!year || !month || !day || !gender) {
    throw new Error('Invalid PESEL format');
  }

  const monthNumber = parseInt(month);
  const century = monthNumber < 13 ? '19' : monthNumber < 33 ? '20' : monthNumber < 53 ? '21' : '18';
  const birthDate = new Date(`${century}${year}-${month}-${day}`);
  if (isNaN(birthDate.getTime())) {
    throw new Error('Invalid PESEL format');
  }

  const checkSum = (9 * parseInt(pesel[0]) + 7 * parseInt(pesel[1]) + 3 * parseInt(pesel[2]) + parseInt(pesel[3]) + 9 * parseInt(pesel[4]) + 7 * parseInt(pesel[5]) + 3 * parseInt(pesel[6]) + parseInt(pesel[7]) + 9 * parseInt(pesel[8]) + 7 * parseInt(pesel[9])) % 10;
  if (checkSum !== parseInt(pesel[10])) {
    throw new Error('Invalid PESEL checksum');
  }

  return data;
};


const parsePeselHook: CollectionBeforeValidateHook = async ({ data }) => {
  const { pesel } = data;
  if (!pesel) {
    return null;
  }
  const birthYear = parseInt(pesel.substring(0, 2));
  const birthMonth = parseInt(pesel.substring(2, 4)) % 20;
  const birthDay = parseInt(pesel.substring(4, 6));
  const gender = parseInt(pesel.substring(9, 10)) % 2 === 0 ? 'female' : 'male';
  const birthdate = new Date(`${birthYear}-${birthMonth}-${birthDay}`).toISOString();
  data.birthdate = birthdate;
  data.gender = gender;
  return data;
};

const validatePeselOrBirthdateAndGender: CollectionBeforeValidateHook = async ({ data, req }) => {
  const { pesel, birthdate, gender } = data;

  // If the version being saved is a draft, skip validation
  if (data.id === undefined) {
    return data;
  }

  if (!pesel && (!birthdate || !gender)) {
    throw new Error('Either PESEL or both birthdate and gender are required');
  }

  return data;
};

const Patients: CollectionConfig = {
  slug: 'patients',
fields: [
  {
    type: 'row',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        admin: {
          width: '50%',
        },
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        admin: {
          width: '50%',
        },
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'birthdate',
        label: 'Birthdate',
        type: 'date',
        required: false,
        admin: {
          width: '50%',
        },
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
          {
            label: 'Other',
            value: 'other',
          },
        ],
        required: false,
        admin: {
          width: '50%',
        },
      },
    ],
  },
  {
    name: 'pesel',
    label: 'PESEL',
    type: 'text',
    required: false,
      admin: {
      width: '50%',
    },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'text',
    required: false,
    defaultValue: 'Age not calculated yet',
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
  },
  {
    name: 'contacts',
    label: 'Contacts',
    type: 'relationship',
    relationTo: 'contacts',
    hasMany: true,
    required: false,
    admin: {
      position: 'sidebar',
    },
  },
  {
    name: 'displayName',
    label: 'Display Name',
    type: 'text',
    required: true,
    defaultValue: 'New Patient',
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
    beforeValidate: [
      validatePeselOrBirthdateAndGender,
      validatePeselHook,
      parsePeselHook,
      createDisplayNameHook,
      generateAgeHook,
    ],
  },
  versions: {
    drafts: true,
  },
};

export default Patients;