import { CollectionBeforeChangeHook, Context } from 'payload/types';

type RecordData = {
  [key: string]: any;
};

type GenerateDisplayNameArgs = {
  fieldSlugs: string[];
  separator: string;
  displayNameField?: string;
  useAsTitle?: string;
};

const generateDisplayName = ({ fieldSlugs, separator = ', ', displayNameField = 'displayName', useAsTitle }: GenerateDisplayNameArgs) => {
  return async ({ data }: Context<RecordData>): Promise<RecordData> => {
    let displayName = '';
    for (let i = 0; i < fieldSlugs.length; i++) {
      const slug = fieldSlugs[i];
      const value = data[slug];
      if (value) {
        const label = await payload.fields.findOne({ where: { slug } }).then((field) => field?.admin?.label || slug);
        displayName += `${label}: ${value}${i === fieldSlugs.length - 1 ? '' : separator}`;
      }
    }
    data[displayNameField] = displayName;
    if (useAsTitle) {
      data.admin = {
        ...(data.admin || {}),
        useAsTitle,
      };
    }
    return data;
  };
};

const generateDisplayNameHook: CollectionBeforeChangeHook = async ({ data, collection }) => {
  const { fieldSlugs, separator, displayNameField, useAsTitle } = collection.admin || {};

  const args: GenerateDisplayNameArgs = {
    fieldSlugs,
    separator,
    displayNameField,
    useAsTitle,
  };

  const displayNameData = await generateDisplayName(args)({ data });

  return { ...displayNameData };
};

export default generateDisplayNameHook;
