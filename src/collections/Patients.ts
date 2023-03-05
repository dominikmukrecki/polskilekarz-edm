import { CollectionConfig, Hook, CollectionBeforeChangeHook } from 'payload/types';

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data,
}) => {
  const { name, birthdate } = data;
  const formattedBirthdate = new Date(birthdate).toLocaleDateString('pl_PL');
  data.displayName = `${name} - ${formattedBirthdate}`;
  return data;
}

const Patients: CollectionConfig = {
  slug: 'patients',
  fields: [
    {
      name: 'name',
      label: 'Name',
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
      required: false,
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