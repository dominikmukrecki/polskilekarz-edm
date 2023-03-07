import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

interface ICD10Data {
  code: string;
  description: string;
}

const generateDisplayName: CollectionBeforeValidateHook<ICD10Data> = async ({ data }) => {
  const { code, description } = data;
  data.displayName = `${code} - ${description}`;
  return data;
};

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
      useAsTitle: 'displayName',
      group: "Indexes",
    },
    hooks: {
      beforeValidate: [generateDisplayName],
    },
  };
  
  export default ICD10;