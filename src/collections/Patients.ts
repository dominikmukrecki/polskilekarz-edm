import { CollectionConfig } from 'payload/types';

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
          required: false,
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
          required: false,
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
          name: 'pesel',
          label: 'PESEL',
          type: 'text',
          required: false,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'age',
          label: 'Age',
          type: 'text',
          required: false,
          defaultValue: 'Age not calculated yet',
          admin: {
            readOnly: true,
            width: '50%',
          },
        },
      ],
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
  ],
  admin: {
    group: 'Personal Data',
  },
  versions: {
    drafts: true,
  },
};

export default Patients;