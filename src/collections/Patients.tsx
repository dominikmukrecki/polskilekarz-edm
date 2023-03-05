import { CollectionConfig } from 'payload/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

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
      type: 'custom',
      defaultValue: new Date(),
      admin: {
        components: {
          Cell: ({ cellData, onChange }: any) => {
            const [date, setDate] = useState<Date>(cellData);

            return (
              <DatePicker
                selected={date}
                onChange={(newDate: Date) => {
                  setDate(newDate);
                  onChange(newDate);
                }}
                showYearDropdown
                dateFormat="dd/MM/yyyy"
              />
            );
          },
        },
      },
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
};

export default Patients;
