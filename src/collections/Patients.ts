import { CollectionConfig, CollectionBeforeChangeHook } from 'payload/types';

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, locale
}) => {
  const { firstName, lastName, birthdate } = data;
  const formattedBirthdate = new Date(birthdate).toLocaleDateString({locale});
  data.displayName = `${firstName} ${lastName}, born: ${formattedBirthdate}`;

  const birthDate = new Date(birthdate);
  const diff = Date.now() - birthDate.getTime();
  const age = new Date(diff);
  data.age = Math.abs(age.getUTCFullYear() - 1970) + " years and " + age.getUTCMonth() + " months";
  
  return data;
}

const Patients: CollectionConfig = {
  slug: 'patients',
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'birthdate',
      label: 'Birthdate',
      type: 'date',
      required: true,
    },
    {
      name: 'age',
      label: 'Age',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
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
      required: true,
    },
    {
      name: 'displayName',
      label: 'Display Name',
      type: 'text',
      required: true,
      defaultValue: 'New Patient',
      admin: {
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
    },
  ],
  admin: {
    useAsTitle: 'displayName',
  },
  hooks: {
    beforeChange: [
      beforeChangeHook
    ],
  },
};

export default Patients;
