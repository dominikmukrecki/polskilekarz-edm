import { CollectionConfig } from 'payload/types';

const ICD10: CollectionConfig = {
    slug: 'icd10',
    labels: {
      singular: 'ICD-10 Code',
      plural: 'ICD-10 Codes',
    },
    fields: [
      {
        name: 'code',
        label: 'Code',
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'description',
        label: 'Description',
        type: 'text',
        required: true,
        localized: true, // <-- add i18n property
      },
    ],
    admin: {
      group: "Indexes",
    },
  };
  
  export default ICD10;