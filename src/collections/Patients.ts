import { CollectionConfig, Hook } from 'payload/types';
import { format } from 'date-fns';

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
  ],
  admin: {
    useAsTitle: 'displayName',
  },
  hooks: {
    beforeChange: [
      async (hook) => {
        const { data } = hook;
        const { name, birthdate } = data;
        const formattedBirthdate = format(new Date(birthdate), 'yyyy-MM-dd');
        data.displayName = `${name} - ${formattedBirthdate}`;
        return hook;
      },
    ],
  },
};

export default Patients;
