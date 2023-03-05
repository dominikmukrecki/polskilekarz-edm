import { CollectionConfig } from 'payload/types';
import { validate } from 'payload/config/dist/utils/validate';

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
      name: 'birthdateDay',
      label: 'Birthdate - Day',
      type: 'select',
      options: Array.from({ length: 31 }, (_, i) => ({
        label: (i + 1).toString(),
        value: (i + 1).toString(),
      })),
      required: true,
    },
    {
      name: 'birthdateMonth',
      label: 'Birthdate - Month',
      type: 'select',
      options: [
        {
          label: 'January',
          value: '1',
        },
        {
          label: 'February',
          value: '2',
        },
        {
          label: 'March',
          value: '3',
        },
        {
          label: 'April',
          value: '4',
        },
        {
          label: 'May',
          value: '5',
        },
        {
          label: 'June',
          value: '6',
        },
        {
          label: 'July',
          value: '7',
        },
        {
          label: 'August',
          value: '8',
        },
        {
          label: 'September',
          value: '9',
        },
        {
          label: 'October',
          value: '10',
        },
        {
          label: 'November',
          value: '11',
        },
        {
          label: 'December',
          value: '12',
        },
      ],
      required: true,
    },
    {
      name: 'birthdateYear',
      label: 'Birthdate - Year',
      type: 'number',
      required: true,
      min: 1900,
      max: new Date().getFullYear(),
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
  hooks: {
    beforeValidate: [
      ({ req, data }) => {
        const { birthdateDay, birthdateMonth, birthdateYear } = data;
        const maxDay = new Date(
          parseInt(birthdateYear),
          parseInt(birthdateMonth),
          0
        ).getDate();

        if (
          birthdateDay > maxDay ||
          birthdateMonth < 1 ||
          birthdateMonth > 12
        ) {
          throw new Error('Invalid birthdate');
        }

        const requiredFields = [
          'name',
          'birthdateDay',
          'birthdateMonth',
          'birthdateYear',
          'gender',
        ];

        validate({ req, data, requiredFields });
      },
    ],
  },
};

export default Patients;
