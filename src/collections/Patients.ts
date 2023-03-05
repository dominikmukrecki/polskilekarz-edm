import { CollectionConfig, Hook } from 'payload/types';
import { useState } from 'react';
import { useHook } from '@payloadcms/config/dist/admin/useHook';

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
      async (hook: Hook) => {
        const { data } = hook;
        const { name, birthdate } = data;

        if (name && birthdate) {
          const formattedBirthdate = new Date(birthdate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          data.displayedName = `${name} - ${formattedBirthdate}`;
        }

        return hook;
      },
    ],
  },
};

export default Patients;
