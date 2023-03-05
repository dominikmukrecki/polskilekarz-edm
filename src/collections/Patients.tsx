import { CollectionConfig } from 'payload/types';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      admin: {
        components: {
          Cell: DatePickerCell,
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

const DatePickerCell = ({ cell, onChange }: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(cell.value)
  );

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date?.toISOString());
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="dd/MM/yyyy"
      showYearDropdown
      scrollableYearDropdown
    />
  );
};

export default Patients;
