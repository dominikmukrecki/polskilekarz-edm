import { CollectionConfig } from 'payload/types';

const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

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
      type: 'number',
      min: 1,
      max: 31,
      required: true,
    },
    {
      name: 'monthOfBirth',
      label: 'Month of Birth',
      type: 'select',
      options: months,
      required: true,
    },
    {
      name: 'yearOfBirth',
      label: 'Year of Birth',
      type: 'number',
      min: 1900,
      max: new Date().getFullYear(),
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
  ],
  validate: [
    ({ data }) => {
      const { dayOfBirth, monthOfBirth, yearOfBirth } = data;
      const maxDaysInMonth = new Date(yearOfBirth, monthOfBirth, 0).getDate();
      if (dayOfBirth > maxDaysInMonth) {
        return {
          message: `Selected month has only ${maxDaysInMonth} days.`,
          keys: ['dayOfBirth', 'monthOfBirth', 'yearOfBirth'],
        };
      }
    },
  ],
};

export default Patients;
``
