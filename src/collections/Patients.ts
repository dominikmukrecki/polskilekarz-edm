import { CollectionConfig, CollectionBeforeChangeHook } from 'payload/types';

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data,
  locale
}) => {
  const { firstName, lastName, birthdate } = data;
  const formattedBirthdate = new Date(birthdate).toLocaleDateString({ locale });
  data.displayName = `${firstName} ${lastName}, born: ${formattedBirthdate}`;

  const birthDate = new Date(birthdate);
  const diff = Date.now() - birthDate.getTime();
  const age = new Date(diff);
  data.age = `${Math.abs(age.getUTCFullYear() - 1970)} years and ${age.getUTCMonth()} months`;

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
          required: true,
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
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'age',
      label: 'Age',
      type: 'text',
      required: false,
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
    beforeChange: [beforeChangeHook],
  },
};

export default Patients;