import { CollectionConfig } from 'payload/types';

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
      name: 'dayOfBirth',
      label: 'Day of Birth',
      type: 'text',
      required: true,
      validate: (value) => {
        const regex = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        if (value && !regex.test(value)) {
          return 'Invalid day format';
        }
        return true;
      },
    },
    {
      name: 'monthOfBirth',
      label: 'Month of Birth',
      type: 'text',
      required: true,
      validate: (value) => {
        const regex = /^(0?[1-9]|1[0-2])$/;
        if (value && !regex.test(value)) {
          return 'Invalid month format';
        }
        return true;
      },
    },
    {
      name: 'yearOfBirth',
      label: 'Year of Birth',
      type: 'text',
      required: true,
      validate: (value) => {
        const regex = /^\d{4}$/;
        if (value && !regex.test(value)) {
          return 'Invalid year format';
        }
        return true;
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
  ],
};

export default Patients;