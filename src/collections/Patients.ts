import { CollectionConfig, Hook } from 'payload/types';

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
      name: 'displayedName',
      label: 'Displayed Name',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
        hidden: false,
      },
    },
  ],
  hooks: {
    beforeChange: [
      (hook: Hook) => {
        const { data } = hook;
        const { name, birthdate } = data;
        data.displayedName = `${name} - ${birthdate}`;

        return hook;
      },
    ],
  },
};

export default Patients;
