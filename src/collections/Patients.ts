import { CollectionConfig, Hook, CollectionBeforeChangeHook } from 'payload/types';
import { useState } from 'react';
import { useHook } from '@payloadcms/config/dist/admin/useHook';

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
  const { name, birthdate } = data;
  data.displayName = `${name} - ${birthdate}`;
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
