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
        i18n: true, // <-- add i18n property
      },
      {
        name: 'displayName',
        label: 'Display Name',
        type: 'text',
        required: false,
        admin: {
          position: 'sidebar',
          readOnly: true,
        },
        i18n: true, // <-- add i18n property
      },
    ],
    admin: {
      useAsTitle: 'displayName',
    },
    hooks: {
      beforeValidate: [generateDisplayName],
    },
  };
  
  export default ICD10;